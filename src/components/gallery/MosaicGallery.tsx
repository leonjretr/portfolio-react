import {useEffect, useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {IoIosArrowDown} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {IoChevronBack, IoChevronForward} from "react-icons/io5";

interface GalleryImage {
    img: string;
    text: string;
    width: number;
    height: number;
    tag: string;
    span: { c: number; r: number };
}

const images: GalleryImage[] = [
    {img: "/gallery/img002.jpg", text: "", width: 1600, height: 2442, tag: "FRAME 01", span: {c: 2, r: 2}},
    {img: "/gallery/img013.jpg", text: "", width: 1600, height: 2441, tag: "FRAME 02", span: {c: 1, r: 1}},
    {img: "/gallery/img014.jpg", text: "", width: 1600, height: 2459, tag: "FRAME 03", span: {c: 1, r: 2}},
    {img: "/gallery/img015.jpg", text: "", width: 1600, height: 2453, tag: "FRAME 04", span: {c: 1, r: 1}},
    {img: "/gallery/img029.jpg", text: "", width: 1600, height: 2444, tag: "FRAME 05", span: {c: 1, r: 1}},
    {img: "/gallery/img048.jpg", text: "", width: 1600, height: 2439, tag: "FRAME 06", span: {c: 1, r: 1}},
    {img: "/gallery/img057.jpg", text: "", width: 1600, height: 1130, tag: "FRAME 07", span: {c: 2, r: 1}},
    {img: "/gallery/img072.jpg", text: "", width: 1600, height: 1012, tag: "FRAME 08", span: {c: 1, r: 1}},
    {img: "/gallery/img074.jpg", text: "", width: 1600, height: 2457, tag: "FRAME 09", span: {c: 1, r: 2}},
    {img: "/gallery/img085.jpg", text: "", width: 1600, height: 2533, tag: "FRAME 10", span: {c: 1, r: 2}},
    {img: "/gallery/img087.jpg", text: "", width: 1600, height: 2533, tag: "FRAME 11", span: {c: 1, r: 1}},
    {img: "/gallery/img103.jpg", text: "", width: 1600, height: 1024, tag: "FRAME 12", span: {c: 2, r: 1}},
    {img: "/gallery/img113.jpg", text: "", width: 1600, height: 2295, tag: "FRAME 13", span: {c: 1, r: 1}},
    {img: "/gallery/img121.jpg", text: "", width: 1600, height: 1008, tag: "FRAME 14", span: {c: 1, r: 1}},
    {img: "/gallery/img128.jpg", text: "", width: 1600, height: 2512, tag: "FRAME 15", span: {c: 2, r: 2}},
    {img: "/gallery/img176.jpg", text: "", width: 1600, height: 998, tag: "FRAME 16", span: {c: 2, r: 1}},
    {img: "/gallery/img197.jpg", text: "", width: 1600, height: 2502, tag: "FRAME 17", span: {c: 1, r: 2}},
    {img: "/gallery/img232.jpg", text: "", width: 1600, height: 2506, tag: "FRAME 18", span: {c: 1, r: 2}},
    {img: "/gallery/img242.jpg", text: "", width: 1600, height: 2510, tag: "FRAME 19", span: {c: 1, r: 1}},
    {img: "/gallery/img244.jpg", text: "", width: 1600, height: 1090, tag: "FRAME 20", span: {c: 2, r: 1}},
    {img: "/gallery/img245.jpg", text: "", width: 1600, height: 989, tag: "FRAME 21", span: {c: 1, r: 1}},
    {img: "/gallery/img258.jpg", text: "", width: 1600, height: 2483, tag: "FRAME 22", span: {c: 2, r: 2}},
    {img: "/gallery/img272.jpg", text: "", width: 1600, height: 2465, tag: "FRAME 23", span: {c: 1, r: 2}},
    {img: "/gallery/img277.jpg", text: "", width: 1600, height: 2530, tag: "FRAME 24", span: {c: 1, r: 1}},
];

export const Ticks = ({count = 13, className = ""}: { count?: number; className?: string }) => (
    <div className={`flex gap-1 ${className}`}>
        {Array.from({length: count}, (_, k) => (
            <div
                key={k}
                className={`h-2.5 w-[5px] rounded-[1px] bg-greenDark dark:bg-greenNew ${k % 3 === 1 ? "opacity-45" : "opacity-100"}`}
            />
        ))}
    </div>
);

const getColumnCount = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 2;
};

