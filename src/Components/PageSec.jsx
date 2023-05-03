import React from "react";
import FlexBetween from "./FlexBetween";
import Home from "../Pages/Home/Home";
import MyProject from "../Pages/Projects/MyProject";
import { useTheme } from "@emotion/react";
import Contact from "../Pages/Contact/Contact";

const PageSec = () => {
  const theme = useTheme();
  return (
    <FlexBetween
      sx={{
        backgroundImage: `linear-gradient(120deg,${theme.palette.background.dark},${theme.palette.background.default})`,
      }}
      flexDirection={"column"}
    >
      <Home />
      <MyProject />
      <Contact />
    </FlexBetween>
  );
};

export default PageSec;
