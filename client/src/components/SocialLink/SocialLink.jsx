import React from "react";
import "./SocialLink.css";

import telegram from "./telegram.jpg";
import linkedIn from "./linkedin.png";
import twitter from "./twitter.jpg";
import facebook from "./fb.jpg";
import github from "./github.png";
import WidgetWrapper from "Components/WidgetWrapper";

function SocialLink() {
  return (
    <WidgetWrapper>
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
    </WidgetWrapper>
  );
}

export default SocialLink;
