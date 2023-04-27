import React from "react";
import { useState } from "react";
import "./admin.css";
import NavBar from "./NavBar";
import ChatMessages from "../Chat/ChatMessages";
import ContactDetails from "../Messages/ContactDetails";
import ProjectData from "../Projects/ProjectData";
import FlexEvenly from "../Components/FlexEvenly";
function Admin() {
  const [AdminPAge, setAdminPAge] = useState(true);
  const [pg, setPg] = useState("project");

  return (
    <section className="Container_App">
      <div className="admin_container">
        {AdminPAge ? (
          <>
            <NavBar setPg={setPg} />
            <FlexEvenly>
              {pg === "chat" ? (
                <ChatMessages />
              ) : pg === "contact" ? (
                <ContactDetails />
              ) : (
                pg === "project" && <ProjectData />
              )}
            </FlexEvenly>
          </>
        ) : (
          <></>
          // <AdminLogin setAdminPAge={setAdminPAge} />
        )}
      </div>
    </section>
  );
}

export default Admin;
