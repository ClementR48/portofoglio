import { ArrowDown } from 'react-feather';
import { init } from 'ityped'
import './intro.scss';
import { useEffect, useRef } from 'react';

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:false,
      strings: ["Front-End","React.js", "CSS", "Javascript", "HTML"],
      startDelay: 500,
      backDelay:  2000,
      backSpeed:  150,
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
            <h2>Hi There, I'm</h2>
            <h1>Clément Riera</h1>
            <h3>Développeur <span ref={textRef} >  </span></h3>
          </div>
          <a href="#portefolio"><ArrowDown /></a>
        </div>
      
      
    </div>
  );
};

export default Intro;