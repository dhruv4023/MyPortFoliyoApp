import { Box } from "@mui/material";
import React from "react";
export default function Messages({ msgLst }) {
  // console.log(msgLst);
  return (
    <>
      {msgLst.map((m, i) => (
        <Box key={i} p={"0.1rem"} display={"flex"} width={"100%"}>
          {m.side === "a" ? (
            <>
              <Box flexGrow={1}></Box>
              <Box
                border={"1px solid"}
                maxWidth={"70%"}
                borderRadius={"0.2rem"}
                p={"0.2rem"}
              >
                {m.message}
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  wordBreak: "true",
                  background: "gray",
                }}
                maxWidth={"70%"}
                border={"1px solid"}
                borderRadius={"0.2rem"}
                p={"0.2rem"}
              >
                {m.message}
              </Box>
            </>
          )}
        </Box>
      ))}
    </>
  );
}
