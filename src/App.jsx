import Navber from "./components/Navber";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <div>
   <Navber />
   <main>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/skill" element={<Skill />}/>
    </Routes>
   </main>
    
    </div>
  );
};

export default App;
