import React from "react";
import DisplayChatTitle from "./DisplayChatTitle";
import FlexEvenly from "../../../Components/FlexEvenly";

const ChatList = ({ userList, currentChat, setCurrentChat }) => {
  return (
    <FlexEvenly overflow={"auto"}>
      {userList.map((m, i) => (
        <DisplayChatTitle
          key={i}
          title={m}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      ))}
    </FlexEvenly>
  );
};

export default ChatList;
