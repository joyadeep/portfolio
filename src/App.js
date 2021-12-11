import React, { useContext } from "react";
import { Intro } from "./components/intro/Intro";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Project } from "./components/project/Project";
import { Footer } from "./components/footer/Footer";
import { ThemeContext } from "./context";
import { Toggle } from "./components/toggle/Toggle";
const App=()=>
{
  const theme=useContext(ThemeContext);
  const dark=theme.state.darkMode;
  return(
    <>
  <div style={{
    backgroundColor:dark?"#222":"white",
    color:dark?"white":"black",
    transition:"500ms all"
  }}>

    <Toggle/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
  </div>
      <Footer/>
    </>
  )
}

export default App;
