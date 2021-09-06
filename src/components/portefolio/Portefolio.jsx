import './portefolio.scss'

import { useEffect, useState } from 'react'

const Portefolio = () => {
  const [frontProject, setFrontProject] = useState(true)

  return (
    <div className="portefolio" id="portefolio">
      <h1>Portefolio</h1>
      <div className="grid">
        <div
          className={'projet ' + (!frontProject && ' turn')}
          onClick={() => {
            setFrontProject(!frontProject)
          }}
        >
          {frontProject && (
            <div className="front">
              <video autoPlay muted loop>
                <source
                  src="./assets/pepitas-react.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <div className="caption">
                <h2>Atelier del Sol</h2>
                <div className="separation"></div>
                <p>E-Commerce</p>
                <p>React</p>
              </div>
            </div>
          )}
          {!frontProject && (
            <div className="back">
              <p className="description">Site e-commerce fait de A à Z</p>
              <h3>Langages utilisés</h3>
              <div className="listes">
                <div className="list-front">
                  <h4>Front-end</h4>
                  <ul>
                    <li>Scss</li>
                    <li>React</li>
                    <li></li>
                  </ul>
                </div>
                <div className="list-back">
                  <h4>Back-end</h4>
                  <ul>
                    <li>Node</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portefolio
