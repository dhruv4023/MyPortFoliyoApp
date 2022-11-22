import GlobalVarContext from "./GlobalVarContext";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../actions/chat";

const ChatListFun = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);
  const messList = useSelector((state) => state.chatDataReducer)?.data;
  const [message, setMessage] = useState("");
  const CurrentUserId = currentUser?.result?._id;
  const handleSendMess = (e) => {
    e.preventDefault();
    if (message) {
      // console.log(CurrentUserId, message);
      dispatch(sendMessage({ id: CurrentUserId, message, side: "visitor" }));
    }
    setMessage("");
  };
  const linkList = useSelector((s) => s.projectReducer)?.data;
  
  return (
    <GlobalVarContext.Provider
      value={{
        messList,
        handleSendMess,CurrentUserId,
        message,
        setMessage,linkList
      }}
    >
      {props.children}
    </GlobalVarContext.Provider>
  );
};
export default ChatListFun;
