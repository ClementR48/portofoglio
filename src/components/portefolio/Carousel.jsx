import "./carousel.scss";

import { ArrowLeft, ArrowRight } from "react-feather";
import { useEffect, useRef, useState } from "react";
import Projets from "./Projets";
import dataSlider from "../../data/projets";

const Carousel = () => {
  /* References */

  const slider = useRef();
  const containerItem = useRef();

  console.log(dataSlider.length);
  /* Animation Slider */

  const [animSlide, setAnimSlide] = useState({
    index: 0,
    transform: 28.33,
    inProgress: false,
  });

  /* UseEffect */

  useEffect(() => {
    containerItem.current.style.transform = `translateX(-${
      animSlide.index * animSlide.transform
    }vw)`;
  }, [animSlide]);

  /* function pour responsive */

  const sliderResponsive = (index, transform) => {
    setAnimSlide({
      index: index,
      transform: transform,
      inProgress: true,
    });
    setTimeout(() => {
      setAnimSlide({
        index: index,
        transform: transform,
        inProgress: false,
      });
    }, 500);
  };

  /* function pour bouton next */
  const next = () => {
    if (slider.current.offsetWidth < 526) {
      if (animSlide.index === dataSlider.length - 1 && !animSlide.inProgress) {
        sliderResponsive(0, 85, true, 500);
      } else if (
        animSlide.index !== dataSlider.length - 1 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, 85, true, 500);
      }
    } else if (slider.current.offsetWidth < 692) {
      if (animSlide.index === dataSlider.length - 2 && !animSlide.inProgress) {
        sliderResponsive(0, 42.5, true, 500);
      } else if (
        animSlide.index !== dataSlider.length - 2 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, 42.5, true, 500);
      }
    } else {
      if (animSlide.index === dataSlider.length - 3 && !animSlide.inProgress) {
        sliderResponsive(0, 28.33, true, 500);
      } else if (
        animSlide.index !== dataSlider.length - 3 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, 28.33, true, 500);
      }
    }
  };

  /* function bouton previous  */

  const previous = () => {
    if (slider.current.offsetWidth < 383) {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 1, 85, true, 500);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, 85, true, 500);
      }
    } else if (slider.current.offsetWidth < 692) {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 2, 42.5, true, 500);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, 42.5, true, 500);
      }
    } else {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 3, 28.33, true, 500);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, 28.33, true, 500);
      }
    }
  };

  return (
    <div className="carousel">
      <div className="slider" ref={slider}>
        <div className="container-slides">
          <div className="container-item" ref={containerItem}>
            {dataSlider.map((item, index) => {
              return <Projets key={item.id} {...item} />;
            })}
          </div>

          <div className="commandes">
            <button
              className="previous"
              onClick={() => {
                previous();
              }}
            >
              <ArrowLeft />
            </button>
            <button
              className="next"
              onClick={() => {
                next();
              }}
            >
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
