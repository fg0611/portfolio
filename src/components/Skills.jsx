import React, { useState, useEffect, useRef } from "react";
import "./skills.css";

const skills = [
  { name: "javascript", url: "images/skills/js.png", type: "lang" },
  { name: "html", url: "images/skills/html.jfif", type: "lang" },
  { name: "css", url: "images/skills/css.png", type: "lang" },
  { name: "python", url: "images/skills/python.png", type: "lang" },
  { name: "R", url: "images/skills/r.png", type: "lang" },
  { name: "postgreSql", url: "images/skills/postgre.png", type: "db" },
  { name: "mongodb", url: "images/skills/mongo.png", type: "db" },
  { name: "firebase", url: "images/skills/firebase.png", type: "db" },
  { name: "express", url: "images/skills/express.png", type: "frame" },
  { name: "git", url: "images/skills/git.png", type: "tool" },
  { name: "react", url: "images/skills/react.jfif", type: "lib" },
  { name: "redux", url: "images/skills/redux.png", type: "lib" },
  { name: "heroku", url: "images/skills/heroku.png", type: "tool" },
  { name: "linux", url: "images/skills/linux.jfif", type: "tool" },
  { name: "docker", url: "images/skills/docker.jfif", type: "tool" },
  { name: "excel", url: "images/skills/excel.png", type: "tool" },
  { name: "vercel", url: "images/skills/vercel.jpg", type: "tool" },
  { name: "civil3d", url: "images/skills/civil.png", type: "tool" }
];

export default function Skills() {
  const index = useRef(0);
  let text = "Hi My name is Fran";
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [currentText, text]);

  return (
    <div>
      <div className="skills-container">
        <p>{text}</p>
        {!skills?.length ? (
          <img className="skills-img" src="/images/loader.gif" alt="" />
        ) : (
          skills.map((skill) => (
            <div key={skill.url} className="skills-item">
              <img className="skills-img" src={skill.url} alt="" />
              <p className="skills-p">{skill.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
