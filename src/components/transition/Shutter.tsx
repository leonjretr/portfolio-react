import {motion, useReducedMotion, Variants} from "framer-motion";
import {SHUTTER} from "../../config/animations.ts";

type BladeProps = {
    offset: string;
    className: string;
};

const createBladeVariants = (offset: string, isReduced: boolean): Variants => ({
    closed: {
        ...(isReduced ? {opacity: 1} : {y: 0}),
        transition: {duration: SHUTTER.CLOSE.DURATION, ease: SHUTTER.CLOSE.EASE},
    },
    open: {
        ...(isReduced ? {opacity: 0} : {y: offset}),
        transition: {duration: SHUTTER.OPEN.DURATION, delay: SHUTTER.OPEN.DELAY, ease: SHUTTER.OPEN.EASE},
    },
});

const ShutterBlade = ({offset, className}: BladeProps) => {
    const isReduced = useReducedMotion() ?? false;

    return (
        <motion.div
            variants={createBladeVariants(offset, isReduced)}
            initial="closed"
            animate="open"
            exit="closed"
            className={className}
        />
    );
};

export const Shutter = () => (
    <div className="pointer-events-none fixed inset-0 z-shutter flex flex-col">
        <ShutterBlade offset={SHUTTER.OFFSET.TOP} className="flex-1 border-b-2 border-greenNew bg-bgDarkColor"/>
        <ShutterBlade offset={SHUTTER.OFFSET.BOTTOM} className="flex-1 border-t-2 border-greenNew bg-bgDarkColor"/>
    </div>
);
