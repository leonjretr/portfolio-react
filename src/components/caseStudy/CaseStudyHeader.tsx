import {Project} from "../../config/projectCards.ts";
import {BackToProjects} from "./BackToProjects.tsx";
import {CaseStudyMeta} from "./CaseStudyMeta.tsx";

type CaseStudyHeaderProps = {
    project: Project;
    filename: string;
};

export const CaseStudyHeader = ({project, filename}: CaseStudyHeaderProps) => (
    <header className="flex flex-col gap-8">
        <BackToProjects/>
        <div className="flex flex-col gap-3">
            <span className="font-terminalFont text-xs uppercase tracking-widest text-greenDark dark:text-greenNew">
                {filename}
            </span>
            <h1 className="font-poppinsFont text-4xl font-semibold md:text-6xl">{project.title}</h1>
            {project.internalTitle && (
                <p className="font-niceFont text-lg italic text-textWarm/80 dark:text-white/80 md:text-2xl">
                    {project.internalTitle}
                </p>
            )}
        </div>
        <CaseStudyMeta caseStudy={project.caseStudy} link={project.link}/>
    </header>
);
