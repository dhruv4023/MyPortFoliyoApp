import GlobalVarContext from "./GlobalVarContext";
import React from "react";
import { useSelector } from "react-redux";

const GlobalVarState = (props) => {
  // const linkList = useSelector((s) => s.projectReducer)?.data;
  // console.log(linkList)
  return (
    <GlobalVarContext.Provider value={{ }}>
      {props.children}
    </GlobalVarContext.Provider>
  );
};
export default GlobalVarState;
