import React from "react";
import "../Style/Home.css";
import img from "../Assets/Rectangle 5 (6).svg";

const Home = () => {
  return (
    <div className="body">
      <img src={img} alt="" className="img" />
      <div id="full">
        <h1 id="ffi">
          FULL-FLEDGED <br /> FURNITURE STORE & <br /> INTERIOR DESIGN
        </h1>
        <p id="lor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, elit
          purus aliquam varius fusce. Proin viverra pharetra, iaculis id morbi
          tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor. Get Started
        </p>
        <button id="str">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
