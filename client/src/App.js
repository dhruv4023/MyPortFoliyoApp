import "./App.css";
import "./components/LinkCss.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { getAllMess } from "./actions/chat";
import AllRoutes from "./components/AllRoutes";
import { getContactList } from "./actions/contact";
import { getAllprojectLinks } from "./actions/projectLink";
import IndexContext from "./Context/IndexContext";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactList());
    dispatch(getAllprojectLinks());
    // setInterval(() => {
    dispatch(getAllMess());
    // }, 2000);
  }, [dispatch]);

  return (
    <>
      <IndexContext
        component={
          <Router id="container">
            <Navbar />
            <AllRoutes />
          </Router>
        }
      />
    </>
  );
}
