import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import "./projets.scss";

const Projets = ({ picture, categories, title, description, link }) => {
  const [activeItem, setActiveItem] = useState(false);
  
  

  return (
    <div className="item" onClick={() => setActiveItem(!activeItem)}>
      <div className={activeItem ? "double-face active-item" : "double-face"}>
        <div className="double-face__face face">
          {<img src={picture} alt="screenshot item" />}
        </div>
        <div className="double-face__face arriere">
          <ul className="list-categories-projet">
            <p className="language">Languages utilisés:</p>
            <div className="container-li">
              {categories.map((categorie, index) => {
                return (
                  <li className="categorie-projet" key={index}>
                    {categorie}
                  </li>
                );
              })}
            </div>
          </ul>
          <div className="description-projet">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          
          <a href={link} target="_blank" rel="noreferrer">Lien du site</a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
