import React, { useContext, useState } from "react";
import chatBtnImg from "./chatIcon.png";
import "./Chat.css";
import Messages from "./Messages";
import Login from "./Login";
import Tip from "../Tip/Tip";
import GlobalVarContext from "../../Context/GlobalVarContext";

export default function ChatBtn() {
  const context = useContext(GlobalVarContext);
  const { CurrentUserId, setMessage, messList, handleSendMess, message } =
    context;

  const [ChatAreaDisplay, setChatAreaDisplay] = useState({ display: "none" });
  let ChatAreaDsply = document.querySelector(":root");
  // console.log( getComputedStyle(ChatAreaDsply).getPropertyValue("--chatDisply"))
  // ChatAreaDsply.style.setProperty("--chatDisply", "none");
  const cBtn = () => {
    if (
      getComputedStyle(ChatAreaDsply).getPropertyValue("--chatDisply") ===
      "block"
    ) {
      ChatAreaDsply.style.setProperty("--chatDisply", "none");
      setChatAreaDisplay({ display: "none" });
    } else {
      ChatAreaDsply.style.setProperty("--chatDisply", "block");
      // setTimeout(() => {
      setChatAreaDisplay({ display: "block" });
      // }, 2000);
    }
  };

  return (
    <>
      {/* <div className="chat" onClick={cBtn} style={ChatAreaDisplay}>
        {" "}
      </div> */}
      <div className="chat2">
        <div className="chatBtn" onClick={cBtn}>
          <Tip
            tip="Click To Open Chat With Dhruv"
            component={<img src={chatBtnImg} className="chat_icon" alt="" />}
          />
        </div>
        <div className="chatArea showHideBox" style={ChatAreaDisplay}>
        {/* <div className="chatArea"> */}
          <h2 className="chatHead">-:Chat with Dhruv:-</h2>
          <div className="messBox">
            {messList &&
              messList
                ?.filter((q) => q?._id === CurrentUserId)
                ?.map((xy) => <Messages key={xy?._id} mess={xy} />)}
          </div>
          <form onSubmit={handleSendMess} className="sendMess">
            <input
              type="text"
              className="sendMessChat sendChatText"
              placeholder="Type here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input
              className="sendMessChat sendChatBnt"
              type="submit"
              value="Send"
            />
          </form>
          <Login style={ChatAreaDisplay} />
        </div>
      </div>
    </>
  );
}
