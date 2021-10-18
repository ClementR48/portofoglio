
import "./cercleCarousel.scss";

const CercleCarousel = ({
  nbCercles,
  animSlide,
  sliderResponsive,
  activeNoSlider,
}) => {
  return (
    <div className="cercles-container">
      {nbCercles.map((item, index) => {
        return (
          <div
            key={index}
            className={
              animSlide.index === index
                ? " span-container active-cercle"
                : "span-container"
            } 
            onClick={() => {
              sliderResponsive(index, 85 / 3);
            }}
          >
            <span className={activeNoSlider ? "active-span" : ""}></span>
          </div>
        );
      })}
    </div>
  );
};

export default CercleCarousel;
