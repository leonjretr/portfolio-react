import {ReactNode} from "react";
import ScrollReveal from "../animation/ScrollReveal.tsx";

type CaseStudySectionProps = {
    title: string;
    children: ReactNode;
};

export const CaseStudySection = ({title, children}: CaseStudySectionProps) => (
    <ScrollReveal as="section" className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-10">
        <h2 className="font-terminalFont text-xs uppercase tracking-widest text-greenDark dark:text-greenNew md:pt-1">
            {title}
        </h2>
        <div className="font-poppinsFont text-sm leading-relaxed md:col-span-3 md:text-base">{children}</div>
    </ScrollReveal>
);
