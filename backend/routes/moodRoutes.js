const express = require('express');
const router = express.Router();
const dbHelper = require('../utils/dbHelper');
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

// Get mood history for authenticated user
router.get('/mood', authenticateJWT, async (req, res) => {
  try {
    const moods = await dbHelper.findMoodsByUserId(req.user._id);
    res.json({ success: true, moods });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch mood history' });
  }
});

// Save new mood entry for authenticated user
router.post('/mood', authenticateJWT, async (req, res) => {
  try {
    const { mood } = req.body;
    if (!mood) {
      return res.status(400).json({ success: false, message: 'Mood is required' });
    }
    await dbHelper.createMood({ userId: req.user._id, mood, date: new Date() });
    res.json({ success: true, message: 'Mood saved' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save mood' });
  }
});

module.exports = router;
