import React from 'react';
import {Button, Image, Tab, Tabs} from "@heroui/react";

// Assets used across sections
import reactImg from "../assets/reactImg.svg";
import javaIcon from "../assets/java.svg";
import springIcon from "../assets/spring.svg";
import javascriptIcon from "../assets/javascript.svg";
import dockerIcon from "../assets/docker.svg";
import awsColor from "../assets/aws-color.webp";
import MY_PHOTO from "../assets/MY_PHOTO.JPEG";
import Pranav_Resume from "../assets/Pranav_SWE.pdf";

// About assets
import angularLogo from "../assets/angularlogo.svg";
import htmlLogo from "../assets/htmllogo.svg";
import nodeLogo from "../assets/nodejslogo.svg";
import viteLogo from "../assets/vite_logo.svg";

// Core stack assets
import springBootIcon from "../assets/spring-icon-svgrepo-com.svg";
import awsIcon from "../assets/aws.svg";
import dockerLogo from "../assets/docker.svg";
import mysqlLogo from "../assets/mysqllogo.svg";
import chromeLogo from "../assets/chromelogo.svg";

// Projects assets
import umsystem from "../assets/umsystem.png";
import tiffinlyImg from "../assets/tiffinlyImg.png";

const Sections = () => {
  // Hero data
  const techStack = [
    {icon: springIcon, alt: "Spring"},
    {icon: javaIcon, alt: "Java"},
    {icon: javascriptIcon, alt: "JavaScript"},
    {icon: reactImg, alt: "React"},
    {icon: dockerIcon, alt: "Docker", mobileHidden: true},
    {icon: awsColor, alt: "AWS"},
  ];
  const highlights = [
    {value: "3+", label: "Years building reliable software"},
    {value: "10+", label: "End-to-end products shipped"},
  ];
  const linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/pranavsailor";
  };
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = Pranav_Resume;
    link.download = "PRANAV_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // About data
  const skills = [
    {icon: angularLogo, label: "Angular"},
    {icon: viteLogo, label: "Vite"},
    {icon: javascriptIcon, label: "JavaScript"},
    {icon: reactImg, label: "ReactJS"},
    {icon: nodeLogo, label: "NodeJS"},
    {icon: htmlLogo, label: "HTML"},
  ];
  const focusAreas = [
    "Translate complex problem statements into intuitive interfaces.",
    "Design modular APIs with attention to performance and resilience.",
    "Cultivate shipping discipline through automation and observability.",
  ];

  // Core stack data
  const stack = [
    {icon: awsIcon, label: "AWS"},
    {icon: dockerLogo, label: "Docker"},
    {icon: javaIcon, label: "Java"},
    {icon: springBootIcon, label: "Spring Boot"},
    {icon: mysqlLogo, label: "MySQL"},
    {icon: chromeLogo, label: "Web"},
  ];
  const pillars = [
    "Cloud-native delivery",
    "Automation-first mindset",
    "Obsessed with DX",
  ];

  // Projects data
  const tabItems = [
    {
      key: "fullstack",
      title: "Full Stack",
      projects: [
        {
          name: "User System Management",
          description: "",
          link: "https://um.pranavsailor.com",
          linkLabel: "um.pranavsailor.com",
          visual: {
            type: "image",
            src: umsystem,
            alt: "User System Management dashboard preview",
          },
        },
        {
          name: "Tiffinly Foods",
          description:
            "Tiffinly Foods is built on a modern full-stack architecture using React Native for cross-platform mobile apps and Spring Boot for a scalable Java backend. It integrates Auth0 for authentication, Stripe for subscriptions and payments, and is deployed via AWS Elastic Beanstalk to keep the experience reliable and secure.",
          link: "https://tiffinlyfoods.com",
          linkLabel: "tiffinlyfoods.com",
          visual: {
            type: "image",
            src: tiffinlyImg,
            alt: "Tiffinly Foods platform preview",
          },
        },
      ],
    },
    {
      key: "ai",
      title: "AI",
      projects: [
        {
          name: "pyChatGPT",
          description:
            "A Python-based implementation of ChatGPT that enables voice interactions and streamlined CLI tooling with customizable prompts and responses.",
          link: "https://github.com/pete98/pyChatGPT.git",
          linkLabel: "GitHub Repository",
        },
      ],
    },
    {
      key: "side",
      title: "Data Stuff",
      projects: [
        {
          name: "Spotify Data Analysis",
          description:
            "Data analysis atop Spotify’s API to visualize listening habits, top tracks, artists, and playlists using Python, Pandas, and Matplotlib.",
          link: "https://github.com/pete98/Spotify-Data-Analysis.git",
          linkLabel: "GitHub Repository",
        },
      ],
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section id="HeroPage" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 pt-24 mt-5">
        <div className="flex w-full max-w-6xl min-h-0 min-w-0 flex-col gap-10 rounded-[32px] border border-white/15 bg-white/5 p-6 text-white shadow-xl shadow-blue-950/10 backdrop-blur-xl sm:p-12 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 mx-auto">
          <div className="flex flex-col items-center gap-7 text-center text-white lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 sm:text-[0.7rem]">
              Full-Stack Engineer
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Hi, I’m <span className="text-blue-200 font-bold">Pranav Sailor</span>
            </h1>
            <p className="text-base text-blue-100/80 sm:text-lg lg:max-w-xl">
              I build resilient, user-centred products across the stack — from performant interfaces to cloud-ready services. Java, Spring Boot, React, Docker, and AWS form the backbone of the platforms I deliver.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              {techStack.map(({icon, alt, mobileHidden}) => (
                <div
                  key={alt}
                  className={`h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-transform duration-200 hover:-translate-y-1 sm:h-16 sm:w-16 ${mobileHidden ? "hidden sm:flex" : "flex"}`}
                >
                  <img src={icon} alt={alt} className="h-8 w-8 sm:h-10 sm:w-10"/>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px] hover:from-blue-400 hover:to-indigo-400 md:px-8 md:text-base"
                onPress={downloadFile}
              >
                Download CV
              </Button>
              <Button
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/20 md:px-5"
                onPress={linkedin}
                aria-label="Visit LinkedIn profile"
              >
                <span className=" text-xs md:inline">LinkedIn</span>
              </Button>
            </div>

            <div className="grid w-full gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left sm:grid-cols-2 sm:gap-6 lg:max-w-3xl">
              {highlights.map(({value, label}) => (
                <div key={value} className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-100 sm:text-3xl">{value}</span>
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-100/70 sm:text-[0.7rem]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-blue-100/70 sm:text-base">(Available for Hire)</p>
          </div>

          <div className="hidden w-full min-w-0 justify-center md:flex lg:justify-end">
            <div className="relative flex h-full w-full max-w-sm items-center justify-center">
              <div className="absolute inset-y-6 inset-x-10 -z-10 rounded-[32px] bg-gradient-to-br from-blue-500/40 via-blue-400/20 to-transparent blur-xl"/>
              <Image
                src={MY_PHOTO}
                width={320}
                alt="Portrait of Pranavkumar Sailor"
                className="w-64 max-w-xs rounded-[28px] border border-white/20 object-cover md:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="AboutMe" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
          <div className="h-[75%] w-11/12 max-w-5xl rounded-[3rem] bg-gradient-to-b from-blue-900/30 via-blue-900/20 to-transparent blur-2xl" />
        </div>

        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl min-h-0 min-w-0 flex-col gap-12 rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-900/70 via-blue-900/45 to-slate-900/35 p-6 backdrop-blur-lg sm:p-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex w-full flex-col items-center gap-6 text-center lg:w-2/5 lg:items-start lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 sm:text-[0.7rem]">
                About
              </span>
              <h2 className="w-full text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                "I'm passionate about creating fullstack web applications."
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-blue-100/80 sm:text-base">
                I thrive at the intersection of product thinking and engineering craft — pairing clean, scalable services with polished user experiences that feel effortless.
              </p>
              <ul className="flex w-full flex-col gap-3 text-left text-xs font-medium uppercase tracking-[0.3em] text-blue-100/60 sm:text-[0.7rem]">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left normal-case tracking-normal text-blue-100/80">
                    <span className="mt-2 hidden h-1.5 w-1.5 rounded-full bg-blue-300 sm:block"/>
                    <span className="text-sm font-medium leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:w-3/5 lg:grid-cols-2 xl:grid-cols-3">
              {skills.map(({icon, label}) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-4 rounded-3xl border border-white/20 bg-white/95 px-8 py-8 text-center text-gray-900 transition-transform duration-200 hover:-translate-y-1"
                >
                  <img src={icon} alt={`${label} icon`} className="h-14 w-14 sm:h-16 sm:w-16"/>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE STACK */}
      <section id="CoreStack" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
          <div className="h-[75%] w-11/12 max-w-5xl rounded-[3rem] bg-gradient-to-br from-blue-900/35 via-indigo-900/22 to-transparent blur-2xl" />
        </div>

        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl min-h-0 min-w-0 flex-col gap-12 rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-900/70 via-blue-900/45 to-slate-900/35 p-6 backdrop-blur-lg sm:p-12 lg:flex-row-reverse lg:items-start lg:gap-16">
            <div className="flex w-full flex-col items-center gap-6 text-center lg:w-2/5 lg:items-start lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 sm:text-[0.7rem]">
                Core Stack
              </span>
              <h2 className="w-full text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                "I love turning ideas into scalable and efficient solutions!"
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-blue-100/80 sm:text-base">
                These are the platforms, services, and frameworks I rely on to deliver secure, maintainable products — from proof-of-concept to production launch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {pillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200/60 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:w-3/5 lg:grid-cols-2 xl:grid-cols-3">
              {stack.map(({icon, label}) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-4 rounded-3xl border border-white/20 bg-white/95 px-8 py-8 text-center text-gray-900 transition-transform duration-200 hover:-translate-y-1"
                >
                  <img src={icon} alt={`${label} icon`} className="h-14 w-14 sm:h-16 sm:w-16"/>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
          <div className="h-[75%] w-11/12 max-w-5xl rounded-[3rem] bg-gradient-to-b from-indigo-900/35 via-blue-900/18 to-transparent blur-2xl" />
        </div>

        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl min-h-0 min-w-0 flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-900/70 via-blue-900/45 to-slate-900/35 p-6 backdrop-blur-lg sm:p-12">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 sm:mx-0 sm:text-[0.7rem]">
                Selected Work
              </span>
              <p className="text-3xl font-semibold text-white sm:text-4xl">Recent Projects & Collaborations</p>
              <p className="text-sm leading-relaxed text-blue-100/80 sm:text-base">
                A rotating look at the platforms I've helped design, build, and ship — spanning full-stack systems, AI-powered tools, and data-driven dashboards.
              </p>
            </div>

            <Tabs
              aria-label="Highlighted projects"
              variant="underlined"
              color="danger"
              className="mt-2 w-full"
              classNames={{
                tabList: "gap-6 border-b border-white/10 px-2",
                tab: "px-0 text-sm font-semibold uppercase tracking-[0.35em] text-blue-100 data-[selected=true]:text-white",
                panel: "pt-8",
              }}
            >
              {tabItems.map(({key, title, projects}) => (
                <Tab key={key} title={title}>
                  <div className="grid min-h-0 min-w-0 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                      <div
                        key={project.name}
                        className="flex w-full flex-col gap-4 rounded-3xl border border-white/20 bg-white/95 p-6 text-gray-900 transition-transform duration-200 hover:-translate-y-1 sm:p-8"
                      >
                        <div className="flex flex-col items-start gap-2 text-left">
                          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-blue-900 sm:text-xl">
                            {project.name}
                          </p>
                        </div>
                        <div className="space-y-4">
                          {project.visual?.type === "image" ? (
                            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
                              <img
                                src={project.visual.src}
                                alt={project.visual.alt}
                                className="h-auto w-full max-w-3xl object-contain"
                              />
                            </div>
                          ) : null}
                          {project.description ? (
                            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                              {project.description}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-600 sm:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.linkLabel}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-6xl min-h-0 min-w-0 flex-col gap-7 rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-900/70 via-blue-900/45 to-slate-900/35 p-6 text-white backdrop-blur-lg sm:p-12">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 sm:mx-0 sm:text-[0.7rem]">
                Contact
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">Let's Build Something Together</h2>
              <p className="text-sm leading-relaxed text-blue-100/80 sm:text-base">
                I partner with teams to launch resilient, user-focused products. Share a bit about your idea or role, and I'll get back to you within one business day.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/95 p-6 text-slate-900 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {[{label: "Email", value: "pranavsailor@gmail.com", href: "mailto:pranavsailor@gmail.com"},
                  {label: "Location", value: "New Jersey, United States"},
                  {label: "Availability", value: "Open to full-time & contract roles"}].map(({label, value, href}) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{label}</span>
                    {href ? (
                      <a href={href} className="text-base font-medium text-blue-700 hover:text-blue-500">
                        {value}
                      </a>
                    ) : (
                      <span className="text-base font-medium text-slate-800">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/15 bg-white/5 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-lg font-semibold text-white">Have a project in mind?</p>
                <p className="text-sm text-blue-100/80">I'm always open to collaborating on new initiatives and engineering challenges.</p>
              </div>
              <Button
                as="a"
                href="mailto:pranavsailor@gmail.com"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/20"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
