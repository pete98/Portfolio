import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Tab, Tabs} from "@heroui/react";
import umsystem from '../assets/umsystem.png'

const Contact = () => {
    return (
        <div className={" mx-5 flex flex-col w-full md:w-4/5 h-3/4"}>
            <p className={"text-white font-semibold text-4xl"}>Projects</p>
            <Tabs aria-label="Options" className={'mt-5'}>
                <Tab key="photos" title="Full Stack">
                    <Card className={"md:w-fit h-fit p-2 "}>
                        <CardHeader className={"font-serif font-medium"}>User System Management</CardHeader>
                        <CardBody className={"rounded-lg shadow-large shadow-gray-500"}><img  src={umsystem} width={350}/></CardBody>
                        <CardFooter><a href={"https://um.pranavsailor.com"}> um.pranavsailor.com</a></CardFooter>
                    </Card>

                </Tab>
                <Tab key="ai" title="AI">
                    <Card className={"md:w-1/4 h-fit p-2 "}>
                        <CardHeader className={"font-serif font-medium"}>pyChatGPT</CardHeader>
                        <CardBody className={"rounded-lg shadow-large shadow-gray-500"}>
                            A Python-based implementation of ChatGPT, enabling users to interact with OpenAI's GPT models through voice and a streamlined command-line interface, offering customizable prompts and responses.
                        </CardBody>
                        <CardFooter><a href={"https://github.com/pete98/pyChatGPT.git"} className={"text-orange-800"}>Github Link</a></CardFooter>
                    </Card>
                </Tab>
                <Tab key="side" title="Side Projects">
                    <Card className={"md:w-1/4 h-fit p-2 "}>
                        <CardHeader className={"font-serif font-medium"}>Spotify Data Analysis</CardHeader>
                        <CardBody className={"rounded-lg shadow-large shadow-gray-500"}>A data analysis project leveraging Spotify's API to explore and visualize user listening habits, top tracks, artists, and playlists. Includes insights into musical trends, personalized statistics, and data-driven visualizations using Python and data analysis libraries like Pandas and Matplotlib.</CardBody>
                        <CardFooter><a href={"https://github.com/pete98/Spotify-Data-Analysis.git"} className={"text-blue-950"}>Github Link</a></CardFooter>
                    </Card>
                </Tab>
            </Tabs>



        </div>
    );
};

export default Contact;