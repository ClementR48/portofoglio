import React from 'react';

import "./categCarousel.scss"

const CategCarousel = ({dataSlider , setProjetListToDisplay, setAnimSlide}) => {


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
              className={""}
              value={categ}
              onClick={() => {
                projetToDisplay(categ);
                setAnimSlide({
                  index: 0,
                  transform: 0,
                  inProgress: false,
                });
              }}
            >
              {categ}
            </li>
          );
        })}
        <li>ok</li>
      </ul>
  );
};

export default CategCarousel;