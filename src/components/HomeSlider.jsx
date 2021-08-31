import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./homeslider.css";

export default function HomeSlider({ imgs }) {
  const [current, setCurrent] = useState(0);
  const length = imgs?.length;

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prev() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  // console.log(current);

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prev} />
      <FaArrowCircleRight className="right-arrow" onClick={next} />
      {imgs?.length &&
        imgs.map((img, index) => (
          <div className={index === current ? "img active" : "img"} key={index}>
            {index === current && (
              <img key={img} className="home-img" src={img} alt="..." />
            )}
          </div>
        ))}
    </section>
  );
}
