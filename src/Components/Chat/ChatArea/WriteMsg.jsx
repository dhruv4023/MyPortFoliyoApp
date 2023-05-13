import React, { useState } from "react";
import { sendNewMsgs } from "./../chatApis";
const WriteMsg = ({ id, setRefresh, msgList, socket }) => {
  const [val, setVal] = useState("");
  const handleSendMess = (e) => {
    e.preventDefault();
    setVal("");
    sendNewMsgs({ side: "v", message: val }, id);
    socket.send(
      JSON.stringify({ type: "message", value: val, side: "v", id: id })
    );
    setRefresh(1);
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
