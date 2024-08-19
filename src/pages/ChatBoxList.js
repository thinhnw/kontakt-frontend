// src/pages/ChatBoxList.js
import React from 'react';
import './ChatBoxList.css'; // Import CSS specific to ChatBoxList

const ChatBoxList = () => {
  const chatBoxes = [
    { id: 1, name: 'Chat with Alice' },
    { id: 2, name: 'Chat with Bob' },
  ];

  return (
    <div className="chatbox-list-container">
      <h1>Your Chats</h1>
      <ul className="chatbox-list">
        {chatBoxes.map((chat) => (
          <li key={chat.id}>
            <a href={`/chat/${chat.id}`}>{chat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatBoxList;
