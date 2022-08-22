import React,{useState} from "react";

import "./Tip.css";
function Tip({ tip }) {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {display && (
        <div onClick={() => setDisplay(false)} className="Tip_container">
          <div className="typewriter">{tip}</div>
        </div>
      )}
    </>
  );
}

export default Tip;
