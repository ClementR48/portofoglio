import React from 'react';
import "./cercleCarousel.scss"

const CercleCarousel = ({nbCercles, animSlide, cercleResponsive}) => {
  return (
    <div className="cercles-container">
                {nbCercles.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        animSlide.index === index ? "active-cercle" : ""
                      }
                      onClick={() => {
                        cercleResponsive(index);
                      }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
  );
};

export default CercleCarousel;