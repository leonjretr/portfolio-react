import {ReactNode} from "react";
import {CaseStudy, ProjectLink} from "../../config/projectCards.ts";
import {CASE_STUDY_COPY} from "../../config/caseStudy.ts";

type CaseStudyMetaProps = {
    caseStudy?: CaseStudy;
    link: ProjectLink;
};

type MetaItemProps = {
    label: string;
    children: ReactNode;
};

const MetaItem = ({label, children}: MetaItemProps) => (
    <div className="flex flex-col gap-2">
        <dt className="font-terminalFont text-xs uppercase tracking-widest opacity-60">{label}</dt>
        <dd className="font-poppinsFont text-sm md:text-base">{children}</dd>
    </div>
);

export const CaseStudyMeta = ({caseStudy, link}: CaseStudyMetaProps) => (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {caseStudy?.role && <MetaItem label={CASE_STUDY_COPY.ROLE}>{caseStudy.role}</MetaItem>}
            {caseStudy?.year && <MetaItem label={CASE_STUDY_COPY.YEAR}>{caseStudy.year}</MetaItem>}
            {caseStudy?.stack && (
                <MetaItem label={CASE_STUDY_COPY.STACK}>
                    <ul className="flex flex-wrap gap-2">
                        {caseStudy.stack.map((tech) => (
                            <li key={tech} className="rounded-full border border-current px-3 py-0.5 font-terminalFont text-xs">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </MetaItem>
            )}
        </dl>
        <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-greenDark px-5 py-2 font-terminalFont text-sm text-creamColor transition-colors hover:bg-greenNew dark:bg-greenNew dark:text-bgDarkColor dark:hover:bg-creamColor"
        >
            <link.icon/>
            {link.label}
        </a>
    </div>
);
