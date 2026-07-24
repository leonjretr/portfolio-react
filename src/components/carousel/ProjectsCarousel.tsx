import React, {useEffect, useRef, useState} from 'react';
import ProjectCard from "../cards/ProjectCard.tsx";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import {motion} from 'framer-motion';

const GAP = 40;

const ProjectsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const projImg1 = new URL("/imgs/portfolio1.png", import.meta.url).href;
    const projImg2 = new URL("/imgs/traffix2.png", import.meta.url).href;
    const projImg3 = new URL("/imgs/inktells.png", import.meta.url).href;

    const projects = [
        <ProjectCard key={1}
                     title={"Portfolio website"}
                     description={"My personal landing page to showcase my skills and experience"}
                     deepDescription={"Personal landing page was my first pet project ever!😱 I tried to incorporate " +
                         "maximum amount of features that I'd learnt in order to showcase my skills and experience🔥🤓 " +
                         "Popups, animations, terminal(which I find quaint and extraordinary) and much-much more!"}
                     internalTitle={"Personal landing page"}
                     image={projImg1}
        />,
        <ProjectCard key={2}
                     title={"TraffiX - web app"}
                     description={"A modern web app that targets Telegram Mini Apps mobile platform"}
                     deepDescription={"TraffiX is a clicker web game on Telegram platform" +
                         " which became my second pet project, though at first it meant to be commercial." +
                         " It was made by my friend and me, I was responsible for front-end part."}
                     internalTitle={"Revolutionary web app"}
                     image={projImg2}
        />,
        <ProjectCard key={3}
                     title={"Inktells"}
                     internalTitle={"Inktells - place that connects"}
                     description={"Inktells - a special place for readers to connect and share their hobby"}
                     deepDescription={"Inktells is website that allows readers all around the world to " +
                         "share their passion for books and stories. It enables any person to register and " +
                         "publish their own story on the website and spread the useful habit of reading."}
                     image={projImg3}
        />,
    ];

    useEffect(() => {
        const measure = () => {
            if (!containerRef.current || !cardRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            const cardWidth = cardRef.current.offsetWidth;
            setStep(cardWidth + GAP);
            setOffset(containerWidth / 2 - cardWidth / 2);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const handleNext = () => setCurrentIndex((i) => Math.min(i + 1, projects.length - 1));
    const handlePrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));

    return (
        <div className="flex items-center justify-center gap-x-3 mob2:gap-x-8">
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.85}}
                disabled={currentIndex === 0}
                className="shrink-0 rounded-full transition-opacity disabled:opacity-30"
                onClick={handlePrev}>
                <IoArrowBackCircleOutline className={"text-3xl mob2:text-4xl mob3:text-5xl"}/>
            </motion.button>

            <div ref={containerRef}
                 className="relative w-full max-w-[260px] overflow-hidden mob3:max-w-[320px] md:max-w-[480px] lg:max-w-[560px]">
                <motion.div
                    className="flex items-center"
                    style={{gap: GAP}}
                    animate={{x: offset - currentIndex * step}}
                    transition={{type: "spring", stiffness: 300, damping: 32}}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.key}
                            ref={index === 0 ? cardRef : undefined}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0.35,
                                scale: index === currentIndex ? 1 : 0.88,
                            }}
                            transition={{duration: 0.4}}
                            className="shrink-0">
                            {project}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.85}}
                disabled={currentIndex === projects.length - 1}
                className="shrink-0 rounded-full transition-opacity disabled:opacity-30"
                onClick={handleNext}>
                <IoArrowForwardCircleOutline className={"text-3xl mob2:text-4xl mob3:text-5xl"}/>
            </motion.button>
        </div>
    );
};

export default ProjectsCarousel;
