const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeJournal(journalText) {
  // Call Gemini
  // Return structured analysis
}

module.exports = {
  analyzeJournal,
};