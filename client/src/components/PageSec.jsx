import React from "react";
import FlexBetween from "./FlexBetween";
import Home from "../Pages/Home/Home";
import MyProject from "../Pages/Projects/MyProject";

const PageSec = () => {
  return (
    <FlexBetween
    sx={{
      backgroundColor:"blue"
    }}
    flexDirection={"column"}>
      <Home />
      <MyProject />
    </FlexBetween>
  );
};

export default PageSec;
