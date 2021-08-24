import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const initialTypes = [
    { name: "projects", className: "btn" },
    { name: "skills", className: "btn" },
    { name: "studies", className: "btn" },
    { name: "experience", className: "btn" }
  ];
  const [types, setTypes] = useState(initialTypes);

  return (
    <header className="inner">
      <div>
        {types.map((type) => (
          <NavLink key={type.name} to={type.name}>
            <button value={type.name} className={type.className}>
              {type.name}
            </button>
          </NavLink>
        ))}
      </div>
    </header>
  );
}
