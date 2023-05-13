import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";

const msgList = [
  //   {
  //     _id: 1,
  //     side: "a",
  //     message: "Hello Sir!",
  //   },
  //   {
  //     _id: 2,
  //     side: "a",
  //     message: "hello",
  //   },
];

const NewMsg = ({ id, socket }) => {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      msgList.push({ side: data.side, message: data.value });
      setRefresh(!refresh);
    };
    setRefresh(0);
  }, [refresh]);
  return (
    <>
      <Messages msgLst={msgList} />
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
        }}
      >
        <WriteMsg
          id={id}
          socket={socket}
          setRefresh={setRefresh}
          msgList={msgList}
        />
      </Box>
    </>
  );
};

export default NewMsg;
