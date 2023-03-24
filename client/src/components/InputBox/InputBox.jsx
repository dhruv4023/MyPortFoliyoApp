import { Box } from "@mui/material";
import React from "react";
import "./InputBox.css";
function InputBox({
  isTextarea,
  labelTxt,
  setVal,
  type = "text",
  mnlen = 3,
  mxlen = 10,
  row = 3,
  tip,
}) {
  return (
    <>
      {isTextarea ? (
        <>
          <Box className="container_InputBox">
            <textarea
              className="ibox_InputBox"
              onChange={(e) => setVal(e.target.value)}
              type={type}
              minLength={mnlen}
              maxLength={mxlen}
              rows={row}
              required
            />
            <label className="label_InputBox" htmlFor={type}>
              {labelTxt}
            </label>
          </Box>
        </>
      ) : (
        <>
          <Box className="container_InputBox">
            <input
              className="ibox_InputBox"
              onChange={(e) => setVal(e.target.value)}
              type={type}
              minLength={mnlen}
              maxLength={mxlen}
              required
            />
            <label className="label_InputBox" htmlFor={type}>
              {labelTxt}
            </label>
          </Box>
        </>
      )}
    </>
  );
}

export default InputBox;
