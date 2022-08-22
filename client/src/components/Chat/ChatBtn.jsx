import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../actions/chat";
import chatBtnImg from "./chatIcon.png";
import "./Chat.css";
import Messages from "./Messages";
import Login from "./Login";
import Tip from "../Tip/Tip";

export default function ChatBtn() {
  const [ChatAreaDisplay, setChatAreaDisplay] = useState({ display: "none" });

  const dispatch = useDispatch();
  const cBtn = () => {
    if (ChatAreaDisplay.display === "block") {
      setChatAreaDisplay({ display: "none" });
    } else {
      setChatAreaDisplay({ display: "block" });
    }
  };

  const User = useSelector((state) => state.currentUserReducer);
  const messList = useSelector((state) => state.chatDataReducer)?.data;
  const id = User?.result?._id;

  // console.log(messList)
  const [message, setMessage] = useState("");

  // const side = ;

  const handleSendMess = (e) => {
    e.preventDefault();
    if (message) {
      // console.log(id, message, side);
      dispatch(sendMessage({ id, message, side: "visitor" }));
    }
    setMessage("");
  };

  return (
    <> 
    <div className="chat" onClick={cBtn} style={ChatAreaDisplay} > </div>
      <div className="chat2"  >
        <div className="chatBtn" onClick={cBtn}>
          <img src={chatBtnImg} width={100} alt="" />
          <Tip tip="Click on Chat To Start Chat With Dhruv" />
        </div>
        <div className="chatArea" style={ChatAreaDisplay}>
          <h2 className="chatHead">-:Chat with Dhruv:-</h2>

          <div className="messBox">
            {messList &&
              messList
                ?.filter((q) => q?._id === id)
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
          <Login />
        </div>
      </div>
    </>
  );
}

// const handleSubmitChat = (e) => {
//   e.preventDefault();
//   if (!name || !email) {
//     alert("pls fill the entire form!");
//   } else {
//     setContDis({ display: "none" });
//     dispatch(chatData({  email, side }));
//   }
// };
// const messages = "visitor";
// const messageList = {
//   name: "abc",
//   email: "ab@mail.com",
//   side: "visitor",
//   messages: [
//     {
//       id: 1,
//       mess: "hm",
//       side: "me",
//     },
//     {
//       id: 2,
//       mess: "hi",
//       side: "visitor",
//     },
//     {
//       id: 3,
//       mess: "hellooo",
//       side: "me",
//     },
//     {
//       id: 4,
//       mess: "byee",
//       side: "visitor",
//     },
//   ],
// };

// console.log(messList);

// const chatDatas = [
//   {
//     name: "abc",
//     email: "ab@mail.com",
//     side: "visitor",
//     messages: [
//       {
//         mess: "hm",
//         side: "me",
//       },
//       {
//         mess: "hi",
//         side: "visitor",
//       },
//       {
//         mess: "hellooo",
//         side: "me",
//       },
//       {
//         mess: "byee",
//         side: "visitor",
//       },
//     ],
//   },
//   {
//     name: "xyz",
//     email: "xy@mail.com",
//     side: "visitor",
//     messages: [
//       {
//         mess: "hm",
//         side: "me",
//       },
//       {
//         mess: "hi",
//         side: "visitor",
//       },
//     ],
//   },
// ];
