import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";

const ChatBox = ({ chatTitle, msgList }) => {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh(0);
  }, [refresh,msgList]);
  return (
    <Box border={"1px solid"} width={"100%"}>
      <h2 className="chatHead">-:Chat with {chatTitle}:-</h2>
      <Box className="messBox" my={"0.5rem"} width={"100%"}>{msgList && <Messages msgLst={msgList} />}</Box>
      <WriteMsg  setRefresh={setRefresh} msgList={msgList} />
    </Box>
  );
};

export default ChatBox;
