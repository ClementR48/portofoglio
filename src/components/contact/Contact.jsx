import { useState } from 'react'
import './contact.scss'

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
      <div className="animation-form"></div>

      {openForm && (
        <div className="formulaire">
          <div className="formulaire-titre">
            <h2>Contact</h2>
            <button
              className="cancel-btn"
              onClick={() => {
                setOpenForm(false)
              }}
            >
              <span>X</span> 
            </button>
            <p>
              Laissez-moi un message et je vous repondrai le plus vite possible{' '}
            </p>
          </div>
          <form action="">
            <div className="container-firstline">
              <label htmlFor="name" className="label-name">
                Nom
                <input type="text" htmlFor="name" />
              </label>
              <label htmlFor="entreprise" className="label-entreprise">
                Entreprise
                <input type="text" htmlFor="entreprise" />
              </label>
            </div>
            <label htmlFor="email" className="label-email">
              Email
              <input type="email" htmlFor="email" />
            </label>
            <label htmlFor="message" className="label-message">
              Message
              <textarea htmlFor="message" rows="4"></textarea>
            </label>
            <button type="submit">Envoyer le message</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Contact
