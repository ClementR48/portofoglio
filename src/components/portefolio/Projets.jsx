import React from "react";
import { useState } from "react/cjs/react.development";
import "./projets.scss";


const Projets = ({ picture}) => {

  const [activeItem, setActiveItem] = useState(false);
  
  return (
    <div className="item" onClick={() => setActiveItem(!activeItem)}>
      <div className={activeItem ? "double-face active-item" : "double-face"}>
        <div className="face">
          <img src={picture} alt="screenshot item" />
        </div>
        <div className="arriere">hola</div>
      </div>
    </div>
  );
};

export default Projets;
