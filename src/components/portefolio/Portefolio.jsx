import "./portefolio.scss";

import ReactPlayer from 'react-player'
import { useEffect } from "react";

const Portefolio = () => {

  useEffect(() => {
    <ReactPlayer 
        url="./assets/video2.mp4"
        width="500px"
        playing="true"
        loop
      />
  }, [])
  return (
    <div className="portefolio" id="portefolio">
      <h1>Portefolio</h1>
      <div className="grid">
      
      <ReactPlayer 
        url="./assets/video2.mp4"
        width="500px"
        playing
        loop
      />
      
{/*         <div className="projet">
          <img src="./assets/photoClement.png" alt="" />
          <div className="caption">
            <video src="./assets/video.mp4"></video>
          </div>
          
        </div>
        <div className="projet">
          <img src="./assets/photoClement.png" alt="" />
          <div className="caption">
            <video src="./assets/video.mp4"></video>
          </div>
          
        </div>
        <div className="projet">
          <img src="./assets/photoClement.png" alt="" />
          <div className="caption">
          <video autoPlay width="500px" preload> 
              <source src="./assets/video.mp4"
              type="video/mp4" ></source>
              c'est de la daube ton nav
            </video>
          </div>

         
          
        </div> */}
      </div>
    </div>
  );
};

export default Portefolio;