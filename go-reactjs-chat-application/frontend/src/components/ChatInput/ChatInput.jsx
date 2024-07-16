import React, { useCallback } from "react";
import { sendMsg } from "../../api";
import "./ChatInput.scss";

const ChatInput = () => {
  const send = useCallback((event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }, []);

  return (
    <>
      <div className="ChatInput">
        <input
          type="text"
          onKeyDown={send}
          placeholder="Type a message and hit Enter"
        />
      </div>
    </>
  );
};

export default ChatInput;
