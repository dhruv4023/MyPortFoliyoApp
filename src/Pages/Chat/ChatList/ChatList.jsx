import React from "react";
import DisplayChatTitle from "./DisplayChatTitle";
import { Box } from "@mui/material";

const ChatList = ({ userList, currentChat, setCurrentChat }) => {
  return (
    <Box
      display={"flex"}
      sx={{ overflowX: "auto" }}
      flexGrow={1}
    >
      {userList.map((m, i) => (
        <DisplayChatTitle
          key={i}
          title={m}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      ))}
    </Box>
  );
};

export default ChatList;
