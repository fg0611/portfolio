import React from "react";
import "./projects.css";

const projects = [
  {
    img: "/images/projects/gym1.png",
    url: "https://gym-app-ecommerce.vercel.app/",
    name: "SportApp",
    desc:
      "Made with Javascript, Node, React, Redux, Express,PostgreSQL & Firebase"
  },
  {
    img: "/images/projects/gym2.png",
    url: "https://gym-app-ecommerce.vercel.app/",
    name: "SportApp (better)",
    desc:
      "Made with Javascript, Node, React, Redux, Express,PostgreSQL & Firebase"
  },
  {
    img: "/images/projects/resptemp.png",
    url: "https://sport-project.vercel.app/",
    name: "responsive template",
    desc: "reusable responsive template, made with JS HTML & CSS"
  }
];

export default (props) => (
  <div className="cards">
    {projects?.length &&
      projects.map((project) => (
        <div
          className="pj-card"
          onClick={() => {
            window.open(project.url);
          }}
        >
          <img className="pj-img" src={project.img} alt="" />
          <div className="pj-info">
            <div className="pj-title">{project.name}</div>
            <div className="pj-desc">{project.desc}</div>
          </div>
        </div>
      ))}
  </div>
);
