import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import image from "../Assets/Rectangle 3 (1).svg";
import "../Style/Body.css";
import image2 from "../Assets/Rectangle 4.svg";
import { useState } from "react";
import { data } from "./db";
import { team } from "./db";
import line from "../Assets/Vector 8.svg";
import twitter from "../Assets/twitter (1).svg";
import facebook from "../Assets/facebook (1).svg";
import lindkin from "../Assets/insta.svg";

const Body = () => {
  const [datum] = useState(data);
  const [person] = useState(team);
  return (
    <div>
      <div id="top" className="bg-image">
        <img src={image} alt="" />
        <div className="mask">
          <div
            id="home"
            className="justify-content-center align-items-center h-100"
          >
            <h2 id="will" className="text-dark mb-0">
              FURNITURE STORE
            </h2>
            <p id="ptag" className="text-dark mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              elit purus aliquam <br /> varius fusce. Proin viverra pharetra,
              iaculis id morbi tempus ut. Vel nibh vitae <br /> rutrum lorem eu
              turpis tempor.
            </p>
            <button id="get-btn">Get Started</button>
          </div>
        </div>
      </div>

      <MDBRow>
        <MDBCol id="fulls" className="container" md="5">
          <h5>Furns</h5>
          <h1>FULL-FLEDGED FURNITURE STORE & INTERIOR DESIGN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            elit purus aliquam varius fusce. Proin viverra pharetra, iaculis id
            morbi tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.
          </p>
          <button id="get-btn">Get Started</button>
        </MDBCol>
        <MDBCol md="6">
          <img id="mirrowimg" src={image2} alt="" />
        </MDBCol>
      </MDBRow>
      <div id="browse">
        <p id="ideal">BROWSE OUR ITEMS</p>
        <h2 id="hh">IDEAL FOR YOU HOME</h2>
      </div>
      <div className="data">
        {datum.map((allData) => {
          const { img, item, amount, description } = allData;
          return (
            <div className="inner-data" key={allData.id}>
              <img src={img} alt="" img-fluid />
              <div id="ia">
                <h5>item #{item}</h5>
                <p>${amount}</p>
              </div>
              <p>{description}</p>
              <div className="btn-item">
                <button id="btn-one">🛒Add to Cart</button>
                <button id="btn-two">♥️ Save item</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="wise">
        <p>OUR CREATIVE FORCE</p>
        <h2>MEET OUR TEAM</h2>
      </div>
      <div className="team">
        {person.map((persons) => {
          const { img, name, title } = persons;
          return (
            <div className="inner-person" key={persons.id}>
              <img src={img} alt="" />
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div id="fun">
          <h2>Furns</h2>
        </div>
        <div id="shop">
          <h5>Shop</h5>
          <p>Furniture Store</p>
          <p>Interior Design</p>
          <p>Ceramics</p>
          <p>Decorations</p>
        </div>
        <div id="about">
          <h5>About Us</h5>
          <h6>Contact</h6>
          <h6>Cart</h6>
        </div>
        <div id="sub">
          <h5>Subscribe to our newsletter</h5>
          <input type="Subscribe" id="form5" label="Subscribe" />
          <button id="btn-sub">Subscribe</button>
        </div>
      </div>
      <div className="line">
        <img src={line} alt="" id="li" />
        <div id="last">
          <p>Terms and Policy</p>
          <div id="sm">
            <img src={twitter} alt="" id="twitter" />
            <img src={facebook} alt="" id="facebook" />
            <img src={lindkin} alt="" id="linkin" />
            <a href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
