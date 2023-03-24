import { useTheme } from "@emotion/react";
import FlexBetween from "Components/FlexBetween";
import InputBox from "Components/InputBox/InputBox";
import WidgetWrapper from "Components/WidgetWrapper";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // console.log(name, email, message);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("pls fill the entire form!");
    } else {
      alert("submitted successfully!");
      // dispatch(contact({ name, email, message }));
    }
  };
  const theme = useTheme();
  return (
    <WidgetWrapper
      sx={{
        backgroundColor: theme.palette.background.semiTransparent,
      }}
      flexGrow={1}
    >
      <FlexBetween flexDirection={"column"} margin="auto">
        <h1 className="heading">Fill THE FORM</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <InputBox
            tip={"Enter Your Name"}
            labelTxt={"Enter Name"}
            setVal={setName}
          />
          <InputBox
            labelTxt={"Enter Email"}
            setVal={setEmail}
            type="email"
            mxlen={50}
            tip={"Enter Your Email"}
          />
          <InputBox
            isTextarea={true}
            setVal={setMessage}
            labelTxt={"Your Message"}
          />
          <button style={{ margin: "auto" }} type="submit" className="subBtn">
            Submit
          </button>
        </form>
      </FlexBetween>
    </WidgetWrapper>
  );
}

export default ContactForm;
