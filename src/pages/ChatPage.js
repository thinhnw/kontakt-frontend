// src/pages/Chat.js
import React, { useState } from 'react';
import './Chat.css'; // Import CSS specific to Chat

const Chat = () => {
  const [messages, setMessages] = useState(['Hello!', 'Hi there!']);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <p key={index} className="message">{message}</p>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
