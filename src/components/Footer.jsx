import React from "react";
import "./footer.css";

export default (props) => (
  <div className="footer">
    <a className="footer-link" href="https://github.com/fg0611">
      <img className="footer-img" src="/images/logos/git2.png" alt="" />
    </a>
    <a
      className="footer-link"
      href="https://www.linkedin.com/in/frangarrido0611/"
    >
      <img className="footer-img" src="/images/logos/linkedin.png" alt="" />
    </a>
    <a className="footer-link" href="mailto:fg0611@gmail.com">
      <img className="footer-img" src="/images/logos/gmail.png" alt="" />
    </a>
    <a
      className="footer-link"
      href="https://drive.google.com/file/d/1czmO6iiaLATHsvu-ps1LOie-u43bAMyf/view?usp=share_link"
    >
      <img className="footer-img" src="/images/logos/cv.png" alt="" />
    </a>
  </div>
);
