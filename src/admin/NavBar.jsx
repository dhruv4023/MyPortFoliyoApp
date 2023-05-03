import { useTheme } from "@emotion/react";
import { Chat, ContactSupport, Work } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import FlexBetween from "../Components/FlexBetween";

const NavBar = ({setPg}) => {
  const theme = useTheme();
  return (
    <FlexBetween
      backgroundColor={theme.palette.primary.light}
      padding="1rem 6%"
    >
      <FlexBetween gap={"1rem"}>
        <IconButton onClick={()=>setPg("chat")}>
          <Chat  />
        </IconButton>
        <IconButton onClick={()=>setPg("contact")}>
          <ContactSupport />
        </IconButton>
        <IconButton onClick={()=>setPg("project")}>
          <Work />
        </IconButton>
      </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;
