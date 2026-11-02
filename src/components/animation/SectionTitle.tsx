import {ReactNode} from "react";
import {motion, useReducedMotion} from "framer-motion";

interface SectionTitleProps {
    children: ReactNode;
    kicker?: string;
    font?: string;
    className?: string;
    align?: "center" | "left";
}


const SectionTitle = ({
                          children,
                          kicker,
                          font = "font-poppinsFont",
                          className = "",
                          align = "center",
                      }: SectionTitleProps) => {
    const reduce = useReducedMotion();
    const alignItems = align === "center" ? "items-center text-center" : "items-start text-left";

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.6}}
            className={`flex flex-col ${alignItems} ${className}`}
        >
            {kicker && (
                <motion.span
                    variants={{
                        hidden: reduce ? {opacity: 0} : {opacity: 0, y: 10},
                        visible: {opacity: 1, y: 0},
                    }}
                    transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                    className="font-terminalFont text-xs uppercase tracking-[0.3em] text-greenDark dark:text-greenNew"
                >
                    {kicker}
                </motion.span>
            )}


            <div className="overflow-hidden pt-1 pb-2">
                <motion.h1
                    variants={{
                        hidden: reduce ? {opacity: 0} : {opacity: 1, clipPath: "inset(50% 0 50% 0)"},
                        visible: reduce ? {opacity: 1} : {opacity: 1, clipPath: "inset(0% 0 0% 0)"},
                    }}
                    transition={{duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1]}}
                    style={{willChange: "clip-path"}}
                    className={`${font} text-3xl md:text-5xl font-semibold p-2`}
                >
                    {children}
                </motion.h1>
            </div>

            <motion.div
                variants={{
                    hidden: reduce ? {opacity: 0} : {clipPath: "inset(0 100% 0 0)"},
                    visible: reduce ? {opacity: 1} : {clipPath: "inset(0 0% 0 0)"},
                }}
                transition={{duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1]}}
                className="h-[2px] w-[72px] bg-greenNew"
            />
        </motion.div>
    );
};

export default SectionTitle;
