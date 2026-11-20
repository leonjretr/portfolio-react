import {Variants} from "framer-motion";

export const FILM_DEVELOP = {
    NEGATIVE: "invert(1) sepia(0.5) contrast(0.75) saturate(0.4)",
    POSITIVE: "invert(0) sepia(0) contrast(1) saturate(1)",
    DURATION: 1.5,
    EASE: [0.22, 1, 0.36, 1],
};

export const SHUTTER = {
    CLOSE: {DURATION: 0.45, EASE: [0.7, 0, 0.84, 0]},
    OPEN: {DURATION: 0.6, DELAY: 0.1, EASE: [0.16, 1, 0.3, 1]},
    OFFSET: {TOP: "-100%", BOTTOM: "100%"},
};

export const FILM_DEVELOP_VARIANTS: Variants = {
    hidden: {filter: FILM_DEVELOP.NEGATIVE},
    shown: {
        filter: FILM_DEVELOP.POSITIVE,
        transition: {duration: FILM_DEVELOP.DURATION, ease: FILM_DEVELOP.EASE},
    },
};
