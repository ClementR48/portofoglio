import "./carousel.scss";

import { ArrowLeft, ArrowRight } from "react-feather";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {

  const slider = useRef()

  const [activeItem, setActiveItem] = useState(false);
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(30)
  
  const [sliderWidth, setSliderWidth] = useState();

  


  return (
    <div className="carousel">
      <div className="slider">
        <div className="container-slides">
          <div className="container-item" ref={slider}>
            <div className="item">
              <div className="double-face">
                <div className="face">
                  <img src="assets/img-atelier.png" alt="screenshot item" />
                </div>
                <div className="arriere">
                  hola
                </div>
              </div>
            </div>
            <div className="item" onClick={() => {
              setActiveItem(!activeItem)
            }}>
              <div className={(activeItem) ? 'double-face active-item' : "double-face"}>
                <div className="face">
                  <img src="assets/img-atelier.png" alt="screenshot item" />
                </div>
                <div className="arriere">
                  <p>okok</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="double-face">
                <div className="face">
                  <img src="assets/img-atelier.png" alt="screenshot item" />
                </div>
                <div className="arriere">
                  <p>okokok</p>
                </div>
              </div>
            </div>
          </div>

        <div className="commandes">
          <button className="previous">
            <ArrowLeft />
          </button>
          <button className="next" onClick={() => {
            slider.current.style.transform = `translateX(-${transform}vw)`
          }}>
            <ArrowRight />
          </button>
        </div>
        <div className="cercles-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;