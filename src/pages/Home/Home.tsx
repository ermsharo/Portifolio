import { createRef } from "react";
import Header from "../../UI/molecules/Header";
import HomeBanner from "../../UI/molecules/HomeBanner";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Projects from "../Projects";
import { HashScroll } from "react-hash-scroll";
export interface HomeProps {}

function Home({}: HomeProps) {


  return (
    <>
      <Header />

      <HashScroll hash="banner_home" behavior="smooth" position="start">
        <div>
          {" "}
          <HomeBanner />
        </div>
      </HashScroll>

      <HashScroll hash="about_me_home" behavior="smooth" position="start">
        <div>
          <AboutMe />
        </div>
      </HashScroll>

      <HashScroll hash="projects_home" behavior="smooth" position="start">
        <div>
          <Projects />
        </div>
      </HashScroll>

      <HashScroll hash="contact_home" behavior="smooth" position="start">
        <div>
          {" "}
          <Contact />
        </div>
      </HashScroll>
    </>
  );
}

export default Home;
