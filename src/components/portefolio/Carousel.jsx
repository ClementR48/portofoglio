import "./carousel.scss";

import { useEffect, useRef, useState } from "react";
import dataSlider from "../../data/projets";
import Projets from "./Projets";
import BtnCarousel from "./BtnCarousel";
import CategCarousel from "./CategCarousel";
import CercleCarousel from "./CercleCarousel";


const Carousel = () => {
  


  /* State */



  const [projetListToDisplay, setProjetListToDisplay] = useState(dataSlider);

  const [sizeSlider, setSizeSlider] = useState(85);
  const [nbCercles, setNbCercles] = useState([]);
  const [activeNoSlider, setActiveNoSlider] = useState(false);

  const [animSlide, setAnimSlide] = useState({
    index: 0,
    transform: sizeSlider,
    inProgress: false,
  });



  /* Référence */


  const slider = useRef();
  const containerItem = useRef();

  

  /* UseEffect */

  useEffect(() => {
    

    

     window.addEventListener('resize', (e) => {
      if(e.target.innerWidth < 425){
        setAnimSlide({
          index: 0,
          transform: 85,
          inProgress: false,
        })
        

      }else if(e.target.innerWidth < 769){
        setAnimSlide({
          index: 0,
          transform: 85 / 2,
          inProgress: false,
        })
      }else {
        setAnimSlide({
          index:0,
          transform: 85 / 3,
          inProgress: false,
        })
      }
    }) 
  }, [])

  useEffect(() => {
    if(projetListToDisplay.length <= 3){
      setAnimSlide({
        index: 0,
        transform: 0,
        inProgress: false,
      })
      setActiveNoSlider(true)
    }else  {
      setActiveNoSlider(false)
      
    }
  }, [projetListToDisplay])

  useEffect(() => {
    /* setSizeSlider(slider.current.offsetWidth); */
    

      containerItem.current.style.transform = `translateX(-${
        animSlide.index * animSlide.transform
      }vw)`;
    

  }, [animSlide]);


/*   useEffect(() => {
    if(projetListToDisplay > 3){

      containerItem.current.style.transform = `translateX(-${
        animSlide.index * animSlide.transform
      }vw)`;
    }

    setSizeSlider(slider.current.offsetWidth); 

    
  }, [animSlide]);
 */

  useEffect(() => {

    if(projetListToDisplay > 3){

      containerItem.current.style.transform = `translateX(-${
        animSlide.index * animSlide.transform
      }vw)`;
    }
    let cercles = [];
   /*  if (sizeSlider < 526) {
      for (let i = 1; i < projetListToDisplay.length + 1; i++) {
        cercles.push(i);
      }
    } else if (sizeSlider < 654) {
      for (let i = 1; i < projetListToDisplay.length; i++) {
        cercles.push(i);
      }
    } else {
      for (let i = 1; i < projetListToDisplay.length - 1; i++) {
        cercles.push(i);
      }
    } */
    for (let i = 1; i < projetListToDisplay.length - 1 ; i++) {
      cercles.push(i);
    }

    setNbCercles(cercles);
  }, [/* sizeSlider, */ projetListToDisplay]); 


  /* Fonctions  */

/*   const cercleResponsive = (index) => {
    if (sizeSlider < 526) {
      sliderResponsive(index, sizeSlider);
    } else if (sizeSlider < 654) {
      sliderResponsive(index, sizeSlider / 2);
    } else {
      sliderResponsive(index, sizeSlider / 3);
    }
  }; */

  const sliderResponsive = (index, transform) => {
    setAnimSlide({
      index: index,
      transform: transform,
      inProgress: true,
    });
    setTimeout(() => {
      setAnimSlide({
        index: index,
        transform: transform,
        inProgress: false,
      });
    }, 500);
  };

  /* Return */

  return (
    <div className="carousel">
      <CategCarousel
        dataSlider={dataSlider}
        setProjetListToDisplay={setProjetListToDisplay}
        setAnimSlide={setAnimSlide}
      />
      <div className="carousel-container">
        <BtnCarousel
          animSlide={animSlide}
          sizeSlider={sizeSlider}
          dataSlider={projetListToDisplay}
          sliderResponsive={sliderResponsive}
          activeNoSlider={activeNoSlider}
          
        />
        <div className="slider" ref={slider}>
          <div className="container-slides">
            <div
              className={
                activeNoSlider
                  ? "container-item active-container-item"
                  : "container-item"
              }
              ref={containerItem}
            >
              {projetListToDisplay.map((item, index) => {
                return <Projets key={item.id} {...item} />;
              })}
            </div>

          </div>
        </div>
      </div>
            
              <CercleCarousel
                nbCercles={nbCercles}
                animSlide={animSlide}
                sliderResponsive ={sliderResponsive}
                activeNoSlider={activeNoSlider}
              />
            
    </div>
  );
};

export default Carousel;
