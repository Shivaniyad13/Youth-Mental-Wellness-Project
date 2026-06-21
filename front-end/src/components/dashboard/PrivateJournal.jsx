import React, { useState, useEffect } from "react";
import "./PrivateJournal.css";

const PrivateJournal = () => {
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState([]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    try {
      const res = await fetch("/api/journal", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.success) {
        setEntries(data.journals);
      }
    } catch (error) {
      console.error("Failed to fetch journal entries", error);
    }
  };

  const submitEntry = async () => {
    if (!journalText.trim()) return;
    setLoading(true);
    setAiSuggestion("");
    try {
      const res = await fetch("/api/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ text: journalText }),
      });
      const data = await res.json();
      if (data.success) {
        setJournalText("");
        fetchJournalEntries();
        fetchAiSuggestion(journalText);
      } else {
        alert("Failed to save journal entry");
      }
    } catch (error) {
      alert("Error saving journal entry");
    } finally {
      setLoading(false);
    }
  };

  const fetchAiSuggestion = async (text) => {
    try {
      const res = await fetch("/api/journal/suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data.success) {
        setAiSuggestion(data.suggestion);
      } else {
        setAiSuggestion("No suggestion available.");
      }
    } catch (error) {
      setAiSuggestion("Error fetching suggestion.");
    }
  };

  return (
    <div className="private-journal-container">
      <h2>Private Journal</h2>
      <textarea
        rows="5"
        placeholder="Write your thoughts here..."
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        disabled={loading}
      />
      <button onClick={submitEntry} disabled={loading || !journalText.trim()}>
        Save Entry
      </button>

      {loading && <p>Saving entry...</p>}

      {aiSuggestion && (
        <div className="ai-suggestion">
          <h3>Supportive Suggestion</h3>
          <p>{aiSuggestion}</p>
        </div>
      )}

      <h3>Previous Entries</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <strong>{new Date(entry.date).toLocaleString()}:</strong>{" "}
            {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivateJournal;
