import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../../../Components/FlexBetween";
import { sendNewMsgs } from "../chatApi";
import { client } from "../../../state";

const WriteMsg = ({ id, setRefresh, msgList }) => {
  const [val, setVal] = useState("");
  const handleSendMess = (e) => {
    e.preventDefault();
    setRefresh(1);
    setVal("");
    sendNewMsgs({ side: "a", message: val },id);
    client.send(JSON.stringify({ type: "message", value: val }));
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
