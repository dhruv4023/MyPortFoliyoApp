import { Box, Button } from "@mui/material";
import React from "react";

const DisplayChatTitle = ({ title,setCurrentChat, currentChat }) => {
  return (
    <Box m={".5rem"} p={".5rem"} border={"1px solid"}>
      <Button
        sx={{
          color: title._id === currentChat?._id ? "red" : "green",
        }}
        onClick={() => setCurrentChat(title)}
      >
        {title.name}
      </Button>
    </Box>
  );
};

export default DisplayChatTitle;
