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
          <div className="container_InputBox">
            <textarea
              className="ibox_InputBox"
              onChange={(e) => setVal(e.target.value)}
              type={type}
              minLength={mnlen}
              maxLength={mxlen}
              rows={row}
              required
              onInvalid={tip}
            />
            <label className="label_InputBox" htmlFor={type}>
              {labelTxt}
            </label>
          </div>
        </>
      ) : (
        <>
          <div className="container_InputBox">
            <input
              className="ibox_InputBox"
              onChange={(e) => setVal(e.target.value)}
              type={type}
              minLength={mnlen}
              maxLength={mxlen}
              required
              oninvalid={`this.setCustomValidity("tip")`}
              // onInvalid={`this.setCustomValidity(${"tip"})`}
            />
            <label className="label_InputBox" htmlFor={type}>
              {labelTxt}
            </label>
          </div>
        </>
      )}
    </>
  );
}

export default InputBox;
