import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import "./project.css";
import FlexBetween from "../../Components/FlexBetween";
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
          href={`${data.link}`}
          target="_blank"
        >
          <Box> {data.title}</Box>
        </a>
      </h2>
      <Box
        sx={{
          fontSize: ".8rem",
          color: theme.palette.primary.dark,
        }}
        width
      >
        {data.description}
      </Box>
      <Box width height={"75vh"}>
        <iframe
          title={data.title}
          src={`${data.link}`}
          className="project_Link"
        />
      </Box>
    </FlexBetween>
  );
}

export default Project;
