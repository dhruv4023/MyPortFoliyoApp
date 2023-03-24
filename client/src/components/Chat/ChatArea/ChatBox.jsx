import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";

const msgList = [
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
];

const ChatBox = () => {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh(0);
  }, [refresh]);
  return (
    <Box className="chatArea showHideBox">
      <h2 className="chatHead">-:Chat with Dhruv:-</h2>
      <Box className="messBox">{msgList && <Messages msgLst={msgList} />}</Box>
      <WriteMsg setRefresh={setRefresh} msgList={msgList} />
    </Box>
  );
};

export default ChatBox;
