import React, { useEffect, useState } from "react";
import chatBtnImg from "./chatIcon.png";
import "./Chat.css";
import { Box, IconButton } from "@mui/material";
import ChatBox from "./ChatArea/ChatBox";

export default function ChatBtn() {
  const [ChatAreaDisplay, setChatAreaDisplay] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "0.2rem",
      }}
    >
      <IconButton
        sx={{
          padding: "0.2rem",
          cursor: "pointer",
        }}
        onClick={() => setChatAreaDisplay(!ChatAreaDisplay)}
      >
        <img src={chatBtnImg} style={{ width: "5rem" }} alt="" />
      </IconButton>
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
