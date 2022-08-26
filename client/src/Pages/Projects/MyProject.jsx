import React from "react";
import { useSelector } from "react-redux";
import Tip from "../../components/Tip/Tip";
import NavProject from "./NavProject";
import Project from "./Project";
export default function MyProject(props) {
  const linkList = useSelector((s) => s.projectReducer)?.data;
  return (
    <section className="Container_App">
      <div className="Project_container">
        
        <div className="project_container2">
          <NavProject  linkList={linkList} />
          {/* <h1 className="heading_Project"> My Projects</h1> */}
          <Project linkList={linkList} />
        </div>
      </div>
    </section>
  );
}
