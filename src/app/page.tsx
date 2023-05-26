import About from "@/components/About";
import ButtonTheme from "@/components/ButtonTheme";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Init from "@/components/Init";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";

export default function Home() {
  return (
    <>
      <ButtonTheme />
      <Init />
      <Projects />
      <About />
      <Techs />
      <Contact />
      <Footer />
    </>
  );
}
