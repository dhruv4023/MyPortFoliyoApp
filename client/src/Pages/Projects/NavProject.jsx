import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

import "./NavProject.css";
function NavProject({ titles, setIndex }) {
  const theme = useTheme();
  return (
    <>
      <Box display={"flex"}>
        {titles?.map((m, i) => {
          return (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.dark,
                cursor: "pointer",
              }}
              key={i}
              onClick={() => setIndex(i)}
              className="LinkTitle_NavPrject"
            >
              {m[0]}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default NavProject;
