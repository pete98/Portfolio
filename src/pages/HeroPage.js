import React from 'react';
import {Button} from "@heroui/react";
import {ChevronDown} from "lucide-react";
import reactImg from "../assets/reactImg.svg"
import java from "../assets/java.svg"
import spring from "../assets/spring.svg"
import javascript from "../assets/javascript.svg"
import docker from "../assets/docker.svg"
import aws from "../assets/aws.svg"
import LI_Logo from "../assets/LI-Logo.png"


const HeroPage = () => {
    const li = LI_Logo;
    return (
        <div className="h-screen w-full  flex flex-col space-y-1 items-center justify-center bg-white px-6 relative">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
                Hi, I’m <span className="text-blue-600">Pranavkumar Sailor</span>
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl">
                I’m a Software Engineer and Fullstack Developer skilled in building efficient, scalable, modern
                applications using technologies like Java, JavaScript, Spring Boot, React, Docker, and AWS.
            </p>

            <div className={"flex flex-row space-x-5 content-center items-center justify-center "}>
                <img src={spring} alt="icon" className={"w-20 h-20"}/>
                <img src={java} alt="icon" className={"w-8 h-8 "}/>
                <img src={javascript} alt="icon" className={"w-8 h-8"}/>
                <img src={reactImg} alt="icon" className={"w-8 h-8"}/>
                <img src={docker} alt="icon" className={"w-8 h-8"}/>
                <img src={aws} alt="icon" className={"w-8 h-8"}/>
            </div>


            <div className="flex flex-wrap justify-center gap-4 mb-16">
                <Button
                    className="text-md font-bold bg-blue-600 text-white rounded-lg px-4 shadow-md shadow-gray-300 hover:bg-blue-600">
                    Download CV
                </Button>
                <Button className="bg-white p-2 mx-auto rounded-lg shadow-md shadow-gray-300 hover:bg-white">
                    <img src={LI_Logo} alt="l" className={"w-max-fit h-7 px-4 py-1 items-center mt-0.5"}/>
                </Button>
            </div>
            <div className="absolute bottom-6 flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
                <ChevronDown className="animate-bounce text-gray-500" size={32}/>
            </div>
        </div>


    );
};

export default HeroPage;
