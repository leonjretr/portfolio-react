import ProjectsCarousel from "../carousel/ProjectsCarousel.tsx";

const ProjectSection = () => {
    return (
        <div className={"flex flex-col dark:text-white"}>
            <h1 className={"font-poppinsFont text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-10"}>projects</h1>
            <div className={"flex justify-center"}>
                <ProjectsCarousel/>
            </div>
        </div>
    );
};

export default ProjectSection;