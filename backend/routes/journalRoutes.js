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

// Get journal entries for authenticated user
router.get('/journal', authenticateJWT, async (req, res) => {
  try {
    const journals = await dbHelper.findJournalsByUserId(req.user._id);
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
    await dbHelper.createJournal({ userId: req.user._id, text, date: new Date() });
    res.json({ success: true, message: 'Journal entry saved' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save journal entry' });
  }
});

// Get supportive AI suggestion for journal entry
router.post('/journal/suggestion', authenticateJWT, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === '') {
      return res.status(400).json({ success: false, message: 'Journal text is required' });
    }

    // Smart rule-based suggestion generator
    let suggestion = "Thank you for sharing your thoughts. Writing them down is a great step toward mental clarity. Try to focus on what you can control today.";
    const lowerText = text.toLowerCase();

    if (lowerText.includes('stress') || lowerText.includes('overwhelm') || lowerText.includes('anxious') || lowerText.includes('panic') || lowerText.includes('worry')) {
      suggestion = "It sounds like you're carrying a lot of stress right now. Try practicing the 4-7-8 breathing technique: inhale for 4 seconds, hold for 7, and exhale for 8. Breaking your tasks into tiny, manageable steps can also help reduce overwhelm.";
    } else if (lowerText.includes('sad') || lowerText.includes('lonely') || lowerText.includes('crying') || lowerText.includes('depressed') || lowerText.includes('hopeless')) {
      suggestion = "I'm sorry you're feeling down. Please remember that you are not alone, and it's okay to feel this way. Consider reaching out to a trusted friend or family member, or engaging in a small activity that brings you comfort, like listening to favorite music or taking a short walk.";
    } else if (lowerText.includes('exam') || lowerText.includes('test') || lowerText.includes('study') || lowerText.includes('fail') || lowerText.includes('grade')) {
      suggestion = "Academic pressure can be heavy. Remember that exams measure a moment in time, not your intelligence or value as a person. Ensure you take frequent 5-10 minute breaks (using the Pomodoro technique) and prioritize getting enough sleep.";
    } else if (lowerText.includes('angry') || lowerText.includes('frustrated') || lowerText.includes('mad') || lowerText.includes('hate')) {
      suggestion = "Frustration is a natural reaction. Giving yourself permission to step away from the situation can be very helpful. Writing down the root cause of the anger or venting it out in a physical activity (like stretching or walking) can help release the tension.";
    } else if (lowerText.includes('happy') || lowerText.includes('good') || lowerText.includes('excited') || lowerText.includes('proud') || lowerText.includes('grateful')) {
      suggestion = "It's wonderful to read about your positive feelings! Taking a moment to appreciate and celebrate these highlights helps build long-term emotional resilience. Keep up the amazing work!";
    }

    res.json({ success: true, suggestion });
  } catch (error) {
    console.error('Suggestion Error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate suggestion' });
  }
});

module.exports = router;
