import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import OldMsgs from "./OldMsgs";
import Login from "../Login";
import { MyBtn } from "../../MyComponent";
import NewMsg from "./NewMsg";
import { socketConn } from "../wsApi";

const ChatBox = () => {
  const [socket, setSocket] = useState();
  const msgContainerRef = useRef(null);
  const [id, setId] = useState(localStorage.getItem("id"));
  useEffect(() => {
    if (msgContainerRef.current) {
      const container = msgContainerRef.current;
      container.scrollTop = container.scrollHeight - container.clientHeight;
      const observer = new MutationObserver(() => {
        container.scrollTop = container.scrollHeight - container.clientHeight;
      });
      observer.observe(container, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    id && !socket && setSocket(socketConn(id));
  }, [id]);
  console.log(typeof id, socket);
  return (
    <Box className="chatArea">
      {id ? (
        <Box sx={{ overflow: "auto" }}>
          <MyBtn
            label="Log out"
            onclickHandle={() => {
              localStorage.removeItem("id");
              setId(null);
            }}
          />
          <h3 style={{ textAlign: "center", margin: "0.2rem", width: "100%" }}>
            -:Chat with Dhruv:-
          </h3>
          <Box
            sx={{
              height: "20rem",
              width: "14rem",
              overflow: "auto",
              marginBottom: "1.2rem",
            }}
            ref={msgContainerRef}
          >
            <OldMsgs id={id} />
            {socket ? <NewMsg socket={socket} id={id} /> : <>Loading...</>}
          </Box>
        </Box>
      ) : (
        <>
          <Login setId={setId} />
        </>
      )}
    </Box>
  );
};

export default ChatBox;
