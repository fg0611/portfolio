import React from "react";
import "./styles.css";

export default (props) => (
  <div className="footer">
    <button
      onClick={() => {
        window.open("https://github.com/fg0611");
      }}
    >
      <i class="fa fa-github" aria-hidden="true"></i>
    </button>
    <button
      onClick={() => {
        window.open("https://www.linkedin.com/in/frangarrido0611/");
      }}
    >
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </button>
    <a class="button" href="mailto:fg0611@gmail.com">
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </a>
  </div>
);
