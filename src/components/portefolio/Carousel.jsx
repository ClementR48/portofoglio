import "./carousel.scss";

import { useEffect, useRef, useState } from "react";
import dataSlider from "../../data/projets";
import Projets from "./Projets";
import BtnCarousel from "./BtnCarousel";
import CategCarousel from "./CategCarousel";
import CercleCarousel from "./CercleCarousel";

const Carousel = () => {
  /* State */

  const [projetListToDisplay, setProjetListToDisplay] = useState(dataSlider);

  const [sizeSlider] = useState(85);
  const [windowSize, setWindowSize] = useState();
  const [nbCercles, setNbCercles] = useState([]);
  const [activeNoSlider, setActiveNoSlider] = useState(false);

  const [animSlide, setAnimSlide] = useState({
    index: 0,
    transform: sizeSlider,
    inProgress: false,
  });

  /* Référence */

  const slider = useRef();
  const containerItem = useRef();

  /* UseEffect */

  /* a chaque redimensions d'écran, on reinitialise l'animation du Slide */
  useEffect(() => {
    window.addEventListener("resize", () => {
      containerItem.current.style.transform = `translateX(0vw)`;
      setAnimSlide({
        index: 0,
        transform: sizeSlider,
        inProgress: false,
      });
    });
  }, []);

  /* On affecte une taille d'écran a chaque anim Slide */
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [animSlide]);

  /* A chaque changement de données dans le slide, on détermine si besoin d'un slider ou non  */

  useEffect(() => {
    if (windowSize < 427) {
      if (projetListToDisplay.length >= 2) {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(false);
      } else {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(true);
      }
    } else if (windowSize < 769) {
      if (projetListToDisplay.length >= 3) {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(false);
      } else {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(true);
      }
    } else {
      if (projetListToDisplay.length <= 3) {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(true);
      } else {
        setAnimSlide({
          index: 0,
          transform: 0,
          inProgress: false,
        });
        setActiveNoSlider(false);
      }
    }
  }, [projetListToDisplay, windowSize]);

  /* On détermine le nombre de cercle selon le nombre d'item et de la taille de l'écran */

  useEffect(() => {
    containerItem.current.style.transform = `translateX(-${
      animSlide.index * animSlide.transform
    }vw)`;

    let cercles = [];
    if(windowSize < 427) {
      for (let i = 1; i < projetListToDisplay.length + 1 ; i++) {
        cercles.push(i);
      }
    }else if(windowSize < 769) {
      for (let i = 1; i < projetListToDisplay.length  ; i++) {
        cercles.push(i);
      }
    }else {
      for (let i = 1; i < projetListToDisplay.length - 1 ; i++) {
        cercles.push(i);
      }
    }
    

    setNbCercles(cercles);
  }, [projetListToDisplay, animSlide, windowSize]);

  /* Fonctions  */

  const sliderResponsive = (index) => {
    if (windowSize < 427) {
      setAnimSlide({
        index: index,
        transform: sizeSlider,
        inProgress: true,
      });
      setTimeout(() => {
        setAnimSlide({
          index: index,
          transform: sizeSlider,
          inProgress: false,
        });
      }, 500);
    } else if (windowSize < 769) {
      setAnimSlide({
        index: index,
        transform: sizeSlider / 2,
        inProgress: true,
      });
      setTimeout(() => {
        setAnimSlide({
          index: index,
          transform: sizeSlider / 2,
          inProgress: false,
        });
      }, 500);
    } else {
      setAnimSlide({
        index: index,
        transform: sizeSlider / 3,
        inProgress: true,
      });
      setTimeout(() => {
        setAnimSlide({
          index: index,
          transform: sizeSlider / 3,
          inProgress: false,
        });
      }, 500);
    }
  };

  /* Return */

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
          windowSize={windowSize}
          dataSlider={projetListToDisplay}
          sliderResponsive={sliderResponsive}
          activeNoSlider={activeNoSlider}
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
              {projetListToDisplay.map((item, index) => {
                return <Projets key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <CercleCarousel
        nbCercles={nbCercles}
        animSlide={animSlide}
        sliderResponsive={sliderResponsive}
        activeNoSlider={activeNoSlider}
      />
    </div>
  );
};

export default Carousel;
