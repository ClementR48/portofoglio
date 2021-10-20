import React from 'react';
import "./formulaire.scss";

import { X } from 'react-feather';
import { useEffect, useState } from 'react/cjs/react.development';


const Formulaire = ({setOpenForm}) => {
  const [textAreaRow, setTextAreaRow] = useState(4);
  const [sizeScreen , setSizeScreen] = useState()
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, [])

  useEffect(() => {
    if(sizeScreen < 769){
      setTextAreaRow(3)
    }
  }, [sizeScreen])
  return (
    <div className="formulaire">
          <div className="formulaire-titre">
            <h2>Contact</h2>
            <button
              className="cancel-btn"
              onClick={() => {
                setOpenForm(false)
              }}
            >
              <span><X /></span> 
            </button>
            <p className="text-intro-contact">
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
              <textarea htmlFor="message" rows={textAreaRow}></textarea>
            </label>
            <button type="submit">Envoyer le message</button>
          </form>
        </div>
  );
}

export default Formulaire;