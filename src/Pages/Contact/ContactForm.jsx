import { useTheme } from "@emotion/react";
import React, { useEffect } from "react";
import { useState } from "react";
import WidgetWrapper from "../../Components/WidgetWrapper";
import FlexBetween from "../../Components/FlexBetween";
import { MyBtn } from "../../Components/MyComponent";
import { TextField } from "@mui/material";
import { submitContactMsg } from "./contactApi";
function ContactForm() {
  // const dispatch = useDispatch();
  const initialValue = {
    name: "",
    email: "",
    msg: "",
  };
  const [values, setValues] = useState(initialValue);
  const onChangehandle = (val, name) => {
    let tmp = { ...values };
    tmp[name] = val;
    setValues(tmp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.msg) {
      alert("pls fill the entire form!");
    } else {
      submitContactMsg(values);
      setValues(initialValue);
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
      <FlexBetween gap={"0.5rem"} flexDirection={"column"} margin="auto">
        <h1 className="heading">Fill THE FORM</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FlexBetween gap={"0.5rem"} flexDirection={"column"} margin="auto">
            <TextField
              label={"Enter Name"}
              onChange={(e) => onChangehandle(e.target.value, "name")}
            />
            <TextField
              label={"Enter Email"}
              type="email"
              onChange={(e) => onChangehandle(e.target.value, "email")}
              mxlen={50}
              tip={"Enter Your Email"}
            />
            <TextField
              label={"Your Message"}
              onChange={(e) => onChangehandle(e.target.value, "msg")}
            />
            <MyBtn label="Submit" />
          </FlexBetween>
        </form>
      </FlexBetween>
    </WidgetWrapper>
  );
}

export default ContactForm;
