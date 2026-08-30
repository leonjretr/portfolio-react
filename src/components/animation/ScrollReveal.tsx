import {CSSProperties, ReactNode} from "react";
import {motion, TargetAndTransition, useReducedMotion} from "framer-motion";

export type RevealVariant = "up" | "left" | "right" | "wipe" | "shutter" | "scale";

const tags = {
    div: motion.div,
    section: motion.section,
    span: motion.span,
    figure: motion.figure,
    li: motion.li,
    ul: motion.ul,
};

interface ScrollRevealProps {
    children: ReactNode;

    variant?: RevealVariant;
    delay?: number;
    duration?: number;
    // how much of the element should be visible
    amount?: number;
    once?: boolean;
    as?: keyof typeof tags;
    className?: string;
    style?: CSSProperties;
}

const hidden = {
    up: {opacity: 0, y: 28},
    left: {opacity: 0, x: -48},
    right: {opacity: 0, x: 48},
    wipe: {opacity: 1, clipPath: "inset(0 100% 0 0)"},
    shutter: {opacity: 1, clipPath: "inset(50% 0 50% 0)"},
    scale: {opacity: 0, scale: 0.96},
} satisfies Record<RevealVariant, TargetAndTransition>;

const shown = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
} satisfies TargetAndTransition;

const ScrollReveal = ({
                          children,
                          variant = "up",
                          delay = 0,
                          duration = 0.6,
                          amount = 0.3,
                          once = true,
                          as = "div",
                          className,
                          style,
                      }: ScrollRevealProps) => {
    const reduce = useReducedMotion();
    const MotionTag = tags[as] as typeof motion.div;

    if (reduce) {
        return (
            <MotionTag
                className={className}
                style={style}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once, amount}}
                transition={{duration: 0.4, delay}}
            >
                {children}
            </MotionTag>
        );
    }

    const needsClip = variant === "wipe" || variant === "shutter";

    return (
        <MotionTag
            className={className}
            style={needsClip ? {willChange: "clip-path", ...style} : style}
            initial={hidden[variant]}
            whileInView={shown}
            viewport={{once, amount}}
            transition={{duration, delay, ease: [0.22, 1, 0.36, 1]}}
        >
            {children}
        </MotionTag>
    );
};

export default ScrollReveal;
