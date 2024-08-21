import ProjectCard from "../cards/ProjectCard.tsx";

const ProjectSection = () => {
    const projImg1 = new URL("/imgs/portfolio1.png", import.meta.url).href;
    const projImg2 = new URL("/imgs/portfolio1.png", import.meta.url).href;
    return (
        <div className={"flex flex-col"}>
            <h1 className={"font-interFont text-5xl font-bold text-center mb-10"}>Projects</h1>
            <div className={"flex justify-center gap-x-2 md:gap-x-6"}>
                <ProjectCard title={"Portfolio website"}
                             description={"It is my personal landing page to showcase my skills and experience"}
                             deepDescription={"Personal landing page was my first pet project ever."}
                             internalTitle={"Personal landing page"}
                             image={projImg1}
                />
                <ProjectCard title={"TraffiX - web app"}
                             description={"A revolutionary web app that targets mobile devices and is for Telegram platform"}
                             deepDescription={"TraffiX is a clicker web game on Telegram platform" +
                                 " which became my second pet project, though at first it meant to be commercial." +
                                 " It was made by my friend and me, I was responsible for front-end part."}
                             internalTitle={"Revolutionary web app"}
                             image={projImg2}/>
            </div>
        </div>
    );
};

export default ProjectSection;