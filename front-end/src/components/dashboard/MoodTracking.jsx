import React, { useState, useEffect } from 'react';
import './MoodTracking.css';

const moods = ['Happy', 'Stressed', 'Sad', 'Excited'];

const MoodTracking = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    fetchMoodHistory();
  }, []);

  const fetchMoodHistory = async () => {
    try {
      const res = await fetch('/api/mood', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();
      if (data.success) {
        setMoodHistory(data.moods);
      }
    } catch (error) {
      console.error('Failed to fetch mood history', error);
    }
  };

  const submitMood = async () => {
    if (!selectedMood) return;
    try {
      const res = await fetch('/api/mood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ mood: selectedMood }),
      });
      const data = await res.json();
      if (data.success) {
        fetchMoodHistory();
        setSelectedMood('');
      } else {
        alert('Failed to save mood');
      }
    } catch (error) {
      alert('Error saving mood');
    }
  };

  return (
    <div className="mood-tracking-container">
      <h2>Daily Mood Check-in</h2>
      <div className="mood-options">
        {moods.map((mood) => (
          <button
            key={mood}
            className={selectedMood === mood ? 'selected' : ''}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
      <button onClick={submitMood} disabled={!selectedMood}>
        Submit Mood
      </button>

      <h3>Mood History</h3>
      <ul>
        {moodHistory.map((entry) => (
          <li key={entry._id}>
            {new Date(entry.date).toLocaleDateString()}: {entry.mood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracking;
