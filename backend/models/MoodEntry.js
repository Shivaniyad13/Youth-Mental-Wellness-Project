const mongoose = require('mongoose');

const moodEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mood: {
      type: String,
      enum: ['Happy', 'Stressed', 'Sad', 'Excited'],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MoodEntry', moodEntrySchema);
