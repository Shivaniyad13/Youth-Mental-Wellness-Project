const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET || 'devSecret';

// Middleware to authenticate JWT
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

router.post('/chatbot', authenticateJWT, async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ success: false, message: 'Message is required' });
        }

        // Simple keyword-based response logic
        let reply = "I'm here to listen. Tell me more.";
        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes('happy') || lowerMsg.includes('good') || lowerMsg.includes('great')) {
            reply = "That's wonderful to hear! Keep up the positive vibes.";
        } else if (lowerMsg.includes('sad') || lowerMsg.includes('bad') || lowerMsg.includes('depressed')) {
            reply = "I'm sorry you're feeling that way. Remember, it's okay not to be okay. Have you tried some deep breathing?";
        } else if (lowerMsg.includes('stress') || lowerMsg.includes('anxious') || lowerMsg.includes('worry')) {
            reply = "Stress can be tough. Try to take a break and focus on the present moment.";
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            reply = "Hello! How can I support you today?";
        }

        res.json({ success: true, reply });
    } catch (error) {
        console.error('Chatbot Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
