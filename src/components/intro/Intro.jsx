import { ArrowDown } from 'react-feather';
import { init } from 'ityped'
import './intro.scss';
import { useEffect, useRef } from 'react';

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:false,
      strings: ["Fullstack", "Front-end", "Javascript", "React.js", "Node.js"],
      startDelay: 500,
      backDelay:  1000,
      backSpeed:  100,
    })
  }, [])
  return (
    <div className="intro" id="intro">
      
        <div className="left">
          <div className="imageContainer">
            {/* <img src="assets/photoClement2.png" alt="" /> */}
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            
            <h1>Clément Riera</h1>
            <h3>Développeur <span ref={textRef} >  </span></h3>
          </div>
          <div className="container-lien">
          <a href="#portefolio"><ArrowDown /></a>
          </div>
        </div>
      
      
    </div>
  );
};

export default Intro;