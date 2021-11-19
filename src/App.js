import React from "react";
import { About } from "./components/about/About";
import { Intro } from "./components/intro/Intro";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Project } from "./components/project/Project";
const App=()=>
{
  return(
    <>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App;
