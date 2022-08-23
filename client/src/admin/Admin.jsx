import React from "react";
import { useState } from "react";
import "./admin.css";
import AdminLogin from "./AdminLogin";
import ChatMessages from "./components/Chat/ChatMessages";
import ContactDetails from "./components/Messages/ContactDetails";
import ProjectData from "./components/Projects/ProjectData";
function Admin() {
  const [AdminPAge, setAdminPAge] = useState(false);
  return (
    <section className="Container_App">
      <div className="admin_container">
        {AdminPAge ? (
          <>
            <ChatMessages />
            <ContactDetails/>
            <ProjectData/>
          </>
        ) : (
          <AdminLogin setAdminPAge={setAdminPAge}/>
        )}
      </div>
    </section>
  );
}

export default Admin;
