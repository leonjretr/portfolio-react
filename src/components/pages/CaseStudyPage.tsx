import {Navigate, useParams} from "react-router";
import PageWrapper from "../wrappers/PageWrapper.tsx";
import {CaseStudy} from "../caseStudy";
import {findProject} from "../../utils";
import {ROUTES} from "../../config/routes.ts";

export const CaseStudyPage = () => {
    const {slug} = useParams();
    const project = findProject(slug);

    if (!project) {
        return <Navigate to={ROUTES.HOME} replace/>;
    }

    return (
        <div className="min-h-screen bg-creamColor text-textWarm dark:bg-bgDarkColor dark:text-white">
            <PageWrapper>
                <CaseStudy project={project}/>
            </PageWrapper>
        </div>
    );
};