const useColumnCount = () => {
    const [columnCount, setColumnCount] = useState(getColumnCount);

    useEffect(() => {
        let ticking = false;
        const onResize = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setColumnCount(getColumnCount());
                ticking = false;
            });
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return columnCount;
};

const MosaicGallery = () => {
    const columnCount = useColumnCount();

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [openedImg, setOpenedImg] = useState<string | null>(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const [revealed, setRevealed] = useState(false);

    const selected = selectedIndex !== null ? images[selectedIndex] : null;

    const markLoaded = (src: string) =>
        setLoadedImages((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));

    const openImage = (index: number) => {
        setSelectedIndex(index);
        setOpenedImg(images[index].img);
    };
    const closeModal = () => setSelectedIndex(null);
    const goNext = () => {
        setDescriptionOpen(false);
        setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
    };
    const goPrev = () => {
        setDescriptionOpen(false);
        setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };

    useEffect(() => {
        if (selected) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [selected]);

    useEffect(() => {
        if (selectedIndex === null) return;
        setRevealed(false);
        const t = setTimeout(() => setRevealed(true), 60);
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            clearTimeout(t);
            window.removeEventListener("keydown", onKey);
        };
    }, [selectedIndex]);

    useEffect(() => {
        if (selectedIndex === null) return;
        const preload = (idx: number) => {
            const image = new window.Image();
            image.src = images[idx].img;
        };
        preload((selectedIndex + 1) % images.length);
        preload((selectedIndex - 1 + images.length) % images.length);
    }, [selectedIndex]);

    const memoizedImages = useMemo(() => images, []);

    return (
        <div className="relative">
            <div
                className="grid gap-5 sm:gap-6 lg:gap-8 p-4 sm:p-8 lg:p-10 [grid-auto-flow:dense] [container-type:inline-size]"
                style={{gridTemplateColumns: `repeat(${columnCount}, 1fr)`, gridAutoRows: "150px"}}
            >
                {memoizedImages.map((image, index) => image.img !== openedImg || !selected ? (
                    <motion.button
                        key={image.img}
                        layoutId={image.img}
                        onClick={() => openImage(index)}
                        initial={{opacity: 0, y: 24}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-60px"}}
                        transition={{duration: 0.45, delay: Math.min((index % 6) * 0.06, 0.36)}}
                        style={{
                            gridColumn: `span ${Math.min(image.span.c, columnCount)}`,
                            gridRow: `span ${image.span.r}`,
                        }}
                        className="group relative block w-full h-full overflow-hidden bg-bgDarkColor cursor-zoom-in shadow-[8px_8px_0_0_rgba(0,0,0,0.35)] hover:shadow-[14px_14px_0_0_#50B9A6] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300"
                    >
                        {!loadedImages.has(image.img) && (
                            <div
                                className="absolute inset-0 animate-pulse bg-white/10"
                                style={{aspectRatio: `${image.width} / ${image.height}`}}
                            />
                        )}
                        <img
                            loading="lazy"
                            onLoad={() => markLoaded(image.img)}
                            src={image.img}
                            alt=""
                            className={`h-full w-full object-cover grayscale transition-[filter,transform,opacity] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 ${
                                loadedImages.has(image.img) ? "opacity-100" : "opacity-0"
                            }`}
                        />
                        <div
                            className="pointer-events-none absolute -right-1 bottom-[-0.28em] font-poppinsFont font-extrabold leading-none text-white mix-blend-difference text-[clamp(40px,9cqw,96px)]">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div
                            className="absolute left-2.5 top-2.5 [writing-mode:vertical-rl] rotate-180 bg-black/55 px-1.5 py-1.5 font-terminalFont text-[10px] tracking-[3px] text-creamColor">
                            {image.tag}
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1.5 items-end gap-[3px] px-2">
                            {Array.from({length: 14}, (_, k) => (
                                <div key={k} className={`h-[5px] w-1 bg-greenNew ${k % 3 === 1 ? "opacity-40" : "opacity-90"}`}/>
                            ))}
                        </div>
                    </motion.button>
                ) : null)}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div
                            layout
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.35, ease: "easeInOut"}}
                            className="fixed inset-0 bg-black/80 z-[55]"
                        />
                        <div className="fixed inset-0 z-[60] flex items-center justify-center px-14">
                            <motion.button
                                onClick={goPrev}
                                whileTap={{scale: 0.9}}
                                whileHover={{scale: 1.1}}
                                className="absolute left-2 mob2:left-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-2">
                                <IoChevronBack/>
                            </motion.button>

                            <div className="flex flex-col items-center gap-3">
                                <motion.div
                                    layout
                                    layoutId={openedImg ?? undefined}
                                    className="relative overflow-hidden will-change-transform bg-bgDarkColor shadow-[14px_14px_0_0_#50B9A6]"
                                    transition={{duration: 0.35, ease: "easeInOut"}}
                                >
                                    <motion.img
                                        key={selected.img}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        src={selected.img}
                                        alt=""
                                        style={{aspectRatio: `${selected.width} / ${selected.height}`}}
                                        className={`max-w-[76vw] max-h-[72vh] object-contain transition-[filter] duration-700 ease-out ${
                                            revealed ? "grayscale-0" : "grayscale"
                                        }`}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    />
                                    <div
                                        className="absolute left-2.5 top-2.5 [writing-mode:vertical-rl] rotate-180 bg-black/55 px-1.5 py-1.5 font-terminalFont text-[10px] tracking-[3px] text-creamColor">
                                        {selected.tag}
                                    </div>
                                    <AnimatePresence>
                                        {descriptionOpen && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 w-full bg-bgDarkColor p-5"
                                                layout
                                                initial={{y: 80}}
                                                animate={{y: 0}}
                                                exit={{y: 200}}
                                                transition={{
                                                    y: {duration: 0.6, ease: [0.22, 1, 0.36, 1]},
                                                    opacity: {duration: 0.55, ease: "easeInOut", delay: 0.05}
                                                }}
                                            >
                                                <p className="text-sm text-gray-400 leading-relaxed font-interFont font-medium">
                                                    {selected.text}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {selected.text && (
                                        <motion.button
                                            onClick={() => setDescriptionOpen(!descriptionOpen)}
                                            whileTap={{scale: 0.95}}
                                            className="absolute top-4 right-4 z-10 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"
                                            transition={{layout: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}}>
                                            <IoIosArrowDown
                                                className={`transition-transform duration-300 ${
                                                    descriptionOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            />
                                        </motion.button>
                                    )}
                                    <motion.button
                                        onClick={closeModal}
                                        whileTap={{scale: 0.95}}
                                        className="absolute top-4 left-4 z-10 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"
                                        transition={{layout: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}}>
                                        <IoMdClose/>
                                    </motion.button>
                                </motion.div>

                                <div className="flex items-center gap-3 font-terminalFont text-xs text-creamColor">
                                    <span>N&deg;{String((selectedIndex ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
                                    <Ticks count={11}/>
                                </div>
                            </div>

                            <motion.button
                                onClick={goNext}
                                whileTap={{scale: 0.9}}
                                whileHover={{scale: 1.1}}
                                className="absolute right-2 mob2:right-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-2">
                                <IoChevronForward/>
                            </motion.button>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MosaicGallery;
