import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-img-cont">
        <img className="home-img" src="images/logos/photocv.jpg" alt="..." />
      </div>
      <div className="home-info">
        <title classname="home-title">Developer</title>
        <p className="home-desc">
          I am a skilled full stack developer, data scientist and engineer.
          Passionate about UI UX, Data and Project Management. I like to think
          that I am Committed, Responsible, Respectful, Serious and Humble on
          every project and challenge that I tackle.
        </p>
      </div>
    </div>
  );
}
