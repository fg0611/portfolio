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
      href="https://drive.google.com/file/d/1zbSzw5T3JW4lI3JrtGZbgGsASX2mMoVA/view?usp=sharing"
    >
      <img className="footer-img" src="/images/logos/cv.png" alt="" />
    </a>
  </div>
);
