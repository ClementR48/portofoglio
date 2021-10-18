import { useState } from 'react'
import './contact.scss'
import Formulaire from './Formulaire'

const Contact = () => {
  const [openForm, setOpenForm] = useState(false)
  
  return (
    <div className="contact" id="contact">
      {!openForm && (
        <button
          className="anim-btn"
          onClick={() => {
            setOpenForm(true)
          }}
        >
          Parlez-moi!
        </button>
      )}
      {!openForm && <h1>N'hesitez pas à me contacter</h1>}
      <div className={ openForm ? "animation-form active-animation-form" : "animation-form"}></div>

      {openForm && (
        <Formulaire setOpenForm={setOpenForm}/>
      )}
    </div>
  )
}

export default Contact
