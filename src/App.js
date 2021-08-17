import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfoglio from "./components/portfoglio/Portfoglio"
import Contact from "./components/contact/Contact"

import "./app.scss"
function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro />
       <Portfoglio />
       <Contact />
     </div>
    </div>
  );
}

export default App;
