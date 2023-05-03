import React from "react";
export default function MessageList({messageList}) {
  // console.log(messageList)
  return (
    <>
      {/* <div key={1}>
        <p className="mess send">hiii</p>
        <p className="mess receive">hiii</p>
      </div> */}
      {messageList?.map((m) => (
        <div key={m._id}>
          {m.side === "me" ? (
            <p className="mess send">{m.message}</p>
          ) : (
            <p className="mess receive">{m.message}</p>
          )}
        </div>
      ))}
    </>
  );
}
