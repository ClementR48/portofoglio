import "./carousel.scss";

import { useEffect, useRef, useState } from "react";
import dataSlider from "../../data/projets";
import Projets from "./Projets";
import BtnCarousel from "./BtnCarousel";
import CategCarousel from "./CategCarousel";
import CercleCarousel from "./CercleCarousel";
/* import dataSlider from "../../data/projets"; */

const Carousel = () => {
  /* References */

  const [activeLink, setActiveLink] = useState(false);
  const [projetListToDisplay, setProjetListToDisplay] = useState(dataSlider);

  const [animSlide, setAnimSlide] = useState({
    index: 0,
    transform: 28.33,
    inProgress: false,
  });

  /* Liste projets a montrer*/

  const slider = useRef();
  const containerItem = useRef();

  const [sizeSlider, setSizeSlider] = useState();
  const [nbCercles, setNbCercles] = useState([1, 2, 3]);
  const [activeNoSlider, setActiveNoSlider] = useState(false);

  /* Animation Slider */

  /* UseEffect */

  useEffect(() => {
    setSizeSlider(slider.current.offsetWidth);
  }, []);

  useEffect(() => {
    containerItem.current.style.transform = `translateX(-${
      animSlide.index * animSlide.transform
    }px)`;

    setSizeSlider(slider.current.offsetWidth);

    if (sizeSlider < 526) {
      if (dataSlider.length <= 1) {
        setActiveNoSlider(true);
      } else {
        containerItem.current.style.transform = `translateX(-${
          animSlide.index * animSlide.transform
        }px)`;
      }
    } else if (sizeSlider < 654) {
      if (dataSlider.length <= 2) {
        setActiveNoSlider(true);
      } else {
        containerItem.current.style.transform = `translateX(-${
          animSlide.index * animSlide.transform
        }px)`;
      }
    } else {
      if (dataSlider.length <= 3) {
        setActiveNoSlider(true);
      } else {
        containerItem.current.style.transform = `translateX(-${
          animSlide.index * animSlide.transform
        }px)`;
      }
    }
  }, [animSlide]);

  /* function pour responsive */

  /* cercles */

  useEffect(() => {
    let cercles = [];
    if (sizeSlider < 526) {
      for (let i = 1; i < dataSlider.length + 1; i++) {
        cercles.push(i);
      }
    } else if (sizeSlider < 654) {
      for (let i = 1; i < dataSlider.length; i++) {
        cercles.push(i);
      }
    } else {
      for (let i = 1; i < dataSlider.length - 1; i++) {
        cercles.push(i);
      }
    }

    setNbCercles(cercles);
  }, [sizeSlider, animSlide]);

  const cercleResponsive = (index) => {
    if (sizeSlider < 526) {
      sliderResponsive(index, sizeSlider);
    } else if (sizeSlider < 654) {
      sliderResponsive(index, sizeSlider / 2);
    } else {
      sliderResponsive(index, sizeSlider / 3);
    }
  };

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

  return (
    <div className="carousel">
      <CategCarousel
        dataSlider={dataSlider}
        setProjetListToDisplay={setProjetListToDisplay}
        setAnimSlide={setAnimSlide}
      />
      <div className="carousel-container">
        <BtnCarousel
          animSlide={animSlide}
          sizeSlider={sizeSlider}
          dataSlider={dataSlider}
          sliderResponsive={sliderResponsive}
        />
        <div className="slider" ref={slider}>
          <div className="container-slides">
            <div
              className={
                activeNoSlider
                  ? "container-item active-container-item"
                  : "container-item"
              }
              ref={containerItem}
            >
              {dataSlider.map((item, index) => {
                return <Projets key={item.id} {...item} />;
              })}
            </div>

            {!activeNoSlider && (
              <CercleCarousel
                nbCercles={nbCercles}
                animSlide={animSlide}
                cercleResponsive={cercleResponsive}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
