import React from 'react';
import HeroPage from "../pages/HeroPage";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Sections = () => {
    return (
        <div> {/* Add padding to avoid overlap with the fixed navbar */}
            <section id="HeroPage" className="h-screen flex items-center justify-center bg-blue-950 ">
                <HeroPage />
            </section>
            <section id="AboutMe" className="h-screen  flex items-center justify-center bg-blue-950">
                <AboutMe />
            </section>
            <section id="Projects" className="h-screen  flex items-center justify-center bg-blue-950">
                <Projects />
            </section>
            <section id="Contact" className="h-screen  flex items-center justify-center bg-blue-950">
                <Contact />
            </section>
        </div>
    );
};

export default Sections;