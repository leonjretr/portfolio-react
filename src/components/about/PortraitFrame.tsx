import {motion, useReducedMotion} from "framer-motion";


const PortraitFrame = () => {
    const reduce = useReducedMotion();
    const myPhoto = new URL("/imgs/me22.JPG", import.meta.url).href;

    return (
        <motion.figure
            initial={reduce ? {opacity: 0} : {opacity: 0, rotate: -6, y: 24}}
            whileInView={reduce ? {opacity: 1} : {opacity: 1, rotate: -3, y: 0}}
            whileHover={reduce ? undefined : {rotate: 0, scale: 1.02}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
            className="group w-max select-none bg-[#161311] p-2.5 pb-3 shadow-[10px_10px_0_0_rgba(0,0,0,0.35)]"
        >
            <div className="relative overflow-hidden">
                <motion.img
                    src={myPhoto}
                    alt="Leonid — self portrait on 35mm"
                    initial={reduce ? false : {filter: "grayscale(1)"}}
                    whileInView={reduce ? undefined : {filter: "grayscale(0)"}}
                    viewport={{once: true, amount: 0.4}}
                    transition={{duration: 1.1, ease: "easeOut"}}
                    className="h-56 w-52 object-cover mob3:h-64 mob3:w-60"
                />
                <span className="absolute right-2 top-2 font-terminalFont text-[9px] tracking-[2px] text-amateurColor mix-blend-difference">
                    35mm · self
                </span>
            </div>
            <figcaption className="mt-1.5 flex items-baseline justify-between gap-2 px-0.5">
                <span className="font-handFont text-2xl leading-none text-creamColor">that&apos;s me :)</span>
                <span className="font-terminalFont text-[9px] tracking-[2px] text-creamColor/60">travelling</span>
            </figcaption>
        </motion.figure>
    );
};

export default PortraitFrame;
