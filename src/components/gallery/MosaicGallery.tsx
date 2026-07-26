import {useEffect, useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {IoIosArrowDown} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {IoChevronBack, IoChevronForward, IoExpandOutline} from "react-icons/io5";

interface GalleryImage {
    img: string;
    text: string;
    width: number;
    height: number;
}

const images: GalleryImage[] = [
    {img: "/gallery/img002.jpg", text: "", width: 1600, height: 2442},
    {img: "/gallery/img013.jpg", text: "", width: 1600, height: 2441},
    {img: "/gallery/img014.jpg", text: "", width: 1600, height: 2459},
    {img: "/gallery/img015.jpg", text: "", width: 1600, height: 2453},
    {img: "/gallery/img029.jpg", text: "", width: 1600, height: 2444},
    {img: "/gallery/img048.jpg", text: "", width: 1600, height: 2439},
    {img: "/gallery/img057.jpg", text: "", width: 1600, height: 1130},
    {img: "/gallery/img072.jpg", text: "", width: 1600, height: 1012},
    {img: "/gallery/img074.jpg", text: "", width: 1600, height: 2457},
    {img: "/gallery/img085.jpg", text: "", width: 1600, height: 2533},
    {img: "/gallery/img087.jpg", text: "", width: 1600, height: 2533},
    {img: "/gallery/img103.jpg", text: "", width: 1600, height: 1024},
    {img: "/gallery/img113.jpg", text: "", width: 1600, height: 2295},
    {img: "/gallery/img121.jpg", text: "", width: 1600, height: 1008},
    {img: "/gallery/img128.jpg", text: "", width: 1600, height: 2512},
    {img: "/gallery/img176.jpg", text: "", width: 1600, height: 998},
    {img: "/gallery/img197.jpg", text: "", width: 1600, height: 2502},
];

const getColumnCount = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 385) return 2;
    return 1;
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

    const columns = useMemo(() => {
        const cols: { image: GalleryImage; index: number }[][] = Array.from({length: columnCount}, () => []);
        const heights = new Array(columnCount).fill(0);
        images.forEach((image, index) => {
            const shortest = heights.indexOf(Math.min(...heights));
            cols[shortest].push({image, index});
            heights[shortest] += image.height / image.width;
        });
        return cols;
    }, [columnCount]);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [openedImg, setOpenedImg] = useState<string | null>(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

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
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;
        const preload = (idx: number) => {
            const image = new window.Image();
            image.src = images[idx].img;
        };
        preload((selectedIndex + 1) % images.length);
        preload((selectedIndex - 1 + images.length) % images.length);
    }, [selectedIndex]);

    return (
        <div className="relative">
            <div className="flex gap-4 p-4">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-1 flex-col gap-4">
                        {column.map(({image, index}, localIdx) => !selected || image.img !== openedImg ? (
                            <motion.button
                                key={image.img}
                                layoutId={image.img} // link this card to the modal
                                onClick={() => openImage(index)}
                                initial={{opacity: 0, y: 24}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.45, delay: Math.min(localIdx * 0.05, 0.4)}}
                                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg"
                            >
                                {!loadedImages.has(image.img) && (
                                    <div
                                        className="absolute inset-0 animate-pulse rounded-lg bg-textWarm/10 dark:bg-white/10"
                                        style={{aspectRatio: `${image.width} / ${image.height}`}}
                                    />
                                )}
                                <motion.img
                                    whileHover={{scale: 1.08}}
                                    transition={{duration: 0.3}}
                                    loading={"lazy"}
                                    onLoad={() => markLoaded(image.img)}
                                    src={image.img}
                                    alt=""
                                    style={{aspectRatio: `${image.width} / ${image.height}`}}
                                    className={`rounded-lg w-full h-auto object-cover transition-opacity duration-500 ${
                                        loadedImages.has(image.img) ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                                <div
                                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <IoExpandOutline className="text-3xl text-white drop-shadow"/>
                                </div>
                            </motion.button>
                        ) : null)}
                    </div>
                ))}
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
                            className="fixed inset-0 bg-black/70 z-[55]"
                            // onClick={closeModal}
                        />
                        <div className="fixed inset-0 z-[60] flex items-center justify-center">
                            <motion.button
                                onClick={goPrev}
                                whileTap={{scale: 0.9}}
                                whileHover={{scale: 1.1}}
                                className="absolute left-2 mob2:left-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-2">
                                <IoChevronBack/>
                            </motion.button>

                            <motion.div
                                layout
                                layoutId={openedImg ?? undefined}
                                className="relative rounded-lg overflow-hidden will-change-transform bg-neutral-900"
                                transition={{duration: 0.35, ease: "easeInOut"}}
                            >

                                <motion.img
                                    key={selected.img}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    src={selected.img}
                                    alt=""
                                    style={{aspectRatio: `${selected.width} / ${selected.height}`}}
                                    className="max-w-[80vw] max-h-[85vh] object-contain rounded-lg"
                                    transition={{duration: 0.2, ease: "easeInOut"}}
                                />
                                <AnimatePresence>
                                    {descriptionOpen && (<motion.div
                                        className={"absolute bottom-0 left-0 right-0 bg-neutral-900 w-full p-5"}
                                        layout
                                        initial={{y: 80,}}
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
                                    </motion.div>)}
                                </AnimatePresence>
                                <div
                                    className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                                    {(selectedIndex ?? 0) + 1} / {images.length}
                                </div>
                                {selected.text && (
                                    <motion.button
                                        onClick={() => setDescriptionOpen(!descriptionOpen)}
                                        whileTap={{scale: 0.95}}
                                        className={"absolute top-4 right-4 z-10 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"}
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
                                    className={"absolute top-4 left-4 z-10 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"}
                                    transition={{layout: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}}>
                                    <IoMdClose/>
                                </motion.button>
                            </motion.div>

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
    )
        ;
};

export default MosaicGallery;
