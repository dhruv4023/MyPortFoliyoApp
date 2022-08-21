import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postProjectLink } from "../../../actions/projectLink";

import "./ProjectData.css";
function ProjectData() {
  const [p_id, set_id] = useState(null);
  const [titleOfProj, setTitleOfProj] = useState("");
  const [desOfProj, setDesOfProj] = useState("");
  const [linkOfproj, setLinkOfproj] = useState("");

  const dispatch = useDispatch();
  const linkList = useSelector((s) => s.projectReducer)?.data;
  console.log(linkList);

  const handleAddLink = () => {
    if (p_id) {
    } else {
      if (!titleOfProj && !desOfProj && linkOfproj) alert("Plz Fill Details");
      else {
        dispatch(
          postProjectLink({
            Title: titleOfProj,
            Link: linkOfproj,
            Description: desOfProj,
          })
        );
      }
    }
  };
  return (
    <div className="component_contaier_admin">
      <h1 className="heading_admin_component">Update Links</h1>
      <div className="data_projectData">
        <input
          className="ibox"
          type="text"
          value={titleOfProj}
          onChange={(e) => setTitleOfProj(e.target.value)}
          placeholder="Enter Title here"
        />
        <textarea
          onChange={(e) => setDesOfProj(e.target.value)}
          className="ibox"
          type="text"
          value={desOfProj}
          placeholder="Enter Description here"
        />
        <input
          className="ibox"
          value={linkOfproj}
          onChange={(e) => setLinkOfproj(e.target.value)}
          type="text"
          placeholder="Enter Link here"
        />
        <input
          onClick={handleAddLink}
          className="subBtn"
          type="button"
          value="Add"
        />
      </div>
      <div className="list_title_projectData">
        <h1>List</h1>
        {linkList?.map((m) => {
          return (
            <>
              <div
                key={m?._id}
                onClick={() => {
                  set_id(m?._id);
                  setTitleOfProj(m?.Title);
                  setDesOfProj(m?.Description);
                  setLinkOfproj(m?.Link);
                }}
                className="title_projectdata"
              >
                {m?.Title}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectData;
