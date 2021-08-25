import React from "react";
import "./exp.css";

const exps = [
  {
    title: "Freelance Consultant",
    desc:
      "During this period I did independent work as an engineer that included: - Development of Works Progress plans - Analysis of prices and Budgets - Isolated calculations in different areas with their specificities (Structural, Hydric, Stability)",
    url: "images/experience/freelance.png"
  },
  {
    title: "civil engineer",
    desc: "did work for hire with deadlines",
    url: "images/experience/inmac.png"
  },
  {
    title: "Bulk Data & Budget Analyst",
    desc:
      "-Budget Analyst, Advances and Variations in Hydraulic Works of the Province of Córdoba.",
    url: "images/experience/msp.png"
  },
  {
    title: "Javascript Developer",
    desc:
      "-Web Development of a Custom CMS platform with React, Hooks, Redux, Firebase (services), Google Maps API (services)",
    url: "images/experience/spark.png"
  }
];

export default (props) => (
  <div className="exp-cards">
    {exps?.length &&
      exps.map((exp) => (
        <div className="exp-card">
          <img className="exp-img" src={exp.url} alt="" />
          <div className="exp-foot">
            <p>{exp.title}</p>
            <p>{exp.desc}</p>
          </div>
        </div>
      ))}
  </div>
);
