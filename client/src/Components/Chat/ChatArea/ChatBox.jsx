import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import WriteMsg from "./WriteMsg";
import Login from "../Login";
import { getChatData } from "../chatApis";
import FlexBetween from "../../FlexBetween";

const msgList = [
  {
    _id: 1,
    side: "a",
    message: "Hello Sir!",
  },
  {
    _id: 2,
    side: "a",
    message: "hello",
  },
];

const ChatBox = () => {
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setRefresh(0);
  }, [refresh]);

  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    id
      ? getChatData(id)
          .then((x) => {
            msgList.push(...x);
            setLoading(false);
          })
          .catch(() => setLoading(false))
      : setLoading(false);
  }, [id]);

  return (
      <Box className="chatArea showHideBox">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {id ? (
              <>
                <h2 className="chatHead">-:Chat with Dhruv:-</h2>
                <Box className="messBox">
                  {msgList && <Messages msgLst={msgList} />}
                </Box>
                <WriteMsg setRefresh={setRefresh} msgList={msgList} />
              </>
            ) : (
              <>
                <Login setId={setId} />
              </>
            )}
          </>
        )}
      </Box>
  );
};

export default ChatBox;
