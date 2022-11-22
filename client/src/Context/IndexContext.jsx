import React from "react";
import ChatListFun from "./ChatListFun";
import GlobalVarState from "./GlobalVarState";

function IndexContext({ component }) {
  return (
    <>
      <GlobalVarState>
        <ChatListFun>{component}</ChatListFun>
      </GlobalVarState>
    </>
  );
}

export default IndexContext;
