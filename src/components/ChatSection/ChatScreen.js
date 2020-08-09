import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      message: "Hey whats up!",
      timestamp: "40 second ago",
      profilePic: "https://semantic-ui.com/images/avatar2/large/lindsay.png",
    },
    {
      message: "Hey whats up!",
    },
    {
      name: "Sarah",
      message: "Hey whats up!",
      timestamp: "50 second ago",
      profilePic: "https://semantic-ui.com/images/avatar2/large/lindsay.png",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        you matched with sarah on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div
            className="chatScreen__message"
            key={`${message.name}-${message.timestamp}`}
          >
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.profilePic}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={`${message.message}`}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chatScreen__inputButton" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
