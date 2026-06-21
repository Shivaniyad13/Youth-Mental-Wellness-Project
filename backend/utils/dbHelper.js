const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/User');
const MoodEntry = require('../models/MoodEntry');
const JournalEntry = require('../models/JournalEntry');

const DATA_DIR = path.join(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const getFilePath = (filename) => path.join(DATA_DIR, filename);

const readJSON = (filename) => {
  const filePath = getFilePath(filename);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return [];
  }
};

const writeJSON = (filename, data) => {
  const filePath = getFilePath(filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const isMongoConnected = () => mongoose.connection.readyState === 1;

module.exports = {
  // User operations
  findUserByEmail: async (email) => {
    if (isMongoConnected()) {
      return await User.findOne({ email: email.toLowerCase() });
    }
    const users = readJSON('users.json');
    return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  findUserByMobile: async (mobile) => {
    if (isMongoConnected()) {
      return await User.findOne({ mobile });
    }
    const users = readJSON('users.json');
    return users.find(u => u.mobile === mobile) || null;
  },

  createUser: async (userData) => {
    if (isMongoConnected()) {
      return await User.create(userData);
    }
    const users = readJSON('users.json');
    const newUser = {
      _id: new mongoose.Types.ObjectId().toString(),
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    users.push(newUser);
    writeJSON('users.json', users);
    return newUser;
  },

  // Mood operations
  findMoodsByUserId: async (userId) => {
    if (isMongoConnected()) {
      return await MoodEntry.find({ userId }).sort({ date: -1 });
    }
    const moods = readJSON('moods.json');
    return moods
      .filter(m => m.userId.toString() === userId.toString())
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  createMood: async (moodData) => {
    if (isMongoConnected()) {
      const entry = new MoodEntry(moodData);
      return await entry.save();
    }
    const moods = readJSON('moods.json');
    const newMood = {
      _id: new mongoose.Types.ObjectId().toString(),
      ...moodData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    moods.push(newMood);
    writeJSON('moods.json', moods);
    return newMood;
  },

  // Journal operations
  findJournalsByUserId: async (userId) => {
    if (isMongoConnected()) {
      return await JournalEntry.find({ userId }).sort({ date: -1 });
    }
    const journals = readJSON('journals.json');
    return journals
      .filter(j => j.userId.toString() === userId.toString())
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  createJournal: async (journalData) => {
    if (isMongoConnected()) {
      const entry = new JournalEntry(journalData);
      return await entry.save();
    }
    const journals = readJSON('journals.json');
    const newJournal = {
      _id: new mongoose.Types.ObjectId().toString(),
      ...journalData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    journals.push(newJournal);
    writeJSON('journals.json', journals);
    return newJournal;
  }
};
