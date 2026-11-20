import {Link} from "react-router-dom";
import {HiArrowLongRight} from "react-icons/hi2";
import {getNextProject, getProjectPath} from "../../utils";
import {CASE_STUDY_COPY} from "../../config/caseStudy.ts";

type NextProjectProps = {
    slug: string;
};

export const NextProject = ({slug}: NextProjectProps) => {
    const next = getNextProject(slug);

    return (
        <Link
            to={getProjectPath(next.slug)}
            className="group flex items-center justify-between gap-6 border-t border-textWarm/15 pt-8 dark:border-white/15"
        >
            <div className="flex flex-col gap-1">
                <span className="font-terminalFont text-xs uppercase tracking-widest opacity-60">
                    {CASE_STUDY_COPY.NEXT}
                </span>
                <span className="font-poppinsFont text-2xl font-semibold transition-colors group-hover:text-greenDark dark:group-hover:text-greenNew md:text-4xl">
                    {next.title}
                </span>
            </div>
            <HiArrowLongRight className="shrink-0 text-3xl transition-transform duration-300 group-hover:translate-x-2"/>
        </Link>
    );
};
