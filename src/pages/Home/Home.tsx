import HomeBanner from "../../UI/molecules/HomeBanner";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Projects from "../Projects";
export interface HomeProps {}




function Home({ }: HomeProps) {
    return <><HomeBanner/>
    <AboutMe/>
    <Projects />
    <Contact/>
    
    </>;
};

export default Home;
