import "./portefolio.scss";

import Carousel from "./Carousel";
import dataSlider from "../../data/projets";
import { useState } from "react";
import { ArrowDown } from "react-feather";



const Portefolio = () => {
  
  const [activeLink, setActiveLink] = useState(false)
  let arr = [];
  dataSlider.map(item => arr.push(item.categorie))
  let newArr = Array.from(new Set(arr))


  
  return (
    <div className="portefolio" id="portefolio">
      <div className="first-block">
        <h1>Portefolio</h1>

        <ul className="categories">
          {newArr.map((categ, index ) => {
            return <li key={index} className={activeLink ? "active-link" : ""} onClick={() => {
              setActiveLink(!activeLink)
            }}>{categ}</li>
          } )}
          
         
        </ul>
      </div>
     
     <Carousel dataSlider={dataSlider}/>


      <div className="container-lien">
        <a href="#contact">
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Portefolio;
