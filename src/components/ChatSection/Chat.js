import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chats.css";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  const displayTime = new Date(parseInt(timestamp + "000", 10)).toDateString();
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{displayTime}</p>
      </div>
    </Link>
  );
}

export default Chat;
