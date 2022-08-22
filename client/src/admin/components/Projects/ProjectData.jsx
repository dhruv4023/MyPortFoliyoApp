import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  editLink,
  postProjectLink,
} from "../../../actions/projectLink";
import { BsFillTrashFill } from "react-icons/bs";
import "./ProjectData.css";
function ProjectData() {
  const [p_id, set_id] = useState(null);
  const [titleOfProj, setTitleOfProj] = useState("");
  const [desOfProj, setDesOfProj] = useState("");
  const [linkOfproj, setLinkOfproj] = useState("");

  const dispatch = useDispatch();
  const linkList = useSelector((s) => s.projectReducer)?.data;
  // console.log(linkList);

  const handleAddLink = () => {
    if (p_id) {
      if (!titleOfProj && !desOfProj && linkOfproj) alert("Plz Fill Details");
      else {
        dispatch(
          editLink({
            id: p_id,
            Title: titleOfProj,
            Link: linkOfproj,
            Description: desOfProj,
          })
        );
      }
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
    set_id(null);
  };

  const handleDel = (id) => {
    // let x=confirm()
    console.log(id);
    if (window.confirm("Confirm Delete !")) {
      // console.log()
      dispatch(deleteProject(id));
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
        <div>
          {p_id ? (
            <>
              <input
                onClick={handleAddLink}
                className="btn_ProjectData"
                type="button"
                value="Edit"
              />
              <input
                onClick={() => {
                  set_id(null);
                  setDesOfProj("");
                  setLinkOfproj("");
                  setTitleOfProj("");
                }}
                className="btn_ProjectData"
                type="button"
                value="Clear"
              />
            </>
          ) : (
            <input
              onClick={handleAddLink}
              className="btn_ProjectData"
              type="button"
              value="Add"
            />
          )}
        </div>
      </div>
      <div className="list_title_projectData">
        <h1>List</h1>
        {linkList?.map((m) => {
          return (
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
              <div
                className="trash_btn_admin"
                onClick={() => handleDel(m?._id)}
              >
                <BsFillTrashFill />
              </div>
              <div className="title_item_ProjectData">{m?.Title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectData;
