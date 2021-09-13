import './portefolio.scss'

import Carousel from 'react-elastic-carousel'
import { ArrowDown } from 'react-feather'

const Portefolio = () => {
  const properties = {
    itemsToShow: 2,
    itemsToScroll: 1,
  }

  return (
    <div className="portefolio" id="portefolio">
      <h1>Portefolio</h1>

      <ul className="categories">
        <li> React</li>
        <li>Node</li>
        <li>JS</li>
      </ul>

      <Carousel {...properties}>
        <div className="projet">
          <video autoPlay muted loop>
            <source src="/assets/pepitas-react.mp4" type="video/mp4" />
          </video>
          <div className="caption">
            <div className="langage front">
              <ul>
                <li>css</li>
                <li>React</li>
              </ul>
            </div>
            <div className="langage back">
              <ul>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projet">
          <video autoPlay muted loop>
            <source src="/assets/pepitas-react.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="projet">
          <video autoPlay muted loop>
            <source src="/assets/pepitas-react.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="projet">
          <video autoPlay muted loop>
            <source src="/assets/pepitas-react.mp4" type="video/mp4" />
          </video>
        </div>
      </Carousel>
      <div className="container-lien">
        <a href="#contact">
          <ArrowDown />
        </a>
      </div>
    </div>
  )
}

export default Portefolio
