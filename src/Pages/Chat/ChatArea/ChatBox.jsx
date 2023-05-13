import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";
import FlexBetween from "../../../Components/FlexBetween";

const ChatBox = ({ currentChat, msgList, socket }) => {
  const msgContainerRef = useRef(null);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh(0);
  }, [refresh, msgList]);
  useEffect(() => {
    if (msgContainerRef.current) {
      const container = msgContainerRef.current;
      container.scrollTop = container.scrollHeight - container.clientHeight;
      const observer = new MutationObserver(() => {
        container.scrollTop = container.scrollHeight - container.clientHeight;
      });
      observer.observe(container, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
  }, []);
  console.log(currentChat);
  useEffect(() => {
    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      // console.log(currentChat._id , data.id);
      currentChat._id === data.id &&
        msgList.push({ side: data.side, message: data.value });
      setRefresh(!refresh);
    };
    setRefresh(0);
  }, [refresh]);
  return (
    <>
      {currentChat ? (
        <FlexBetween
          flexDirection={"column"}
          border={"1px solid"}
          width={"100%"}
        >
          <h2 className="chatHead">-:Chat with {currentChat.name}:-</h2>
          <Box
            className="messBox"
            height={"50vh"}
            my={"0.5rem"}
            width={"100%"}
            overflow={"auto"}
            ref={msgContainerRef}
          >
            {msgList && (
              <Messages
                refresh={refresh}
                setRefresh={setRefresh}
                msgLst={msgList}
              />
            )}
          </Box>

          <WriteMsg
            socket={socket}
            id={currentChat._id}
            setRefresh={setRefresh}
            msgList={msgList}
          />
        </FlexBetween>
      ) : (
        <h1>Select User to Start Chat</h1>
      )}
    </>
  );
};

export default ChatBox;
