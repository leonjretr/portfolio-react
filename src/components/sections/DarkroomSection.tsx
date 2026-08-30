import {Link} from "react-router-dom";
import {HiArrowLongRight} from "react-icons/hi2";
import ScrollReveal from "../animation/ScrollReveal.tsx";
import ContactSheetStrip from "../darkroom/ContactSheetStrip.tsx";

const DarkroomSection = () => {
    return (
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 md:px-8 md:py-10 dark:text-white">
            <div className="flex items-end justify-between gap-4">
                <span
                    className="font-terminalFont text-xs uppercase tracking-[0.3em] text-textWarm/70 dark:text-white/70">
                    the darkroom
                </span>
                <Link to="/blog"
                      className="group inline-flex items-center gap-2 font-terminalFont text-xs uppercase tracking-[0.2em] text-greenDark transition-colors hover:text-greenNew dark:text-greenNew"
                >
                    view the full roll
                    <HiArrowLongRight
                        className="text-base transition-transform duration-300 group-hover:translate-x-1.5"/>
                </Link>
            </div>

            <ScrollReveal variant="up" amount={0.25}>
                <ContactSheetStrip/>
            </ScrollReveal>
        </div>
    );
};

export default DarkroomSection;
