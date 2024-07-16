import React from "react";
import "./ChatHistory.scss";
import Message from "../Message";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {chatHistory.map((msg, index) => (
        <Message key={index} message={msg.data} />
      ))}
    </div>
  );
};

export default ChatHistory;
