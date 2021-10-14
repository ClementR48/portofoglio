import { ArrowLeft, ArrowRight } from "react-feather";

import './btnCarousel.scss'

const BtnCarousel = ({
  animSlide,
  dataSlider,
  sizeSlider,
  sliderResponsive,
}) => {
  /* function pour bouton next */
  const next = () => {
    if (sizeSlider < 526) {
      if (animSlide.index === dataSlider.length - 1 && !animSlide.inProgress) {
        sliderResponsive(0, sizeSlider);
      } else if (
        animSlide.index !== dataSlider.length - 1 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, sizeSlider);
      }
    } else if (sizeSlider < 654) {
      if (animSlide.index === dataSlider.length - 2 && !animSlide.inProgress) {
        sliderResponsive(0, sizeSlider / 2);
      } else if (
        animSlide.index !== dataSlider.length - 2 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, sizeSlider / 2);
      }
    } else {
      if (animSlide.index === dataSlider.length - 3 && !animSlide.inProgress) {
        sliderResponsive(0, sizeSlider / 3);
      } else if (
        animSlide.index !== dataSlider.length - 3 &&
        !animSlide.inProgress
      ) {
        sliderResponsive(animSlide.index + 1, sizeSlider / 3);
      }
    }
  };

  /* function bouton previous  */

  const previous = () => {
    if (sizeSlider < 526) {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 1, sizeSlider);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, sizeSlider);
      }
    } else if (sizeSlider < 654) {
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 2, sizeSlider / 2);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, sizeSlider / 2);
      }
    } else {
      if (dataSlider.length <= 3) {
      }
      if (animSlide.index === 0 && !animSlide.inProgress) {
        sliderResponsive(dataSlider.length - 3, sizeSlider / 3);
      } else if (animSlide.index !== 0 && !animSlide.inProgress) {
        sliderResponsive(animSlide.index - 1, sizeSlider / 3);
      }
    }
  };
  return (
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
  );
};

export default BtnCarousel;
