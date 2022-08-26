import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { getAllMess } from "./actions/chat";
import AllRoutes from "./components/AllRoutes";
import ChatBtn from "./components/Chat/ChatBtn";
import GlobalVarState from "./Context/GlobalVarState";
import { getContactList } from "./actions/contact";
import { getAllprojectLinks } from "./actions/projectLink";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactList());
    dispatch(getAllprojectLinks());
  }, [dispatch]);

  // setInterval(() => {
  //   dispatch(getAllMess());
  //   console.log(1)
  // }, 3000);

  return (
    <GlobalVarState>
      <Router id="container">
        <Navbar />
        <AllRoutes />
        <ChatBtn />
      </Router>
    </GlobalVarState>
  );
}
