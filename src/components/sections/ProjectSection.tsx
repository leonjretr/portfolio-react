import ProjectsCarousel from "../carousel/ProjectsCarousel.tsx";

const ProjectSection = () => {
    return (
        <div className={"flex flex-col dark:text-white"}>
            <h1 className={"font-interFont text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10"}>Projects</h1>
            <div className={"flex justify-center"}>
                <ProjectsCarousel/>
            </div>
        </div>
    );
};

export default ProjectSection;