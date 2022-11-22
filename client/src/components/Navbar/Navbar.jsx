import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container_Navbar2">
      <div className="container_Navbar">
        <div  className="title_container">
          <Link to={'/'} className="title">Dhruv</Link>
        </div>
        <div className="Navigation_List_Navbar">
          <NavLink to={"/"} className="Item_Navbar lnkCss">
            Home
          </NavLink>
          <NavLink to={"/projects"} className="Item_Navbar lnkCss">
            My Project
          </NavLink>
          <NavLink to={"/contact"} className="Item_Navbar lnkCss">
            Contact Me
          </NavLink>
        </div>
      </div>
    </div>
  );
}
