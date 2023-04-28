import { Box } from "@mui/material";
import React from "react";
import FlexEvenly from "./FlexEvenly";

const Alert = () => {
  return (
    <FlexEvenly bgcolor={"rgba(0,0,0,0.2)"} zIndex={1} position={"fixed"} width={"100%"}>
      <Box textAlign={"center"} fontSize={"2rem"}>
        Alert
      </Box>
    </FlexEvenly>
  );
};

export default Alert;
