import React from 'react';
import {Card} from "@heroui/react";
import java from '../assets/java.svg'
import springboot from '../assets/spring-icon-svgrepo-com.svg'
import aws from '../assets/aws.svg'
import docker from '../assets/docker.svg'
import mysql from '../assets/mysqllogo.svg'
import gcp from '../assets/gcp_logo.svg'
import chrome from '../assets/chromelogo.svg'


const Projects = () => {
    return (
        <div className="flex flex-col md:h-auto w-full  h-auto items-center  md:w-4/5 ">
            <div className={" flex flex-col md:flex-row  md:w-full  p-4 content-center  justify-items-center"}>
                <div className={"flex content-center flex-col mb-10 md:flex-row-reverse items-center justify-between "}>
                    <p className={"text-white font-serif text-5xl text-center text-balance font-semibold md:w-1/2 my-14"}>
                        "I love turning ideas into scalable and efficient solutions!"
                    </p>

                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={aws} width={50}/>AWS</Card>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={docker} width={50}/>Docker</Card>
                        </div>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={" p-7 py-4 flex flex-col items-center"}><img src={java} width={50}/>Java</Card>
                            <Card className={" p-5 py-4 flex flex-col items-center"}><img src={springboot} width={50}/>Springboot</Card>
                            <Card className={" p-7 py-4 flex flex-col items-center"}><img src={mysql} width={50}/>MySQL</Card>
                        </div>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={chrome} width={50}/>Web</Card>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={gcp} width={50}/>Cloud</Card>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    );
};

export default Projects;