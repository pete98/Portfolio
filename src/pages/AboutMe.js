import React from 'react';
import {Card} from "@heroui/react";
import javascript from '../assets/javascript.svg'
import reactImg from '../assets/reactImg.svg'
import angular_logo from '../assets/angularlogo.svg'
import csslogo from '../assets/csslogo.svg'
import htmllogo from '../assets/htmllogo.svg'
import nodejslogo from '../assets/nodejslogo.svg'
import vite_logo from '../assets/vite_logo.svg'



const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row  md:w-4/5  justify-evenly ">
            <div className={"flex flex-col md:flex-row  md:w-full mr-8  p-4 content-center justify-evenly"}>
                <div className={"flex content-center md:justify-between mb-9 space-x-8 flex-col  md:flex-row items-center"}>
                    <p className={"text-white font-serif  md:w-1/2 text-center text-balance text-5xl font-semibold my-14"}>
                        "I’m passionate about creating fullstack web applications."
                    </p>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={angular_logo} width={50}/>Angular</Card>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={vite_logo} width={50}/>Vite</Card>
                        </div>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={" p-6 py-4   flex flex-col items-center"}><img src={javascript} width={50}/>JavaScript</Card>
                            <Card className={" p-7 py-4 flex flex-col items-center"}><img src={reactImg} width={50}/>ReactJS</Card>
                            <Card className={" p-7 py-4 flex flex-col items-center"}><img src={nodejslogo} width={50}/>NodeJS</Card>
                        </div>
                        <div className={"flex flex-row  items-center w-fit justify-evenly space-x-3 mt-5"}>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={htmllogo} width={50}/>Html</Card>
                            <Card className={"p-7 py-4 w-fit h-fit flex flex-col items-center"}><img src={csslogo} width={50}/>Css</Card>
                        </div>

                    </div>

                </div>
            </div>



                {/*I love turning ideas into scalable and efficient solutions! With a strong foundation in React JS, Spring Boot, and Docker, I’ve built cross-platform applications and deployed full-stack solutions. I’m fascinated by AI-powered systems and am currently exploring web-based AI agent development.*/}


            {/*    <p className={"text-center text-large md:text-2xl font-bold"}>About Me</p>*/}
            {/*    <Divider className={"m-2"} />*/}
            {/*        <p className={"text-sm md:text-medium"}>Hi, I’m Pranav, a passionate developer specializing in full-stack development. I love turning ideas into scalable and efficient solutions!*/}
            {/*            With a strong foundation in React JS, Spring Boot, and Docker, I’ve built cross-platform applications and deployed full-stack solutions. I’m fascinated by AI-powered systems and am currently exploring web-based AI agent development.*/}
            {/*        </p>*/}
            {/*    <Divider className={"m-3"} />*/}
            {/*    <h1 className={" flex justify-center md:justify-start font-semibold text-large md:text-2xl"}>Tools and frameworks</h1>*/}
            {/*    <p className={"text-sm md:text-medium mt-2"}>The tools and frameworks I leverage to build innovative projects and applications.</p>*/}
            {/*    <Tabs aria-label="Options" className={"mt-3"}>*/}
            {/*        <Tab key="frontend" title="Frontend">*/}
            {/*            <Card>*/}
            {/*                <CardBody className={"flex flex-row items-center space-x-3"}>*/}


            {/*                </CardBody>*/}
            {/*            </Card>*/}
            {/*        </Tab>*/}
            {/*        <Tab key="backend" title="Backend">*/}
            {/*            <Card>*/}
            {/*                <CardBody>*/}
            {/*                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex*/}
            {/*                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
            {/*                    cillum dolore eu fugiat nulla pariatur.*/}
            {/*                </CardBody>*/}
            {/*            </Card>*/}
            {/*        </Tab>*/}
            {/*        <Tab key="cloud" title="Cloud">*/}
            {/*            <Card>*/}
            {/*                <CardBody>*/}
            {/*                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt*/}
            {/*                    mollit anim id est laborum.*/}
            {/*                </CardBody>*/}
            {/*            </Card>*/}
            {/*        </Tab>*/}
            {/*        <Tab key="database" title="Database">*/}
            {/*            <Card>*/}
            {/*                <CardBody>*/}
            {/*                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt*/}
            {/*                    mollit anim id est laborum.*/}
            {/*                </CardBody>*/}
            {/*            </Card>*/}
            {/*        </Tab>*/}
            {/*    </Tabs>*/}


                {/*<div className={"flex flex-col md:flex-row md:justify-start md:space-x-5"}>*/}
                {/*    <div>*/}
                {/*        <h1 className={"font-semibold text-medium md:text-xl mt-3"}>Frontend</h1>*/}
                {/*        <Card className={"text-small md:text-medium h-fit w-fit p-2"}>JavaScript</Card>*/}
                {/*        <p className={"text-small md:text-medium"}>React JS</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Node JS</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Axios (Handle API requests & Jwt tokens)</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Tailwind CSS</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h1 className={"font-semibold text-medium md:text-xl mt-3"}>Backend</h1>*/}
                {/*        <p className={"text-small md:text-medium"}>Java</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Spring</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Springboot</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Spring Security</p>*/}
                {/*        <p className={"text-small md:text-medium"}>JUnit</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h1 className={"font-semibold text-medium md:text-xl mt-3"}>Cloud</h1>*/}
                {/*        <p className={"text-small md:text-medium"}>AWS</p>*/}
                {/*        <p className={"text-small md:text-medium"}>AWS EC2</p>*/}
                {/*        <p className={"text-small md:text-medium"}>DOCKER</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Restful API's</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h1 className={"font-semibold text-medium md:text-xl mt-3"}>Database</h1>*/}
                {/*        <p className={"text-small md:text-medium"}>MYSQL</p>*/}
                {/*        <p className={"text-small md:text-medium"}>Oracle</p>*/}
                {/*        <p className={"text-small md:text-medium"}>AWD RDS</p>*/}
                {/*    </div>*/}

                {/*</div>*/}


























            {/*<Card className={"flex space-y-1 h-30 lg:p-5 sm:p-12 lg:w-3/4 xl:w-4/5 sm:w-1/4  mt-28 "}>*/}
            {/*    <h1 className={"font-semibold text-2xl"}>A little something about me</h1>*/}
            {/*    <p>Hi, I’m Pranav, a passionate developer specializing in full-stack development. I love turning ideas into scalable and efficient solutions!*/}
            {/*        With a strong foundation in React, Spring Boot, and Docker, I’ve built cross-platform applications and deployed full-stack solutions. I’m fascinated by AI-powered systems and am currently exploring web-based AI agent development.*/}
            {/*    </p>*/}
            {/*</Card>*/}

            {/*<div className="flex  flex-col space-y-1 justify-start mt-10 ">*/}

            {/*    <div className={"flex  justify-center space-x-3 lg:flex-row sm:flex-col "}>*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start  w-fit">*/}
            {/*            <p className={"flex justify-center text-white underline-offset-4 "}>Programming Languages</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5 text-center"}>*/}
            {/*                <p>Java</p>*/}
            {/*            </Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>JavaScript</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>PL/SQL</Card>*/}
            {/*        </div>*/}
            {/*        <Divider orientation={"vertical"} className={"mt-2.5 bg-white hidden sm:block md:block"} />*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start  w-fit">*/}
            {/*            <p className={"flex justify-center text-white"}>Frameworks</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5"}>Springboot</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>React JS</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Node JS</Card>*/}
            {/*        </div>*/}
            {/*        <Divider orientation={"vertical"} className={"mt-2.5 bg-white hidden sm:block md:block"} />*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start  w-fit">*/}
            {/*            <p className={"flex justify-center text-white"}>Database</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5 text-center"}>MYSQL</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>AWS RDS</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>ORM</Card>*/}
            {/*        </div>*/}
            {/*        <Divider orientation={"vertical"} className={"mt-2.5 bg-white hidden sm:block md:block"} />*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start  w-fit">*/}
            {/*            <p className={"flex justify-center text-white"}>Cloud Technologies</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5"}>AWS (EC2, RDS database)</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Docker</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Restful Api's</Card>*/}
            {/*        </div>*/}
            {/*        <Divider orientation={"vertical"} className={"mt-2.5 bg-white hidden sm:block md:block"} />*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start w-fit">*/}
            {/*            <p className={"flex justify-center text-white"}>Version Control</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5"}>Git (Github)</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Jenkins (CI/CD)</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Jira</Card>*/}
            {/*        </div>*/}
            {/*        <Divider orientation={"vertical"} className={"mt-2.5 bg-white hidden sm:block md:block"} />*/}
            {/*        <div className="flex flex-col space-y-3 pt-3 justify-start  w-fit">*/}
            {/*            <p className={"flex justify-center text-white"}>Additional</p>*/}
            {/*            <Divider className={"bg-white"}/>*/}
            {/*            <Card className={"flex p-5"}>Agile Methodology</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>J2EE Development</Card>*/}
            {/*            <Card className={"flex p-5 text-center"}>Tailwind CSS</Card>*/}
            {/*        </div>*/}

            {/*    </div>*/}



            {/*</div>*/}




        </div>
    );
};

export default AboutMe;
