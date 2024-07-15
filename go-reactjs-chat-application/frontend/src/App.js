import React, { useEffect, useCallback } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

const App = () => {
  useEffect(() => {
    connect();
  }, []);

  const send  = useCallback(() => {
    console.log("hello");
    sendMsg("hello");
  }, []);

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
