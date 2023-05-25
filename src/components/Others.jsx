import React from "react";
import "./studies.css";

const studies = [
  {
    url: "/images/studies/solo-python.jpg",
    site: "https://www.sololearn.com/",
  },
  {
    url: "/images/studies/solo-angular-nest.jpg",
    site: "https://www.sololearn.com/",
  },
];

export default () => (
  <div className="cards">
    {studies.map((st, i) => (
      <div className="card" key={st.site + i}>
        <a href={st.site} target="_blank">
          <img className="studies-img" src={st.url} alt="" />
        </a>
      </div>
    ))}
  </div>
);
