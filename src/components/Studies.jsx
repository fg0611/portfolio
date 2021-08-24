import React from "react";
import "./studies.css";
export default (props) => (
  <div className="cards">
    <div className="card">
      <img className="studies-img" src="/images/studies/dev.png" alt="" />
      <div className="foot">
        <p>Full Stack Web Developer</p>
      </div>
    </div>
    <div className="card">
      <img className="studies-img" src="/images/studies/civil.png" alt="" />
      <div className="foot">
        <p>Civil Engineer</p>
      </div>
    </div>
  </div>
);
