import React, { useState } from "react";

import "./ToolTip.css";
function Tip({ tip, component }) {
  const [dis, setDis] = useState({ visibility: "visible" });
  setTimeout(() => {
    setDis({ visibility: "hidden" });
  }, 10000);
  return (
    <>
      <div className="tooltip">
        {component}
        <div className="tooltiptext">{tip}</div>
      </div>
    </>
  );
}

export default Tip;
