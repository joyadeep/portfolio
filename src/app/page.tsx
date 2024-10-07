import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Services/>
    <Testimonial/>
    <Contact/>
    </>
  )
}
