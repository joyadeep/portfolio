import React from "react";
import { Intro } from "./components/intro/Intro";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Project } from "./components/project/Project";
// import { Footer } from './components/footer/Footer';
// import { Footer } from "./components/footer/Footer";
const App=()=>
{
  return(
    <>
  
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default App;
