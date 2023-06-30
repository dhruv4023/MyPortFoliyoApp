import { Box } from "@mui/material";
import React from "react";
import FlexBetween from "../../Components/FlexBetween";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { useTheme } from "@emotion/react";
export default function Github() {
  const theme = useTheme();
  const githubLinks = [
    {
      _id: 1,
      projectName: "Toy Language",
      link: "https://github.com/dhruv4023/ToyLanguage",
    },
    {
      _id: 2,
      projectName: "Toy Language",
      link: "https://github.com/dhruv4023/ToyLanguage",
    },
  ];
  return (
    <WidgetWrapper
      width={"95vw"}
      backgroundColor={theme.palette.background.semiTransparent}
    >

    </WidgetWrapper>
  );
}
