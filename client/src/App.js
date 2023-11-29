// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const generateRandomResponse = () => {
    const responses = [
      "Hi How are you.",
      "What can i help you with?",
      "Tell the book name",
      "How can I assist you today?",
     
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {
    const botResponse = generateRandomResponse();

    setChatHistory([...chatHistory, { type: 'user', text: userInput }, { type: 'bot', text: botResponse }]);
    setUserInput('');
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="App">
      <div className="chat-container">
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
        <button onClick={clearChat}>Clear</button>
      </div>
    </div>
  );
}

export default App;
