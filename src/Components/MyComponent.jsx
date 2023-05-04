import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

export const MyTitle = ({ title }) => {
  const theme = useTheme();
  return (
    <Typography
      fontWeight={"bold"}
      fontSize={"1.5rem"}
      color={theme.palette.primary.main}
    >
      {title}
    </Typography>
  );
};
