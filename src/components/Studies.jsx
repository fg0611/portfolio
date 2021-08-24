import React from "react";
import "./studies.css";
export default (props) => (
  <div className="cards">
    <div className="card">
      <img className="studies-img" src="/images/studies/dev.png" alt="" />
      <div className="foot">
        <p>Full Stack Web Developer, 2021</p>
      </div>
    </div>
    <div className="card">
      <img className="studies-img" src="/images/studies/civil.png" alt="" />
      <div className="foot">
        <p>Civil Engineer, 2013</p>
      </div>
    </div>
  </div>
);
