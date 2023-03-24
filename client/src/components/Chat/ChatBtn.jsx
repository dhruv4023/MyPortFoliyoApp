import React, { useEffect, useState } from "react";
import chatBtnImg from "./chatIcon.png";
import "./Chat.css";
import Login from "./Login";
import { Box } from "@mui/material";
import ChatBox from "./ChatArea/ChatBox";

// let ChatAreaDsply = document.querySelector(":root");

export default function ChatBtn() {
  // const [ChatAreaDisplay, setChatAreaDisplay] = useState({ display: "none" });
  const [ChatAreaDisplay, setChatAreaDisplay] = useState(false);

  // const cBtn = () => {
  //   if (
  //     getComputedStyle(ChatAreaDsply).getPropertyValue("--chatDisply") ===
  //     "block"
  //   ) {
  //     ChatAreaDsply.style.setProperty("--chatDisply", "none");
  //     setChatAreaDisplay({ display: "none" });
  //   } else {
  //     ChatAreaDsply.style.setProperty("--chatDisply", "block");
  //     // setTimeout(() => {
  //     setChatAreaDisplay({ display: "block" });
  //     // }, 2000);
  //   }
  // };

  useEffect(() => {});
  return (
    <>
      <Box className="chat2">
        <Box
          className="chatBtn"
          onClick={() => setChatAreaDisplay(!ChatAreaDisplay)}
        >
          <img src={chatBtnImg} className="chat_icon" alt="" />
        </Box>
        {ChatAreaDisplay && <ChatBox />}
      </Box>
    </>
  );
}
