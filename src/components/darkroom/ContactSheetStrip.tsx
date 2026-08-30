import {motion, useReducedMotion, Variants} from "framer-motion";

const frames = [
    {img: "/gallery/img057.jpg", label: "into the unknown"},
    {img: "/gallery/img103.jpg", label: "cigarette"},
    {img: "/gallery/img113.jpg", label: "opera"},
    {img: "/gallery/img121.jpg", label: "prague"},
    {img: "/gallery/img244.jpg", label: "salvation"},
    {img: "/gallery/img245.jpg", label: "heritage"},
];

// a row of film holes along the strip.
const SprocketRail = () => (
    <div className="flex shrink-0 items-center justify-center gap-[10px] px-3 py-2">
        {Array.from({length: 24}, (_, k) => (
            <div key={k} className="h-2 w-[11px] shrink-0 rounded-[2px] bg-textWarm/25 dark:bg-white/25"/>
        ))}
    </div>
);

const strip: Variants = {
    hidden: {},
    shown: {transition: {staggerChildren: 0.16}},
};

// each frame develops from a negative into the positive
const frame: Variants = {
    hidden: {filter: "invert(1) sepia(0.5) contrast(0.75) saturate(0.4)"},
    shown: {
        filter: "invert(0) sepia(0) contrast(1) saturate(1)",
        transition: {duration: 1.5, ease: [0.22, 1, 0.36, 1]},
    },
};

const ContactSheetStrip = () => {
    const reduce = useReducedMotion();

    return (
        <figure className="flex flex-col gap-3">
            <motion.div
                variants={reduce ? undefined : strip}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "shown"}
                viewport={{once: true, amount: 0.3}}
                className="flex flex-col"
            >
                <SprocketRail/>

                <div className="flex gap-2 overflow-x-auto px-3">
                    {frames.map((f, i) => (
                        <div key={f.img} className="relative min-w-[92px] flex-1">
                            <motion.img
                                variants={reduce ? undefined : frame}
                                src={f.img}
                                alt={`Contact frame — ${f.label}`}
                                loading="lazy"
                                className="h-24 w-full object-cover mob3:h-32 md:h-[148px]"
                            />
                            <span
                                className="absolute bottom-1 left-1.5 font-terminalFont text-xxs uppercase tracking-[0.18em] text-amateurColor [text-shadow:0_1px_3px_rgb(0_0_0/0.7)]">
                                {String(i + 1).padStart(2, "0")} {f.label}
                            </span>
                        </div>
                    ))}
                </div>

                <SprocketRail/>
            </motion.div>

            <figcaption
                className="text-center font-terminalFont text-xxs uppercase tracking-[0.3em] text-textWarm/45 dark:text-white/45">
                35mm · 2026
            </figcaption>
        </figure>
    );
};

export default ContactSheetStrip;
