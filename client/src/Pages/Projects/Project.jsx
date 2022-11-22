import React from "react";
import { useParams } from "react-router-dom";
import Tip from "../../components/Tip/Tip";
import "./project.css";
function Project({ linkList }) {
  let { Pid } = useParams();
  Pid = Pid ? Pid : "63028c7a139c6b28e7889b8b";
  // console.log(Pid);
  return (
    <>
      {linkList
        ?.filter((q) => q?._id === Pid)
        ?.map((m) => {
          return (
            <div key={m?._id} className="project_card">
              <h2 className="project_title">
                <a href={`${m?.Link}`} target="_blank">
                  <Tip
                    tip={"click To open in new tab"}
                    component={
                      <div style={{ border: "1px solid" }}> {m?.Title}</div>
                    }
                  />
                </a>
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
