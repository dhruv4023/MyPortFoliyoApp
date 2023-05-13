import React, { useEffect } from "react";
import { useState } from "react";
import "./ChatMessages.css";
import WidgetWrapper from "../../Components/WidgetWrapper";
import ChatList from "./ChatList/ChatList";
import ChatBox from "./ChatArea/ChatBox";

import { getChatTitles, getChatData } from "./chatApi";
import { socketConn } from "./wsApi";

// const userList = ["abc", "xyz"];

// const msgList = [
//   {
//     name: "xyz",
//     messagesList: [
//       {
//         _id: 1,
//         side: "a",
//         message: "Hello Sir!",
//       },
//       {
//         _id: 2,
//         side: "a",
//         message: "hello",
//       },
//       {
//         _id: 3,
//         side: "v",
//         message: "hello dhruv i'm xyz",
//       },
//     ],
//   },
//   {
//     name: "abc",
//     messagesList: [
//       {
//         _id: 1,
//         side: "a",
//         message: "Hello Sir!",
//       },
//       {
//         _id: 2,
//         side: "a",
//         message: "hello",
//       },
//       {
//         _id: 3,
//         side: "v",
//         message: "hello dhruv i'm abc",
//       },
//     ],
//   },
// ];
function ChatMessages() {
  const [socket, setSocket] = useState();
  const [userList, setUserList] = useState();
  const [currentChat, setCurrentChat] = useState();
  const [msgData, setMsgData] = useState();
  useEffect(() => {
    !socket && setSocket(socketConn());
    if (socket)
      socket.onopen = () => {
        // console.log("Web Socket Client connected");
      };
  }, [socket]);
  useEffect(() => {
    !userList && getChatTitles().then((data) => setUserList(data));
    currentChat &&
      getChatData(currentChat._id).then((data) => setMsgData(data));
  }, [currentChat]);
  return (
    <WidgetWrapper width={"80%"} border={"2px solid"} flexDirection={"column"}>
      {userList && (
        <ChatList
          userList={userList}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      )}
      {msgData && socket && (
        <ChatBox socket={socket} currentChat={currentChat} msgList={msgData} />
      )}
    </WidgetWrapper>
  );
}

export default ChatMessages;
