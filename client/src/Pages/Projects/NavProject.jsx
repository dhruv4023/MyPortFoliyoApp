import React from "react";
import { NavLink } from "react-router-dom";
import Tip from "../../components/Tip/Tip";

import "./NavProject.css";
function NavProject({ linkList }) {
  return (
    <>
      <div className="NavProject_Container">
        {linkList?.map((m) => {
          return (
            <NavLink
              to={`/projects/${m?._id}`}
              key={m?._id}
              className="LinkTitle_NavPrject"
            >
              <Tip tip={"click to view"} component={m?.Title} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default NavProject;
