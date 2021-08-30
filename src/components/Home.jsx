import React from "react";
import "./home.css";

const imgs = [
  "images/home/art.jpeg",
  "images/home/chiqui.png",
  "images/home/chiqui2.png",
  "images/home/civil.png",
  "images/home/couple.png",
  "images/home/draw.jpeg",
  "images/home/draw2.jpeg",
  "images/home/negriti.jpeg",
  "images/home/pool.png",
  "images/home/vegan.jpg",
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-info">
        <p className="home-desc">Francisco Garrido</p>
        <p className="home-title">Full Stack Developer</p>
        <p className="home-desc">
          I am a skilled Full Stack Developer. Always learning something new
          about data science, problem solving, engineering and other topics. I
          like to think that I am Committed, Responsible, Respectful, Serious
          and Humble on every project and challenge that I tackle.
        </p>
      </div>
      <div className="home-img-cont">
        {imgs?.length &&
          imgs.map((img) => (
            <img key={img} className="home-img" src={img} alt="..." />
          ))}
      </div>
    </div>
  );
}
