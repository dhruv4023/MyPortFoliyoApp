import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import FlexBetween from "Components/FlexBetween";
import React from "react";
import "./project.css";
function Project({ data }) {
  const theme = useTheme();
  return (
    <FlexBetween flexDirection={"column"}>
      <h2 className="project_title">
        <a
          style={{
            color: theme.palette.primary.dark,
            "&:hover": {
              color: theme.palette.neutral.light,
            },
          }}
          href={`${data.Link}`}
          target="_blank"
        >
          <Box> {data.Title}</Box>
        </a>
      </h2>
      <Box
        sx={{
          fontSize: ".8rem",
          color: theme.palette.primary.dark,
        }}
        width
      >
        {data.Description}
      </Box>
      <Box  width height={"75vh"}>
        <iframe
          title={data.Title}
          src={`${data.Link}`}
          className="project_Link"
        />
      </Box>
    </FlexBetween>
  );
}

export default Project;
