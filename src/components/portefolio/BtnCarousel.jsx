import { ArrowLeft, ArrowRight } from "react-feather";

import "./btnCarousel.scss";

const BtnCarousel = ({
  animSlide,
  dataSlider,
  sliderResponsive,
  activeNoSlider,
  windowSize,
}) => {
  /* Fonction permettant de définir l'index sur lequel se fixer en cas de dépassaement du nombre d'élement dans le tableau */

  const responsiveBtn = (nbItem) => {
    if (dataSlider.length > nbItem) {
      if (
        animSlide.index === dataSlider.length - nbItem &&
        !animSlide.inProgress
      ) {
        sliderResponsive(0);
      } else if (
        animSlide.index !== dataSlider.length - nbItem &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1);
      }
    }
  };

  const responsiveBtnPre = (nbItem) => {
    if (dataSlider.length > nbItem) {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - nbItem);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1);
      }
    }
  };

  /* function pour bouton next */
  const next = () => {
    if (windowSize < 427) {
      responsiveBtn(1);
    } else if (windowSize < 769) {
      responsiveBtn(2);
    } else {
      responsiveBtn(3);
    }
  };

  /* function bouton previous  */

  const previous = () => {
    if (windowSize < 427) {
      responsiveBtnPre(1);
    } else if (windowSize < 769) {
      responsiveBtnPre(2);
    } else {
      responsiveBtnPre(3);
    }
  };
  return (
    <div className="commandes">
      <button
        className={activeNoSlider ? "previous reset-btn" : "previous"}
        onClick={() => {
          previous();
        }}
      >
        <ArrowLeft />
      </button>
      <button
        className={activeNoSlider ? "next reset-btn" : "next"}
        onClick={() => {
          next();
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default BtnCarousel;
