import React from "react";
import "./studies.css";

const studies = [
  {
    url: "/images/studies/solo-python.jpg",
    site: "https://www.sololearn.com/",
  },
];

export default () => (
  <div className="cards">
    {studies.map((st) => (
      <div className="card" key={st.site}>
        <a href={st.site} target="_blank">
          <img className="studies-img" src={st.url} alt="" />
        </a>
      </div>
    ))}
  </div>
);
