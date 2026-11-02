import React, {useEffect, useRef, useState} from 'react';
import ProjectCard from "../cards/ProjectCard.tsx";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import {motion} from 'framer-motion';
import {projectCards} from "../../config/projectCards.ts";

const GAP = 40;

const ProjectsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

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

    const handleNext = () => setCurrentIndex((i) => Math.min(i + 1, projectCards.length - 1));
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
                    {projectCards.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            ref={index === 0 ? cardRef : undefined}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0.35,
                                scale: index === currentIndex ? 1 : 0.88,
                            }}
                            transition={{duration: 0.4}}
                            className="shrink-0">
                            <ProjectCard {...project}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.85}}
                disabled={currentIndex === projectCards.length - 1}
                className="shrink-0 rounded-full transition-opacity disabled:opacity-30"
                onClick={handleNext}>
                <IoArrowForwardCircleOutline className={"text-3xl mob2:text-4xl mob3:text-5xl"}/>
            </motion.button>
        </div>
    );
};

export default ProjectsCarousel;
