import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../../Components/FlexBetween";

const WriteMsg = ({ setRefresh, msgList }) => {
  const [val, setVal] = useState("");
  const handleSendMess = (e) => {
    e.preventDefault();
    setRefresh(1);
    val !== "" && msgList.push({ side: "a", message: val });
    setVal("");
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
