import React, { useState } from "react";
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
    desc: "Find directions data between two sites using Google Maps API services (places, distance matrix). Created using JS, HTML & CSS",
  },
  {
    img: "/images/projects/firestore-crud.gif",
    url: "https://firestore-crud-react.vercel.app/",
    name: "Firestore Links CRUD",
    desc: "This is an URLs list manager created with React & Firestore, styles added with CSS and material icons",
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

const dataProjects = [
  {
    title: "la_tropical - Dashboard",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZDA2MWQyZGYtYzcwYy00MTkwLTg2YTAtOTU4ODgzODg5ZTk1IiwidCI6ImY0Y2Q4MTlmLWM1NmUtNGI5NS05ZTc4LTEwN2IxYmFjM2ZmMiJ9&embedImagePlaceholder=true",
  },
];

export default function Projects(props) {
  const [isWeb, setisWeb] = useState(true);

  return (
    <div>
      <p className="btn-group-title">Click below to choose type</p>
      <div className="btns-container">
        <button
          className={isWeb ? "btn-on" : "btn-off"}
          onClick={() => {
            !isWeb && setisWeb(!isWeb);
          }}
        >
          web projects
        </button>
        <button
          className={!isWeb ? "btn-on" : "btn-off"}
          onClick={() => {
            isWeb && setisWeb(!isWeb);
          }}
        >
          data projects
        </button>
      </div>
      {isWeb && (
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
      )}
      {!isWeb && (
        <div className="bi-cards">
          {dataProjects.map((pj) => (
            <div>
              <iframe
                title={pj.title}
                src={pj.src}
                frameborder="0"
                allowFullScreen="true"
              ></iframe>
              <p style={{color: "black"}}>{pj.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
