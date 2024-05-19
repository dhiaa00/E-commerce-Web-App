import "./slider.css";
import firstImg from "../../images/img2.png";
import secondImg from "../../images/img1.png";
import thirdImg from "../../images/img3.png";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderWrapper = useRef();
  const left = useRef();
  const right = useRef();

  const handleSwipe = (e) => {
    if (e.target.classList[1] === "bi-chevron-double-left") {
      switch (currentSlide) {
        case 3:
          sliderWrapper.current.style.transform = `translateX(-100vw)`;
          setCurrentSlide(2);
          break;
        case 2:
          sliderWrapper.current.style.transform = `translateX(0vw)`;
          setCurrentSlide(1);
          break;
      }
    } else {
      setCurrentSlide(currentSlide + 1);
      sliderWrapper.current.style.transform = `translateX(-${
        currentSlide * 100
      }vw)`;
    }
  };

  return (
    <div className="slider">
      {currentSlide !== 1 && (
        <i
          className="bi bi-chevron-double-left"
          onClick={(e) => handleSwipe(e)}
          ref={left}></i>
      )}
      <div className="slider-wrapper" ref={sliderWrapper}>
        <div className="slide slide-1">
          <img src={firstImg} alt="book" />
          <div className="quote">
            <h1>Shoopy</h1>
            <p>More than products. It's a lifestyle.</p>
          </div>
        </div>
        <div className="slide slide-2">
          <img src={secondImg} alt="book" />
          <div className="quote">
            <h1>Fuel your passions</h1>
            <p>Find what inspires you</p>
          </div>
        </div>
        <div className="slide slide-3">
          <img src={thirdImg} alt="book" />
          <div className="quote">
            <h1>Ready to make it happen?</h1>
            <p>Shop our collection from home</p>
          </div>
        </div>
      </div>
      {currentSlide !== 3 && (
        <i
          className="bi bi-chevron-double-right"
          onClick={(e) => handleSwipe(e)}
          ref={right}></i>
      )}
    </div>
  );
};

export default Slider;
