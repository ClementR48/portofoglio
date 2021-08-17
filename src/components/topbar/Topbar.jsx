import { Mail, User } from 'react-feather'
import './topbar.scss'


const Topbar = ({menuOpen, setMenuOpen}) => {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Clément</a>
          <div className="itemContainer">
            <User className="icon"/>
            <span>+336.37.22.28.76</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>riera.clement@gmail.com</span>
          </div>
          
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={() => {
            setMenuOpen(!menuOpen)
          }} >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Topbar
