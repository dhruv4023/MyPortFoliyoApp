import React from "react";
import "./Clock.css";

function Clock() {
  function timeHour() {
    // var Ampm = "AM";
    let time = new Date();
    let timeh = time.getHours();
    if (timeh > 12) {
      // var Ampm = "PM";
      timeh = timeh - 12;
    }
    let times = time.getSeconds();
    let timem = time.getMinutes();

    let neval = document.querySelector(":root");
    neval.style.setProperty("--hrs", timeh);
    neval.style.setProperty("--min", timem);
    neval.style.setProperty("--sec", times);
    // setTime(timeh+"+"+timem+":"+times+" "+Ampm)
  }
  timeHour();
  const arr = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  return (
    <div className="container">
      <div className="container1">
        <div className="container2">
          <div className="centerOfclk"></div>
          <div className="handscont">
            <div className="hands secondHand"></div>
            <div className="hands minitHand"></div>
            <div className="hands hourHand"></div>
          </div>
          <div className="cont3">
            {arr.map((i) => {
              return (
                <div key={i} className="nums" style={{ "--i": `${i}.5` }}>
                  <div className="num" style={{ "--i": `${i}.5` }}>
                    {i - 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
