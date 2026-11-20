import {motion} from "framer-motion";
import {HiArrowDownTray} from "react-icons/hi2";
import {CV} from "../../config/cv.ts";

export const CvButton = () => (
    <motion.a
        href={CV.PATH}
        download
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="group inline-flex items-center gap-1.5 rounded-full border border-current px-3 py-1 transition-colors hover:border-greenNew hover:text-greenNew"
    >
        {CV.LABEL}
        <HiArrowDownTray className="text-sm transition-transform duration-300 group-hover:translate-y-0.5"/>
    </motion.a>
);
