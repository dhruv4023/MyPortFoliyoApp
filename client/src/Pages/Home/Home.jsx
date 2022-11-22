import React, { useContext } from "react";
import Clock from "../../components/Clock/Clock";
import InputBox from "../../components/InputBox/InputBox";
import GlobalVarContext from "../../Context/GlobalVarContext";
import "./home.css";
import "./TextAnimation.css";
export default function Home() {
  // const contexts = useContext(GlobalVarContext);
  // const { setTime, time } = contexts;

  return (
    <section className="Container_App">
      <div className="container_Home">
        <div className="Clock_cont_home">
          <Clock />
        </div>
      </div>
      <div className="container_Home">
        <div className="Greeting_Home">
          <div className="text_home animate_charcter">
            {" "}
            Hello My Name is Dhruv Patel, welcome You To My PortFoliyo React
            App.
          </div>
        </div>
      </div>
    </section>
  );
}
