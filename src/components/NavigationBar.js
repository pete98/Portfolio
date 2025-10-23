import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";

const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState("HeroPage");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tickingRef = useRef(false);

    const navItems = useMemo(() => ([
        { id: "HeroPage", label: "home" },
        { id: "AboutMe", label: "about me" },
        { id: "CoreStack", label: "core stack" },
        { id: "Projects", label: "projects" },
        { id: "Contact", label: "contact" },
    ]), []);

    const navbarClassNames = useMemo(() => ({
        base: "!bg-transparent z-50 flex w-full justify-center",
        wrapper: "mx-auto max-w-5xl w-full items-center gap-6 rounded-2xl border border-white/10 bg-white/20 px-4 py-3 text-white shadow-lg shadow-blue-950/30 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-white/10 sm:px-6 sm:py-4",
        toggle: "text-white",
        menu: "mt-4 rounded-2xl border border-white/10 bg-slate-950/95 px-4 pt-6 text-white shadow-xl shadow-blue-950/30 backdrop-blur-lg backdrop-saturate-150",
        menuItem: "text-white"
    }), []);

    useEffect(() => {
        if (!window.location.hash) {
            return;
        }

        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    const updateActiveSection = useCallback(() => {
        const sections = navItems
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) {
            return;
        }

        const scrollPosition = window.scrollY + window.innerHeight * 0.3;
        let currentSection = sections[0].id;

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.id;
                break;
            }

            if (scrollPosition >= sectionBottom) {
                currentSection = section.id;
            }
        }

        setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    }, [navItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (tickingRef.current) {
                return;
            }
            tickingRef.current = true;

            window.requestAnimationFrame(() => {
                updateActiveSection();
                tickingRef.current = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateActiveSection);
        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, [updateActiveSection]);

    const scrollToSection = useCallback((id) => {
        const target = document.getElementById(id);
        if (!target) {
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);

    const handleMenuItemPress = useCallback((id, event) => {
        event?.preventDefault?.();
        setActiveSection(id);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        scrollToSection(id);
    }, [isMenuOpen, scrollToSection]);

    return (
        <Navbar
            maxWidth="xl"
            position="static"
            classNames={navbarClassNames}
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent justify="start" className="sm:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="text-white"
                />
            </NavbarContent>

            <NavbarContent className="flex-1 justify-center sm:justify-start">
                <NavbarBrand>
                    <p className="text-base font-semibold tracking-wide text-white/90 md:text-lg">Pranavkumar Sailor</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-6 sm:flex" justify="end">
                {navItems.map(({ id, label }) => (
                    <NavbarItem key={id} isActive={activeSection === id}>
                        <Link
                            href={`#${id}`}
                            className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors md:text-xs lg:text-sm ${activeSection === id ? "text-white" : "text-white/70 hover:text-white"}`}
                            onPress={(event) => handleMenuItemPress(id, event)}
                        >
                            {label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {navItems.map(({ id, label }) => (
                    <NavbarMenuItem key={id} isActive={activeSection === id}>
                        <Link
                            href={`#${id}`}
                            className={`w-full text-base uppercase tracking-[0.24em] ${activeSection === id ? "text-white" : "text-white/70 hover:text-white"}`}
                            onPress={(event) => handleMenuItemPress(id, event)}
                        >
                            {label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavigationBar;
