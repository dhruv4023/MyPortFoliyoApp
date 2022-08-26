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
          <NavLink to={"/"} className="Item_Navbar">
            Home
          </NavLink>
          <NavLink to={"/projects/63028c7a139c6b28e7889b8b"} className="Item_Navbar">
            My Project
          </NavLink>
          <NavLink to={"/contact"} className="Item_Navbar">
            Contact Me
          </NavLink>
        </div>
      </div>
    </div>
  );
}
