import {motion, useReducedMotion} from "framer-motion";
import {TerminalBar} from "../cards/TerminalBar.tsx";
import {FILM_DEVELOP_VARIANTS} from "../../config/animations.ts";

type CaseStudyCoverProps = {
    image: string;
    title: string;
    filename: string;
};

export const CaseStudyCover = ({image, title, filename}: CaseStudyCoverProps) => {
    const isReduced = useReducedMotion();

    return (
        <figure className="overflow-hidden rounded-lg border border-textWarm/10 shadow-xl dark:border-white/10">
            <TerminalBar filename={filename}/>
            <motion.img
                src={image}
                alt={title}
                variants={FILM_DEVELOP_VARIANTS}
                initial={isReduced ? false : "hidden"}
                animate="shown"
                className="w-full bg-bgDarkColor object-cover"
            />
        </figure>
    );
};
