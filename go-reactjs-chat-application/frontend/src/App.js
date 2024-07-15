import React, { useEffect, useCallback, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
    });
  }, []);

  const send = useCallback(() => {
    console.log("hello");
    sendMsg("hello");
  }, []);

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
};

export default App;
