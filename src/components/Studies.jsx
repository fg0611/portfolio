import React from "react";
import "./studies.css";

const studies = [
  {
    title: "Data Scientist, 2022",
    url: "/images/studies/science.png",
    site: "https://us.coderhouse.com/certificados/6374fca9f1e0d4000eae2bd0",
  },
  {
    title: "Data Analyst, 2021",
    url: "/images/studies/analytics.png",
    site: "https://us.coderhouse.com/certificados/6233d394360a8b00198972d6",
  },
  {
    title: "Full Stack Web Developer, 2021",
    url: "/images/studies/dev.png",
    site: "https://www.soyhenry.com/",
  },
  {
    title: "Civil Engineer, 2013",
    url: "/images/studies/civil.png",
    site: "http://une.edu.ve/une/",
  },
];

export default () => (
  <div className="cards">
    {
      studies.map(st => (
        <div className="card" key={st.site}>
        <a href={st.site} target="_blank">
        <img className="studies-img" src={st.url} alt="" />
          </a>
        <div className="foot">
          <p>{st.title}</p>
        </div>
      </div>    
      ))
    }
  </div>
);
