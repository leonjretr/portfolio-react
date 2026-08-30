import ProjectsCarousel from "../carousel/ProjectsCarousel.tsx";
import SectionTitle from "../animation/SectionTitle.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const ProjectSection = () => {
    return (
        <div className={"flex flex-col gap-6 md:gap-10 dark:text-white"}>
            <SectionTitle kicker="selected work">projects</SectionTitle>
            <ScrollReveal variant="up" duration={0.8} delay={0.1} amount={0.2} className={"flex justify-center"}>
                <ProjectsCarousel/>
            </ScrollReveal>
        </div>
    );
};

export default ProjectSection;
