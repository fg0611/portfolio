import React from "react";
import "./exp.css";

const exps = [
  {
    title: "Javascript Developer",
    desc: "-Web Development of a Custom CMS platform with React, Hooks, Redux, Firebase (services), Google Maps API (services)",
    url: "images/experience/spark.png",
  },
  {
    title: "Bulk Data & Budget Analyst",
    desc: "-Budget Analyst, Advances and Variations in Hydraulic Works of the Province of Córdoba.",
    url: "images/experience/msp.png",
  },
  {
    title: "Freelance Consultant",
    desc: "During this period I did independent work as an engineer that included: - Development of Works Progress plans - Analysis of prices and Budgets - Isolated calculations in different areas with their specificities (Structural, Hydric, Stability)",
    url: "images/experience/freelance.png",
  },
  {
    title: "Civil Engineer",
    desc: "Worked as a Civil Eng in a Buenos Aires company in several projects",
    url: "images/experience/inmac.png",
  },
];

export default () => (
  <div className="exp-cont">
    {exps?.length &&
      exps.map((exp) => (
        <div className="exp-subcont">
          <img className="exp-img" src={exp.url} alt="" />
          <p className="exp-title">{exp.title}</p>
          <p className="exp-desc">{exp.desc}</p>
        </div>
      ))}
  </div>
);
