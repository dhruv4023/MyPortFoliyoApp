import React from "react";
import SocialLink from "../../components/SocialLink/SocialLink";

import "./contact.css";
import ContactForm from "./ContactForm";

export default function Contact(props) {

  return (
    <section className="Container_App">
      <div className="contact_container">
        <SocialLink/>
        <ContactForm/>
      </div>
    </section>
  );
}
