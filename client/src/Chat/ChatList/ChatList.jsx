import React from "react";
import DisplayChatTitle from "./DisplayChatTitle";
import FlexEvenly from "../../Components/FlexEvenly";

const ChatList = ({ userList, chatTitle, setChatTitle }) => {
  return (
    <FlexEvenly overflow={"auto"}>
      {userList.map((m, i) => (
        <DisplayChatTitle
          key={i}
          title={m}
          chatTitle={chatTitle}
          setChatTitle={setChatTitle}
        />
      ))}
    </FlexEvenly>
  );
};

export default ChatList;
