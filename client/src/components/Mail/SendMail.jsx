import React from "react";
import emailjs from "@emailjs/browser";

function SendMail({ message, subject, name, email }) {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_y1u4siu",
        "template_dxgwbkv",
        {
          message: message,
          subject: subject,
          name: name,
          email: email,
        },
        "qt_TnW3f_MDKDFlzr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return <>
  
  </>;
}

export default SendMail;
