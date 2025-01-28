import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";


const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState("HeroPage");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "HeroPage"; // Default to the first section

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar className="h-14 bg-blue-950"  >
            <NavbarBrand>
                <p className="text-base  text-large text-white">Pranavkumar Sailor</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive={activeSection === "HeroPage"}>
                    <Link className={`text-large ${activeSection === "HeroPage" ? "text-white" : "text-white hover:text-white"}`} href="#HeroPage">
                        home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeSection === "AboutMe"}>
                    <Link className={`text-large ${activeSection === "AboutMe" ? "text-white" : "text-white hover:text-white"}`} href="#AboutMe">
                        about me
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeSection === "Projects"}>
                    <Link className={`text-large ${activeSection === "Projects" ? "text-white" : "text-white hover:text-white"}`} href="#Projects">
                        extended
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeSection === "Contact"}>
                    <Link className={`text-large ${activeSection === "Contact" ? "text-white" : "text-white hover:text-white"}`} href="#Contact">
                        projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavigationBar;