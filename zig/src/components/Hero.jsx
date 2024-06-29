import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContainer">
        <h1 className="title">Lorem Ipsum Dolor</h1>
        <p className="textIpsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque commodo massa, vitae suscipit lorem pellentesque vel.
        </p>
        <button className="heroButton">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
