import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import WidgetWrapper from "Components/WidgetWrapper";
import React from "react";

const DataCard = ({ dt }) => {
  const theme = useTheme();
  return (
    <WidgetWrapper
      sx={{
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <FlexBetween flexDirection={"column"} gap={"1rem"} maxWidth={"10rem"}>
        <Box>
          Name:
          <i style={{ wordBreak: "true", color: theme.palette.primary.dark }}>
            {dt.name}
          </i>
        </Box>
        <Box>
          Email:
          <i style={{ wordBreak: "true", color: theme.palette.primary.dark }}>
            {dt.email}
          </i>
        </Box>
        <Box>
          Message:
          <i style={{ wordBreak: "true", color: theme.palette.primary.dark }}>
            {dt.message}
          </i>
        </Box>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default DataCard;
