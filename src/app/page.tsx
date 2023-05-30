import About from "@/components/About";
import ButtonTheme from "@/components/ButtonTheme";
import ButtonTop from "@/components/ButtonTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Init from "@/components/Init";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";
import PageWrapper from "./pageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <ButtonTheme />
        <Init />
        <Projects />
        <About />
        <Techs />
        <Contact />
        <Footer />
        <ButtonTop />
      </PageWrapper>
    </>
  );
}
