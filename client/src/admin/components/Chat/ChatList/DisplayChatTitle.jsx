import { Box, Button } from "@mui/material";
import React from "react";

const DisplayChatTitle = ({ title, chatTitle, setChatTitle }) => {
  return (
    <Box m={".5rem"} p={".5rem"} border={"1px solid"}>
      <Button
        sx={{
          color: title === chatTitle ? "red" : "green",
        }}
        onClick={() => setChatTitle(title)}
      >
        {title}
      </Button>
    </Box>
  );
};

export default DisplayChatTitle;
