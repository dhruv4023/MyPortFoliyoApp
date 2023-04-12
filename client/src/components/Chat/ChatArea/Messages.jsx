import { Box } from "@mui/material";
import React from "react";
export default function Messages({ msgLst }) {
  // console.log(msgLst);
  return (
    <>
      {msgLst.map((m, i) => (
        <Box key={i}>
          {m.side === "a" ? (
            <p className="mess me">{m.message}</p>
          ) : (
            <p className="mess visitor">{m.message}</p>
          )}
        </Box>
      ))}
    </>
  );
}
