import GlobalVarContext from "./GlobalVarContext";
import React from "react";
import { useSelector } from "react-redux";

const GlobalVarState = (props) => {
  const linkList = useSelector((s) => s.projectReducer)?.data;
  
  return (
    <GlobalVarContext.Provider value={{ linkList}}>
      {props.children}
    </GlobalVarContext.Provider>
  );
};
export default GlobalVarState;
