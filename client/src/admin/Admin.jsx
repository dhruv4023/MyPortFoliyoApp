import React from "react";
import { useState } from "react";
import "./admin.css";
import AdminLogin from "./AdminLogin";
import ChatMessages from "./components/Chat/ChatMessages";
import ContactDetails from "./components/Messages/ContactDetails";
import ProjectData from "./components/Projects/ProjectData";
import NavBar from "./NavBar";
function Admin() {
  const [AdminPAge, setAdminPAge] = useState(true);
  const [pg, setPg] = useState("chat");
  return (
    <section className="Container_App">
      <div className="admin_container">
        {AdminPAge ? (
          <>
            <NavBar setPg={setPg} />
            {pg === "chat" ? (
              <ChatMessages />
            ) : pg === "contact" ? (
              <ContactDetails />
            ) : (
              pg === "project" && <ProjectData />
            )}
          </>
        ) : (
          <AdminLogin setAdminPAge={setAdminPAge} />
        )}
      </div>
    </section>
  );
}

export default Admin;
