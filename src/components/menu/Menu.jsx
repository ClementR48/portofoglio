import { useState } from 'react'
import { Mail, User } from 'react-feather'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [hover, setHover] = useState('before')
  const [hover1, setHover1] = useState('before')
  const [hover2, setHover2] = useState('before')

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <div className="menu-wrapper">
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a
              href="#intro"
              onMouseOver={() => {
                setHover('hover')
              }}
              onMouseLeave={() => {
                setHover('after')

                setTimeout(function () {
                  setHover('before')
                }, 300)
              }}
            >
              Acceuil <span id="span" className={hover}></span>
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a
              href="#portefolio"
              onMouseOver={() => {
                setHover1('hover')
              }}
              onMouseLeave={() => {
                setHover1('after')

                setTimeout(function () {
                  setHover1('before')
                }, 300)
              }}
            >
              Portefolio <span id="span" className={hover1}></span>
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a
              href="#contact"
              onMouseOver={() => {
                setHover2('hover')
              }}
              onMouseLeave={() => {
                setHover2('after')

                setTimeout(function () {
                  setHover2('before')
                }, 300)
              }}
            >
              Contact <span id="span" className={hover2}></span>
            </a>
          </li>
        </ul>
        <div className="info-contact">
          <div className="itemContainer">
            <User className="icon" />
            <span>+336.37.22.28.76</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>riera.clement@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
