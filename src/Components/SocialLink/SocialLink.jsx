import React from "react";
import "./SocialLink.css";

import telegram from "./telegram.jpg";
import linkedIn from "./linkedin.png";
import twitter from "./twitter.jpg";
import facebook from "./fb.jpg";
import github from "./github.png";
import WhatsApp from "./whatsapp.png";
import GMAIL from "./gmail.jpg";
import FlexBetween from "../FlexBetween";

function SocialLink() {
  return (
    <FlexBetween overflow={"auto"} height={"80%"}>
      <a href="https://t.me/dhruv4023">
        {" "}
        <img className="socialImg" src={telegram} alt="telegram" />
      </a>
      <a href="https://www.facebook.com/dhruv4023/">
        {" "}
        <img className="socialImg" src={facebook} alt="facebook" />
      </a>
      <a href="https://www.linkedin.com/in/dhruv4023/">
        {" "}
        <img className="socialImg" src={linkedIn} alt="linkedIn" />
      </a>
      <a href="https://twitter.com/dhruv4023">
        {" "}
        <img className="socialImg" src={twitter} alt="twitter" />
      </a>
      <a href="https://github.com/dhruv4023">
        {" "}
        <img className="socialImg" src={github} alt="github" />
      </a>
      <a href="https://wa.me/919409434932?text=Hello">
        {" "}
        <img className="socialImg" src={WhatsApp} alt="github" />
      </a>
      <a href="mailto:dhruv20345@gmail.com">
        {" "}
        <img className="socialImg" src={GMAIL} alt="github" />
      </a>
    </FlexBetween>
  );
}

export default SocialLink;
