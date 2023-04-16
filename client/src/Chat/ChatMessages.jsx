import React, { useEffect } from "react";
import { useState } from "react";
import "./ChatMessages.css";
import WidgetWrapper from "../Components/WidgetWrapper";
import ChatList from "./ChatList/ChatList";
import ChatBox from "./ChatArea/ChatBox";
function ChatMessages() {
  const userList = ["abc", "xyz"];
  const msgList = [
    {
      name: "xyz",
      messagesList: [
        {
          _id: 1,
          side: "a",
          message: "Hello Sir!",
        },
        {
          _id: 2,
          side: "a",
          message: "hello",
        },
        {
          _id: 3,
          side: "v",
          message: "hello dhruv i'm xyz",
        },
      ],
    },
    {
      name: "abc",
      messagesList: [
        {
          _id: 1,
          side: "a",
          message: "Hello Sir!",
        },
        {
          _id: 2,
          side: "a",
          message: "hello",
        },
        {
          _id: 3,
          side: "v",
          message: "hello dhruv i'm abc",
        },
      ],
    },
  ];
  const [chatTitle, setChatTitle] = useState();
  const [msgData, setMsgData] = useState();
  useEffect(() => {
    chatTitle &&
      msgList
        .filter((f) => f.name === chatTitle)
        .map((m) => setMsgData(m.messagesList));
  }, [chatTitle]);
  return (
    <WidgetWrapper border={"2px solid"} flexDirection={"column"}>
      <ChatList
        userList={userList}
        chatTitle={chatTitle}
        setChatTitle={setChatTitle}
      />
      {msgList && <ChatBox chatTitle={chatTitle} msgList={msgData} />}
    </WidgetWrapper>
  );
}

export default ChatMessages;
