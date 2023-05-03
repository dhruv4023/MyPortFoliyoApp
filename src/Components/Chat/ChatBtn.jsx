import React, { useEffect, useState } from "react";
import chatBtnImg from "./chatIcon.png";
import "./Chat.css";
import { Box } from "@mui/material";
import ChatBox from "./ChatArea/ChatBox";

export default function ChatBtn() {
  const [ChatAreaDisplay, setChatAreaDisplay] = useState(false);

  return (
    <Box className="chat2">
      <Box
        className="chatBtn"
        onClick={() => setChatAreaDisplay(!ChatAreaDisplay)}
      >
        <img src={chatBtnImg} className="chat_icon" alt="" />
      </Box>
      {ChatAreaDisplay && (
        <>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              top: 0,
              right: 0,
              zIndex: 3,
              position: "fixed",
              border: "1px solid ",
            }}
            onClick={() => setChatAreaDisplay(false)}
          />
          <ChatBox />
        </>
      )}
    </Box>
  );
}
