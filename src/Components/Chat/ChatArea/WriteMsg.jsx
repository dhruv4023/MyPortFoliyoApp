import React, { useState } from "react";
import { sendNewMsgs } from "./../chatApis";
const WriteMsg = ({ id, setRefresh, msgList }) => {
  const [val, setVal] = useState("");
  const handleSendMess = (e) => {
    e.preventDefault();
    setRefresh(1);
    msgList.push({ side: "v", message: val });
    setVal("");
    sendNewMsgs({ side: "v", message: val }, id);
  };
  return (
    <form onSubmit={handleSendMess} className="sendMess">
      <input
        type="text"
        className="sendMessChat sendChatText"
        placeholder="Type here..."
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <input className="sendMessChat sendChatBnt" type="submit" value="Send" />
    </form>
  );
};

export default WriteMsg;
