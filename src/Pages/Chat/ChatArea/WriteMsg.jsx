import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../../../Components/FlexBetween";
import { sendNewMsgs } from "../chatApi";
const WriteMsg = ({ id, setRefresh, msgList, socket }) => {
  const [val, setVal] = useState("");
  const handleSendMess = (e) => {
    e.preventDefault();
    setRefresh(1);
    setVal("");
    sendNewMsgs({ side: "a", message: val }, id);
    socket.send(
      JSON.stringify({ type: "message", value: val, side: "a", id: id })
    );
  };
  return (
    <form onSubmit={handleSendMess}>
      <FlexBetween m={"0.2rem"}>
        <TextField
          type="text"
          sx={{
            width: "100%",
          }}
          placeholder="Type here..."
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <Button
          type="submit"
          sx={{ m: "0.2rem", border: "1px solid", height: "3rem" }}
        >
          send
        </Button>
      </FlexBetween>
    </form>
  );
};

export default WriteMsg;
