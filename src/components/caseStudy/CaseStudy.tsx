import {Project} from "../../config/projectCards.ts";
import {CASE_STUDY_COPY} from "../../config/caseStudy.ts";
import {getProjectFileName} from "../../utils";
import {CaseStudyHeader} from "./CaseStudyHeader.tsx";
import {CaseStudyCover} from "./CaseStudyCover.tsx";
import {CaseStudySection} from "./CaseStudySection.tsx";
import {CaseStudyList} from "./CaseStudyList.tsx";
import {CaseStudyScreenshots} from "./CaseStudyScreenshots.tsx";
import {NextProject} from "./NextProject.tsx";

type CaseStudyProps = {
    project: Project;
};

export const CaseStudy = ({project}: CaseStudyProps) => {
    const filename = getProjectFileName(project.slug);
    const {challenges, results, screenshots} = project.caseStudy ?? {};

    return (
        <article className="mx-auto flex max-w-5xl flex-col gap-14 px-6 pb-20 pt-28 md:px-8 md:gap-20">
            <CaseStudyHeader project={project} filename={filename}/>
            <CaseStudyCover image={project.image} title={project.title} filename={filename}/>
            <CaseStudySection title={CASE_STUDY_COPY.OVERVIEW}>
                <p>{project.deepDescription}</p>
            </CaseStudySection>
            {challenges && (
                <CaseStudySection title={CASE_STUDY_COPY.CHALLENGES}>
                    <CaseStudyList items={challenges}/>
                </CaseStudySection>
            )}
            {results && (
                <CaseStudySection title={CASE_STUDY_COPY.RESULTS}>
                    <CaseStudyList items={results}/>
                </CaseStudySection>
            )}
            {screenshots && (
                <CaseStudySection title={CASE_STUDY_COPY.SCREENSHOTS}>
                    <CaseStudyScreenshots screenshots={screenshots}/>
                </CaseStudySection>
            )}
            <NextProject slug={project.slug}/>
        </article>
    );
};
