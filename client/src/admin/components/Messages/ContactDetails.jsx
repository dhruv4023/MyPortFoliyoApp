import React from "react";
import { useSelector } from "react-redux";
import "./ContactDetails.css";

export default function ContactDetails() {
  const messList = useSelector((state) => state.contactReducer)?.data;
  // console.log(messList);
  return (
    <section className="component_contaier_admin">
      <h1 className="heading_admin_component">Messages</h1>
      <div className="contMessHead">
        <p className="nameContact">Name</p>
        <p className="emailContact">Email</p>
        <p className="messageContact">Message</p>
      </div>
      <div className="contactLstCont">
        {messList?.map((m) => {
          return (
            <div className="contMess">
              <p className="nameContact">{m.name}</p>
              <p className="emailContact">{m.email}</p>
              <p className="messageContact">{m.message}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
