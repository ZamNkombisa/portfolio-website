import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Hero from "../Hero";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";

export default function Home() {
    return (
        <>
          <Hero />
          <About />
          <MySkills />
          <MyProjects />
          <Contact />
          <Footer />
        </>
    )
}