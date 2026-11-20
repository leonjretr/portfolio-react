import {HiArrowLongLeft} from "react-icons/hi2";
import {useSectionNavigate} from "../scroll";
import {SECTIONS} from "../../config/routes.ts";
import {CASE_STUDY_COPY} from "../../config/caseStudy.ts";

export const BackToProjects = () => {
    const navigateToSection = useSectionNavigate();
    const handleClick = () => navigateToSection(SECTIONS.PROJECTS);

    return (
        <button
            type="button"
            onClick={handleClick}
            className="group inline-flex items-center gap-2 self-start font-terminalFont text-xs uppercase tracking-widest text-greenDark transition-colors hover:text-greenNew dark:text-greenNew"
        >
            <HiArrowLongLeft className="text-base transition-transform duration-300 group-hover:-translate-x-1.5"/>
            {CASE_STUDY_COPY.BACK}
        </button>
    );
};
