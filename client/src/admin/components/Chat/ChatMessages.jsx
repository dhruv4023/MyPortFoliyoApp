import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { sendMessage } from "../../../actions/chat";

import "./ChatMessages.css";
import MessageList from "./MessageList";
function ChatMessages() {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const [message, setMessage] = useState("");
  const chatContactList = useSelector((state) => state.chatDataReducer)?.data;
  // console.log(chatContactList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
    } else {
      dispatch(sendMessage({ id: chatId, message: message, side: "me" }));
    }
    setMessage("");
  };
  return (
    <div className="component_contaier_admin">
      <h1 className="heading_admin_component">Chats</h1>
      <div className="chatMessage_names">
        {chatContactList?.map((m) => {
          return (
            <NavLink
              key={m?._id}
              to={`/${process.env.REACT_APP_ADMIN_LINK}/${m._id}`}
              className="name_chatMessage"
            >
              {m?.name}
            </NavLink>
          );
        })}
        {!chatContactList && (
          <div className="name_chatMessage">No Chats Yet</div>
        )}
      </div>
      <div className="chatArea_chatMessage">
        <div className="ChatMessages_chatArea">
          {chatId ? (
            <>
              {chatContactList
                ?.filter((q) => q?._id === chatId)
                .map((m) => (
                  <MessageList key={m} messageList={m?.messages} />
                ))}
            </>
          ) : (
            <>
              <h2>Select Any Chat To views Messages</h2>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sendMess">
            <input
              type="text"
              placeholder="Type here..."
              className="iboxSendMess"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input type="submit" value={"Send"} className="subBtnSendMess" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatMessages;
