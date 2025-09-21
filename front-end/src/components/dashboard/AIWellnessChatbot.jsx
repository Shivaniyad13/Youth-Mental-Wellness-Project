import React, { useState } from 'react';
import './AIWellnessChatbot.css';

const AIWellnessChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your AI Wellness Chatbot. How are you feeling today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4004/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error connecting to server.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <h2>AI Wellness Chatbot</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'bot' ? 'bot-message' : 'user-message'}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="bot-message">Typing...</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AIWellnessChatbot;
