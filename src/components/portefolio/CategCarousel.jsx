import React, { useState } from "react";

import "./categCarousel.scss";

const CategCarousel = ({ dataSlider, setProjetListToDisplay }) => {
  const [activeCateg, setActiveCateg] = useState(-1);

  const projetToDisplay = (categ) => {
    let projetsList = dataSlider.filter((item) => item.categorie === categ);
    setProjetListToDisplay(projetsList);
  };

  /* Liste des categories sans doublons  */
  let arrCateg = [];
  dataSlider.map((item) => arrCateg.push(item.categorie));
  let categorieFiltered = Array.from(new Set(arrCateg));
  return (
    <ul className="categories">
      {categorieFiltered.map((categ, index) => {
        return (
          <li
            key={index}
            className={index === activeCateg ? "active-categ" : ""}
            onClick={() => {
              setActiveCateg(index);
              projetToDisplay(categ);
            }}
          >
            {categ}
          </li>
        );
      })}
      <li
        onClick={(e) => {
          setProjetListToDisplay(dataSlider);
          setActiveCateg(-1);
        }}
        className={activeCateg === -1 ? "active-categ" : ""}
      >
        All
      </li>
    </ul>
  );
};

export default CategCarousel;
