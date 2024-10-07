import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Services/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    </>
  )
}
