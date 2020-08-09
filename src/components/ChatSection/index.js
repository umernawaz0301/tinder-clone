import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import datebase from "../../firebase";

function Chats() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsubscribe = datebase
      .collection("chats")
      .onSnapshot((snapshot) =>
        setChats(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // clean up function
      unsubscribe();
    };
  }, []);
  console.log("chat", chats);
  return (
    <div className="chats">
      {chats.map((chat) => (
        <Chat
          key={`${chat.name}-${chat.timestamp.seconds}`}
          name={chat.name}
          message={chat.lastMessage}
          timestamp={chat.timestamp.seconds}
          profilePic={chat.profilePic}
        />
      ))}

      {/* <Chat
        name="Mark"
        message="Hello"
        timestamp="1 minute ago"
        profilePic="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4af3e5d8-3352-49bd-9570-de2aef8972b9/eric-bailey-profile.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola"
        timestamp="4 minute ago"
        profilePic="https://semantic-ui.com/images/avatar/large/ade.jpg"
      />
      <Chat
        name="John"
        message="Hey there!"
        timestamp="15 minute ago"
        profilePic="https://www.seoclerk.com/images/membersprofilepic/o/460030.png"
      /> */}
    </div>
  );
}

export default Chats;
