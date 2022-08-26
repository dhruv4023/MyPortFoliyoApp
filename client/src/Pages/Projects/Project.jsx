import React from "react";
import { useParams } from "react-router-dom";
import Tip from "../../components/Tip/Tip";
import "./project.css";
function Project({linkList}) {
  const {Pid}= useParams();
  return (
    <>
      {linkList?.filter(q=>(q?._id===Pid))?.map((m) => {
        return (
          <div key={m?._id} className="project_card">
            <h2 className="project_title">
              <a href={`${m?.Link}`}>{m?.Title}</a>
             </h2>
            <h3 className="project_description">{m?.Description}</h3>
            <iframe
              title={m?.Title}
              scrolling={"no"}
              src={`${m?.Link}`}
              className="project_Link"
            />
          </div>
        );
      })}
    </>
  );
}

export default Project;

// {
  /* </div>
        <div className="project_card">
          <iframe
            // src={"https://stackoverflow4023.netlify.app/"}
            className="project_Link"
          />
        </div>
        <div className="project_card">
          <iframe
            // src={"https://dhruv4023.github.io/HolYTeaR/"}
            className="project_Link"
          />
        </div> */
// }
