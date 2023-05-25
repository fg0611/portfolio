import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  margin: 2px;
  background-color: white;
  color: black;
  padding: 5px 15px;
  border-radius: 15px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 1s;
  &:hover {
    color: #fafafa;
    background-color: #616161;
    transform: scale(1.03);
  }
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
opacity: 1;
color: #fafafa;
background-color: #424242;
`}
`;

const types = ["home", "projects", "skills", "experience", "studies", "others"];

function BtnGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types?.map((type) => (
        <NavLink key={type} to={type}>
          <ButtonToggle
            active={active === type}
            onClick={() => {
              setActive(type);
              // console.log(type);
            }}
          >
            {type}
          </ButtonToggle>
        </NavLink>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <header className="inner">
      <BtnGroup />
    </header>
  );
}
