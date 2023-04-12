import { Box } from "@mui/material";
import React from "react";
export default function Messages({ msgLst }) {
  // console.log(msgLst);
  return (
    <>
      {msgLst.map((m, i) => (
        <Box key={i}>
          {m.side === "a" ? (
            <Box width={"70%"} className="mess me">
              {m.message}
            </Box>
          ) : (
            <Box className="mess visitor" width={"70%"}>
              {m.message}
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}
