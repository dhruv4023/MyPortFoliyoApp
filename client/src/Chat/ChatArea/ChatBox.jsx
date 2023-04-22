import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";
import FlexBetween from "../../Components/FlexBetween";

const ChatBox = ({ chatTitle, msgList }) => {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh(0);
  }, [refresh, msgList]);
  return (
    <>
      {chatTitle ? (
        <FlexBetween
          flexDirection={"column"}
          border={"1px solid"}
          width={"100%"}
        >
          <h2 className="chatHead">-:Chat with {chatTitle}:-</h2>
          <Box
            className="messBox"
            height={"50vh"}
            my={"0.5rem"}
            width={"100%"}
            overflow={"auto"}
          >
            {msgList && <Messages msgLst={msgList} />}
          </Box>

          <WriteMsg setRefresh={setRefresh} msgList={msgList} />
        </FlexBetween>
      ) : (
        <h1>Select User to Start Chat</h1>
      )}
    </>
  );
};

export default ChatBox;
