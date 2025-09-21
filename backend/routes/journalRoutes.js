const express = require('express');
const router = express.Router();
const JournalEntry = require('../models/JournalEntry');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET || 'devSecret';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtsecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Get journal entries for authenticated user
router.get('/journal', authenticateJWT, async (req, res) => {
  try {
    const journals = await JournalEntry.find({ userId: req.user._id }).sort({ date: -1 });
    res.json({ success: true, journals });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch journal entries' });
  }
});

// Save new journal entry for authenticated user
router.post('/journal', authenticateJWT, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === '') {
      return res.status(400).json({ success: false, message: 'Journal text is required' });
    }
    const newEntry = new JournalEntry({ userId: req.user._id, text, date: new Date() });
    await newEntry.save();
    res.json({ success: true, message: 'Journal entry saved' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save journal entry' });
  }
});

module.exports = router;
