import './portefolio.scss'

import { useEffect, useState } from 'react'

const Portefolio = () => {
  const [frontProject, setFrontProject] = useState(true)

  return (
    <div className="portefolio" id="portefolio">
      <h1>Portefolio</h1>

      <div className="galery">
        <div className="projet">
          <div className="card">
            <div className="face front">
              <video autoPlay muted loop>
                <source
                  src="./assets/pepitas-react.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <div className="caption">
                <div className="caption-info">
                  <h2>Atelier del Sol</h2>
                  <div className="separation"></div>
                  <p>E-Commerce</p>
                  <p className="text-react">React</p>
                </div>
              </div>
            </div>

            <div className="face back">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portefolio
