import React, { useState } from "react";

import "./categCarousel.scss";

const CategCarousel = ({ dataSlider, setProjetListToDisplay }) => {
  const [activeCateg, setActiveCateg] = useState(-1);

  const projetToDisplay = (categ) => {
    
    let projetsList = dataSlider.filter((item) =>
      item.categories.find((categorie) => categorie === categ)
    );
    setProjetListToDisplay(projetsList);
  };

  /* Liste des categories sans doublons  */
  let arrTransition = [];
  let arrCateg = [];
  dataSlider.map((item) => arrTransition.push(item.categories));
  arrTransition.forEach((arr) => arrCateg.push(...arr));
  let categorieFiltered = Array.from(new Set(arrCateg));

  return (
    <ul className="categories">
      {categorieFiltered.map((categ, index) => {
        return (
          <li
            key={index}
            className={index === activeCateg ? "active-categ" : ""}
            onClick={() => {
              setTimeout(() => {
                projetToDisplay(categ);
              }, 100);
              setActiveCateg(index);
              projetToDisplay("");
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
