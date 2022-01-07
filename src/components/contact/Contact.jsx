import { useState } from 'react'
import './contact.scss'
import Formulaire from './Formulaire.jsx'

const Contact = () => {
  const [openForm, setOpenForm] = useState(false)
  const [textContact, setTextContact] = useState("N'hésitez pas à me contacter")
  
  return (
    <div className="contact" id="contact">
      {!openForm && (
        <button
          type='button'
          className="anim-btn"
          onClick={() => {
            setOpenForm(true)
          }}
        >
          Contact
        </button>
      )}
      {!openForm && <h1>{textContact}</h1>} 
      <div className={ openForm ? "animation-form active-animation-form" : "animation-form"}></div>

      {openForm && (
        
          <Formulaire setOpenForm={setOpenForm} setTextContact={setTextContact} />  
      )}
    </div>
  )
}

export default Contact
