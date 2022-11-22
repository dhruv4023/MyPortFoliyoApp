import React, { useContext } from "react";
import NavProject from "./NavProject";
import Project from "./Project";
import GlobalVarContext from "../../Context/GlobalVarContext";
export default function MyProject() {
  const context = useContext(GlobalVarContext);
  const { linkList } = context;
  console.log(linkList,`${process.env.REACT_APP_SERVER}`)
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
