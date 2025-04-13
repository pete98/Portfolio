import React from "react";
import { Button, Image } from "@heroui/react";
import reactImg from "../assets/reactImg.svg";
import java from "../assets/java.svg";
import spring from "../assets/spring.svg";
import javascript from "../assets/javascript.svg";
import docker from "../assets/docker.svg";
import aws from "../assets/aws.svg";
import LI_Logo from "../assets/LI-Logo.png";
import MY_PHOTO from "../assets/MY_PHOTO.JPEG";
import Pranav_Resume from '../assets/Pranav_SWE.pdf'

const HeroPage = () => {
    const linkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/pranavsailor'; // Replace with your desired URL
    };

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = Pranav_Resume; // Path to the file imported
        link.download = 'PRANAV_RESUME.pdf'; // File name for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="flex flex-col xl:w-4/5 mx-5 h-3/4 md:flex-row  items-center md:space-x-8  justify-center bg-white rounded-lg p-6 md:p-12 max-w-7xl">
            {/* Text Content */}
            <div className="flex flex-col items-center space-y-1 md:m-5  md:items-start lg:items-center lg:text-center text-center md:text-left  space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Hi, I’m <span className="text-blue-600 font-bold">Pranavkumar Sailor</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                    I’m a Software Engineer and Fullstack Developer skilled in building efficient, scalable, modern applications
                    using technologies like Java, JavaScript, Spring Boot, React, Docker, and AWS.
                </p>

                {/* Icons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <img src={spring} alt="Spring" className="w-12 h-12 md:w-20 md:h-20" />
                    <img src={java} alt="Java" className="w-8 h-8" />
                    <img src={javascript} alt="JavaScript" className="w-8 h-8" />
                    <img src={reactImg} alt="React" className="w-8 h-8" />
                    <img src={docker} alt="Docker" className="w-8 h-8" />
                    <img src={aws} alt="AWS" className="w-8 h-8" />
                </div>

                {/* Buttons */}
                <div className="flex items-center1 md:justify-start gap-4">
                    <Button className="text-md font-bold bg-blue-600   text-white rounded-lg px-4 shadow-md shadow-gray-300 hover:bg-blue-700" onPress={() => downloadFile()}>
                        Download CV
                    </Button>
                    <Button className="bg-white rounded-lg shadow-md shadow-gray-200 hover:bg-gray-100" onPress={()=> linkedin()}>
                        <img src={LI_Logo}  onContextMenu={(e) => e.preventDefault()} alt="LinkedIn" className="h-6 px-3 py-0.5" />
                    </Button>
                </div>

                <p className="text-medium text-gray-600">(Available for Hire)</p>
            </div>

            {/* Image */}
            <div className="mt-8 md:mt-0">
                <Image src={MY_PHOTO} width={300} className="hidden sm:block rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default HeroPage;
