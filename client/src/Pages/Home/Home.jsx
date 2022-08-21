import React, { useContext } from "react";
import Clock from "../../components/Clock/Clock";
import GlobalVarContext from "../../Context/GlobalVarContext";
import "./home.css";
export default function Home() {
  // const contexts = useContext(GlobalVarContext);
  // const { setTime, time } = contexts;

  return (
    <section className="Container_App">
      <div className="container_Home">
        <div className="Clock_cont_home">
          <Clock />
        </div>
        <div className="Greeting_Home">
          <div className="typewriter">Welcome To My PortFoliyo React App.</div>
        </div>
      </div>
    </section>
  );
}
