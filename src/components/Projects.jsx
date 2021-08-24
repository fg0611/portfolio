import React from "react";
import "./projects.css";

export default (props) => (
  <div className="cards">
    <div className="card">
      <img className="img" src="/images/projects/gym1.png" alt="" />
      <div className="foot">
        <p>
          SportsApp: Made with Javascript, Node, React, Redux, Express,
          PostgreSQL & Firebase
        </p>
        <button
          className="btn"
          onClick={() => {
            window.open("https://gym-app-ecommerce.vercel.app/");
          }}
        >
          Visit
        </button>
      </div>
    </div>
    <div className="card">
      <img className="img" src="/images/projects/gym2.png" alt="" />
      <div className="foot">
        <p>
          GymApp (responsive): Made with Javascript, Node, React, Redux,
          Express, PostgreSQL & Firebase
        </p>
        <button
          className="btn"
          onClick={() => {
            window.open("https://sport-project.vercel.app/");
          }}
        >
          Visit
        </button>
      </div>
    </div>
    <div className="card">
      <img className="img" src="/images/projects/resptemp.png" alt="" />
      <div className="foot">
        <p>Responsive Template</p>
        <button
          className="btn"
          onClick={() => {
            window.open("https://bg85m.csb.app/");
          }}
        >
          Visit
        </button>
      </div>
    </div>
  </div>
);
