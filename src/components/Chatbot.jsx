import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = ({ isOpen, handleOpenBot }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [tags, setTags] = useState([
    "Greetings",
    "Help",
    "Information",
    "Goodbye",
  ]);

  const sendMessage = async () => {
    console.log(`chat`);
  };

  const handleTagClick = (tag) => {
    setInput(tag);

    switch (tag.toLowerCase()) {
      case "greetings":
        setMessages([
          ...messages,
          {
            text: "Hello! How can I help you today?",
            user: "bot",
            tag: "Greetings",
          },
        ]);
        break;
      case "help":
        setMessages([
          ...messages,
          {
            text: "Sure, I can help you. What do you need assistance with?",
            user: "bot",
            tag: "Help",
          },
        ]);
        break;
      case "information":
        setMessages([
          ...messages,
          {
            text: "Here is some information for you...",
            user: "bot",
            tag: "Information",
          },
        ]);
        break;
      case "goodbye":
        setMessages([
          ...messages,
          {
            text: "Goodbye! If you have more questions, feel free to ask.",
            user: "bot",
            tag: "Goodbye",
          },
        ]);
        break;
      default:
        setMessages([
          ...messages,
          {
            text: "I did not understand that. Please ask another question.",
            user: "bot",
            tag: "Default",
          },
        ]);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={`chatbot-container `}>
          <div className={`chatbot-header`}>
            <span>Chatbot</span>
            <button className="button" onClick={handleOpenBot}>
              Close
            </button>
          </div>
          <div className="chatbot-message-container">
            <div className="chatbot-messages">
              <p className="welcome-message">Welcome! How can I assist you?</p>
              {messages.map((message, index) => (
                <div className="message-cont" key={index}>
                  <div className="user-tag-container">{message.tag}</div>
                  <div className="bot-message-container">{message.text}</div>
                </div>
              ))}
            </div>
            <div className="tag-container">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="tag"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="message-input">
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="user-input"
              />
              <button onClick={sendMessage} className="button">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
