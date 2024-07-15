import React from "react";
import "./ChatHistory.scss";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {chatHistory.map((msg) => (
        <p key={msg.id}>{msg.data}</p>
      ))}
    </div>
  );
};

export default ChatHistory;
