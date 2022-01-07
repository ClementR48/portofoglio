import React, { useRef, useEffect, useState } from "react";
import "./formulaire.scss";

import emailjs from "emailjs-com";

import { X } from "react-feather";

const Formulaire = ({ setOpenForm, setTextContact }) => {
  const [textAreaRow, setTextAreaRow] = useState(4);
  const [sizeScreen, setSizeScreen] = useState();
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  useEffect(() => {
    if (sizeScreen < 769) {
      setTextAreaRow(3);
    }
  }, [sizeScreen]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entreprise, setEntreprise] = useState("");

  const validateEmail = () => {
    let regex = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  const [buttonOpen, setButtonOpen] = useState(false);

  const validation = () => {
    if (name && email && message && entreprise) {
      if (validateEmail()) {
        setButtonOpen(true);
      } else {
        setButtonOpen(false);
      }
    } else {
      setButtonOpen(false);
    }
  };

  useEffect(() => {
    validation();
  }, [name, email, message, entreprise]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_z1t18kw",
        "template_62z3n4o",
        {
          name: name,
          entreprise: entreprise,
          email: email,
          message: message,
        },
        "user_ZIV5EqqdoEMtdrXBQ5k0j"
      )
      .then(
        (result) => {
          setEntreprise("");
          setName("");
          setMessage("");
          setEmail("");
          setOpenForm(false);
          setTextContact("Votre message a bien été envoyé");
          setTimeout(() => {
            setTextContact("N'hésitez pas à me contacter");
          }, 5000);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="formulaire">
      
      <div className="formulaire-titre">
        <h2>Contact</h2>
        <button
          className="cancel-btn"
          onClick={() => {
            setOpenForm(false);
          }}
        >
          <span>
            <X />
          </span>
        </button>
        <p className="text-intro-contact">
          Laissez-moi un message et je vous repondrai le plus vite possible{" "}
        </p>
      </div>
      <form onSubmit={sendEmail}>
        <div className="container-firstline">
          <label htmlFor="name" className="label-name">
            Nom
            <input
              type="text"
              htmlFor="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="entreprise" className="label-entreprise">
            Entreprise
            <input
              type="text"
              htmlFor="entreprise"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="email" className="label-email">
          Email
          <input
            type="email"
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message" className="label-message">
          Message
          <textarea
            htmlFor="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={textAreaRow}
          ></textarea>
        </label>
        {buttonOpen ? (
          <button style={{ transform: "scale(1)" }} type="submit">
            Envoyer le message
          </button>
        ) : (
          <button style={{ transform: "scale(0)" }} type="submit">
            Envoyer le message
          </button>
        )}
      </form> 
    </div>
  );
};

export default Formulaire;
