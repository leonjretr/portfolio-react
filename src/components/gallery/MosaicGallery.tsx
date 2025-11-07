import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

const MosaicGallery = () => {
    const images = [
        "/imgs/carinterior.webp",
        "/imgs/turkey.webp",
        "/imgs/bench.webp",
        "/imgs/3dproject.jpg",
        "/imgs/carme.webp",
        "/imgs/cemetery.webp",
        "/imgs/tree.webp",
        "/imgs/tunnelvenice.webp",
        "/imgs/house.webp",
        "/imgs/chatsworth.webp",
        "/imgs/street.webp",
        "/imgs/retrome.webp",
        "/imgs/krakow.webp",
        "/imgs/me22.webp",
    ];

    const layout = [
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-1",
        "row-span-1",
    ];

    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [descriptionOpen, setDescriptionOpen] = useState(true);

    useEffect(() => {
        if (selectedImg) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
            setDescriptionOpen(true);
        }
    }, [selectedImg]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImg(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className="relative">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[100px] p-4">
                {images.map((src, i) => !selectedImg || src !== selectedImg ? (
                    <motion.button
                        key={i}
                        whileHover={{scale: 1.05}}
                        layoutId={src} // link this card to the modal
                        onClick={() => setSelectedImg(src)}
                        className={`overflow-visible rounded-lg ${layout[i % layout.length]} `}
                    >
                        <img
                            loading={"lazy"}
                            src={src}
                            alt=""
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </motion.button>
                ) : null)}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <>
                        <motion.div
                            layout
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.35, ease: "easeInOut"}}
                            className="fixed inset-0 bg-black/70 z-40"
                            onClick={() => setSelectedImg(null)}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <motion.div
                                layout
                                layoutId={selectedImg}
                                className="relative rounded-lg overflow-hidden will-change-transform bg-neutral-900 "
                                // onClick={() => setSelectedImg(null)}
                                transition={{duration: 0.35, ease: "easeInOut"}}
                            >
                                <motion.button

                                    onClick={() => setDescriptionOpen(!descriptionOpen)}
                                    whileTap={{scale: 0.95}}
                                    className={"absolute top-10 left-5 rounded-md active:scale-95 text-white hover:brightness-150 font-interFont font-extrabold text-2xl"}>
                                    Turkey: Hidden Gem
                                </motion.button>
                                <motion.img
                                    src={selectedImg}
                                    alt=""
                                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                                    transition={{duration: 0.2, ease: "easeInOut"}}

                                />
                                <AnimatePresence>
                                    {descriptionOpen && (<motion.div
                                        className={"absolute bottom-0 left-0 right-0 bg-neutral-900 w-full p-5"}
                                        layout
                                        initial={{y: 80, }}
                                        animate={{y: 0}}
                                        exit={{ y: 200 }}
                                        transition={{
                                            y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                                            opacity: { duration: 0.55, ease: "easeInOut", delay: 0.05 }
                                        }}
                                    >
                                        {/*<p className="text-sm uppercase tracking-wide text-gray-300">Travel</p>*/}
                                        {/*<h2 className="text-xl font-semibold mb-2">*/}
                                        {/*    5 Inspiring Apps for Your Next Trip*/}
                                        {/*</h2>*/}
                                        <p className="text-sm text-gray-400 leading-relaxed font-interFont font-semibold">
                                            Love to travel? So do the makers of these five subscription apps. For a
                                            small
                                            monthly fee, they'll help you find the best deals on flights, hotels, and
                                            more. Love to travel? So do the makers of these five subscription apps. For a
                                            small
                                            monthly fee, they'll help you find the best deals on flights, hotels, and
                                            more.
                                        </p>
                                    </motion.div>)}
                                </AnimatePresence>
                            </motion.div>
                            <button
                                aria-label="Close image"
                                onClick={() => setSelectedImg(null)}
                                className="absolute top-4 right-4 z-60 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
                                style={{transform: "translate(0, 0)"}}
                            >
                                ✕
                            </button>

                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MosaicGallery;
