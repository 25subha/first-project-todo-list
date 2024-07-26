import Navber from "./components/Navber";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { Route,Routes } from "react-router-dom";
import Faq from "./components/Faq";
import ProjectOne from "./pages/ProjectOne";
import FormController from "./pages/FormController";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Navber2 from "./pages/Navber2";
import App2 from "./pages/App2";

import Banner from "./pages/Banner";
import Getinvolved from "./components/home/Getinvolved";
import Story from "./components/home/Story";
function App() {

  return (
    <div>
   <Navber />
   <main>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/projectone" element={<ProjectOne />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/project3" element={<Project3 />}/>
    <Route path="/faq" element={<Faq />}/>
    <Route path="/formcontroller" element={<FormController />}/>
    <Route path="/project4" element={<Project4 />}/>
    <Route path="/project5" element={<Project5 />}/>
    <Route path="/navber2" element={<Navber2 />}/>
    <Route path="/app2" element={<App2 />}/>
    <Route path="/banner" element={<Banner />}/>
    <Route path="/getinvolved" element={<Getinvolved />}/>
    <Route path="/story" element={<Story />}/>

    </Routes>
   </main>  
    
    </div>
  );
};

export default App;
