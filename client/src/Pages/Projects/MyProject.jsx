import React from "react";
import Project from "./Project";
export default function MyProject(props) {
  return (
    <section className="Container_App">
      <div className="Project_container">
        <div className="project_container2">
          <h1 className="heading_Project"> My Projects</h1>
          <Project />
        </div>
      </div>
    </section>
  );
}
