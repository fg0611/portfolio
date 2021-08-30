import React from "react";
import "./projects.css";

const projects = [
  {
    img: "/images/projects/gym1.gif",
    url: "https://gym-app-ecommerce.vercel.app/",
    name: "SportApp",
    desc: "A full E-Commerce made with Javascript, Node, React, Redux, Express, PostgreSQL, Firebase Auth & Styled with CSS and material UI. ",
  },
  {
    img: "/images/projects/gym2.gif",
    url: "https://sport-project.vercel.app/",
    name: "SportApp (better)",
    desc: "A full E-Commerce made with JS, Node, React, Redux, Express,PostgreSQL & Firebase",
  },
  {
    img: "/images/projects/maps-api-js.gif",
    url: "https://map-api-js.vercel.app/",
    name: "Directions Finder",
    desc: "Find directions between two sites using google maps API services. Created using JS, HTML & CSS",
  },
  {
    img: "/images/projects/firestore-crud.gif",
    url: "https://firestore-crud-react.vercel.app/",
    name: "Firestore Links CRUD",
    desc: "This a URLs list manager created with React & Firestore, added some style with CSS and material icons",
  },
  {
    img: "/images/projects/responsive.gif",
    url: "https://map-api-js.vercel.app/",
    name: "responsive template",
    desc: "reusable responsive template, made only with HTML & CSS",
  },
];

export default (props) => (
  <div className="cards">
    {projects?.length &&
      projects.map((project) => (
        <div className="pj-card">
          <img className="pj-img" src={project.img} alt="" />
          <div className="pj-info">
            <div className="pj-title">{project.name}</div>
            <div className="pj-desc">{project.desc}</div>
            <button
              className="pj-btn"
              onClick={() => {
                window.open(project.url);
              }}
            >
              visit
            </button>
          </div>
        </div>
      ))}
  </div>
);
