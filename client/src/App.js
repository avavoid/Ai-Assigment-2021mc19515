import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        const response = await axios.post('http://localhost:3001/chat', { user_message: userInput });
        const botResponse = response.data.bot_response;

        setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
        setUserInput('');
    };

    return (
        <div className="App">
            <div id="chat-container">
                {chatHistory.map((entry, index) => (
                    <div key={index}>
                        <p>User: {entry.user}</p>
                        <p>Bot: {entry.bot}</p>
                    </div>
                ))}
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;
