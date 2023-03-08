import Header from "../../UI/molecules/Header";
import HomeBanner from "../../UI/molecules/HomeBanner";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import ProjectsSession from "../../UI/molecules/ProjectsSession";

function Home() {
  return (
    <>
      <Header />

      {/* <HashScroll hash="banner_home" behavior="smooth" position="start"> */}
      <div>
        <HomeBanner />
      </div>
      {/* </HashScroll> */}

      {/* <HashScroll hash="about_me_home" behavior="smooth" position="start"> */}
      <div>
        <AboutMe />
      </div>
      {/* </HashScroll> */}

      {/* <HashScroll hash="projects_home" behavior="smooth" position="start"> */}
      <div>
        <ProjectsSession />
      </div>
      {/* </HashScroll> */}
      {/*
      <HashScroll hash="contact_home" behavior="smooth" position="start"> */}
      <div>
        <Contact />
      </div>
      {/* </HashScroll> */}
    </>
  );
}

export default Home;
