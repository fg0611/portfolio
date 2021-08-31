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
    name: "SportApp v2",
    desc: "A full E-Commerce made with JS, Node, React, Redux, Express,PostgreSQL & Firebase",
  },
  {
    img: "/images/projects/maps-api-js.gif",
    url: "https://map-api-js.vercel.app/",
    name: "Directions Finder",
    desc: "Find directions data between two sites using Google Maps API services (places, distance matrix, JS...). Created using JS, HTML & CSS",
  },
  {
    img: "/images/projects/firestore-crud.gif",
    url: "https://firestore-crud-react.vercel.app/",
    name: "Firestore Links CRUD",
    desc: "This is a URLs list manager created with React & Firestore, styles added with CSS and material icons",
  },
  {
    img: "/images/projects/movieapp.gif",
    url: "https://moviesapp-tau.vercel.app/",
    name: "Movies App",
    desc: "A very easy to use responsive app made with React,Redux & CSS that allows the user to get data from the OMDB API & save the Favorite ones inside device's localStorage",
  },
  {
    img: "/images/projects/responsive.gif",
    url: "https://map-api-js.vercel.app/",
    name: "responsive template",
    desc: "reusable responsive template, made only with HTML & CSS",
  },
];

export default function Projects(props) {
  return (
    <div className="cards">
      {projects?.length &&
        projects.map((project) => (
          <div key={project.name} className="pj-card">
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
}
