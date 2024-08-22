import React, {useState} from 'react';
import ProjectCard from "../cards/ProjectCard.tsx";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import {AnimatePresence, motion} from 'framer-motion';

const MultiCardCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = useState(true);

    const projImg1 = new URL("/imgs/portfolio1.png", import.meta.url).href;
    const projImg2 = new URL("/imgs/portfolio1.png", import.meta.url).href;

    const projects = [
        <ProjectCard key={1}
                     title={"Portfolio website"}
                     description={"It is my personal landing page to showcase my skills and experience"}
                     deepDescription={"Personal landing page was my first pet project ever."}
                     internalTitle={"Personal landing page"}
                     image={projImg1}
        />,
        <ProjectCard key={2}
                     title={"TraffiX - web app"}
                     description={"A revolutionary web app that targets mobile devices and is for Telegram platform"}
                     deepDescription={"TraffiX is a clicker web game on Telegram platform" +
                         " which became my second pet project, though at first it meant to be commercial." +
                         " It was made by my friend and me, I was responsible for front-end part."}
                     internalTitle={"Revolutionary web app"}
                     image={projImg2}/>
    ];

    const handleNext = () => {
        setDirection(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
    if (currentIndex > projects.length + 1) {
        setCurrentIndex(0)
    }
    const variants = {
        enter: (direction: boolean) => ({
            x: !direction ? 100 : -100,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: boolean) => ({
            x: direction ? -100 : 100,
            opacity: 0,
        }),
    }
    return (
        <div className="flex justify-between items-center relative gap-x-10 mx-7">
            <motion.button
                whileTap={{scale: 0.85}}
                className="rounded-full"
                onClick={handlePrev}><IoArrowBackCircleOutline className={"text-3xl"}/></motion.button>
            <AnimatePresence mode="wait">
                <motion.div key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial={"enter"}
                            animate={"animate"}
                            exit={"exit"}
                            transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}>
                    {projects[currentIndex]}
                </motion.div>
            </AnimatePresence>
            <motion.button
                whileTap={{scale: 0.85}}
                className="rounded-full" onClick={handleNext}><IoArrowForwardCircleOutline className={"text-3xl"}/>
            </motion.button>
        </div>
    );
};

export default MultiCardCarousel;
