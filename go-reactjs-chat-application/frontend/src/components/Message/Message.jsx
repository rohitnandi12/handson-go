import React, { useEffect, useState } from "react";
import "./Message.scss";

const Message = ({ message }) => {

  const [parsedMessage, setParsedMessage] = useState({});

  useEffect(() => {
    setParsedMessage(JSON.parse(message));
  }, [message]);

  return <div key={parsedMessage.type} className="Message">{parsedMessage.body}</div>;
};

export default Message;