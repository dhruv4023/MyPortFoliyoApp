import React, { useEffect, useState } from "react";
import { getChatData } from "../chatApis";
import Messages from "./Messages";

const OldMsgs = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [msgList, setMsgList] = useState();
  useEffect(() => {
    setLoading(true);
    id &&
      getChatData(id)
        .then((x) => {
          setMsgList(x);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    setLoading(false);
  }, [id]);
  console.log(msgList);
  return (
    <>{loading ? <>Loading ...</> : msgList && <Messages msgLst={msgList} />}</>
  );
};

export default OldMsgs;
