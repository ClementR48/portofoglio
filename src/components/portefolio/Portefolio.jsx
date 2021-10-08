import "./portefolio.scss";

import Carousel from "./Carousel";

import { ArrowDown, ArrowLeft, ArrowRight } from "react-feather";



const Portefolio = () => {

  

  return (
    <div className="portefolio" id="portefolio">
      <div className="first-block">
        <h1>Portefolio</h1>

        <ul className="categories">
          <li>React</li>
          <li>React</li>
          <li>React</li>

          <li>JS</li>
          <li>JS</li>
          <li>JS</li>
        </ul>
      </div>
     
     <Carousel />


      <div className="container-lien">
        <a href="#contact">
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Portefolio;
