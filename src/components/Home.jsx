import React from "react";
import HomeSlider from "./HomeSlider";
import "./home.css";

const imgs = [
  "images/home/pool.png",
  "images/home/couple.png",
  "images/home/chiqui.png",
  "images/home/negriti.jpeg",
  "images/home/chiqui2.png",
  "images/home/civil.png",
  "images/home/draw.jpeg",
  "images/home/draw2.jpeg",
  "images/home/art.jpeg",
  "images/home/vegan.jpg",
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-info">
        <p className="home-desc">Francisco Garrido</p>
        <p className="home-title">Developer</p>
        <p className="home-desc">
          I am a full stack developer, data scientist and engineer. Passionate
          about data, databases, engineering, ui/ux & philosophy. I like to be
          Committed, Responsible, Respectful, Serious and Humble on every
          project and challenge that I tackle.
        </p>
      </div>
      <HomeSlider imgs={imgs} />
    </div>
  );
}
