import "./portefolio.scss";

import Carousel from "./Carousel";

import { ArrowDown } from "react-feather";

const Portefolio = () => {
  return (
    <div className="portefolio" id="portefolio">
      
        <h1>Portefolio</h1>
      

      <Carousel/>

      <div className="container-lien">
        <a href="#contact">
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Portefolio;
