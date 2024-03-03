import React from "react";

import "./contact.css";
import ContactForm from "./ContactForm";
import FlexBetween from "../../Components/FlexBetween";
import SocialLink from "../../Components/SocialLink/SocialLink";

export default function Contact(props) {
  return (
    <FlexBetween
      flexDirection={"column"}
      width={"100%"}
      className="Container_App"
    >
      <ContactForm />
      {/* <SocialLink />` */}
    </FlexBetween>
  );
}
