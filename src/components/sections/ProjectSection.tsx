import ProjectCard from "../cards/ProjectCard.tsx";
import ProjectsCarousel from "../carousel/ProjectsCarousel.tsx";
import {projectCards} from "../../config/projectCards.ts";

const ProjectSection = () => {
    return (
        <div className={"flex flex-col dark:text-white"}>
            <h1 className={"font-interFont text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10"}>Projects</h1>
            <div className={"hidden sm:flex justify-center gap-x-2 md:gap-x-6"}>
                {projectCards.map((projectCard, index) => (
                    <ProjectCard key={index}
                                 title={projectCard.title} description={projectCard.description}
                                 deepDescription={projectCard.deepDescription}
                                 internalTitle={projectCard.internalTitle}
                                 image={projectCard.image}/>
                ))}
            </div>
            <div className={"flex justify-center sm:hidden"}>
                <ProjectsCarousel/>
            </div>
        </div>
    );
};

export default ProjectSection;

// <ProjectCard title={"Portfolio website"}
//              description={"It is my personal landing page to showcase my skills and experience"}
//              deepDescription={"Personal landing page was my first pet project ever."}
//              internalTitle={"Personal landing page"}
//              image={projImg1}
// />
// <ProjectCard title={"TraffiX - web app"}
//              description={"A revolutionary web app that targets mobile devices and is for Telegram platform"}
//              deepDescription={"TraffiX is a clicker web game on Telegram platform" +
//                  " which became my second pet project, though at first it meant to be commercial." +
//                  " It was made by my friend and me, I was responsible for front-end part."}
//              internalTitle={"Revolutionary web app"}
//              image={projImg2}/>