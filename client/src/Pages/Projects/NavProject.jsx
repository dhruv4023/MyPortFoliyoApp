import React from "react";
import { NavLink } from "react-router-dom";
import Tip from "../../components/Tip/Tip";

import "./NavProject.css";
function NavProject({ linkList }) {
  return (
    <>
      <div className="NavProject_Container">
      <Tip tip="Click on Title To Open Project Link" tf={true}/>
            
        {linkList?.map((m) => {
            return <NavLink to={`/projects/${m?._id}`} key={m?._id} className="LinkTitle_NavPrject">
            {m?.Title}
          </NavLink>;
        })}
      </div>
    </>
  );
}

export default NavProject;
