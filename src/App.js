import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portefolio from "./components/portefolio/Portefolio"
import Contact from "./components/contact/Contact"

import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
     <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
     <div className="sections">
       <Intro className="section"/>
       <Portefolio className="section" /> 
       
       <Contact className="section"/>
     </div>
    </div>
  );
}

export default App;
