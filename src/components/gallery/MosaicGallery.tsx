import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

const MosaicGallery = () => {
    const images = [
        "/imgs/carinterior.webp",
        "/imgs/turkey.webp",
        "/imgs/bench.webp",
        "/imgs/3dproject.webp",
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

    useEffect(() => {
        if (selectedImg) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
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
                            src={src}
                            alt=""
                            className="rounded-lg w-full h-full object-cover blur-sm hover:blur-none duration-200 ease-out"
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
                                className="relative rounded-lg overflow-hidden cursor-pointer will-change-transform bg-neutral-900 "
                                onClick={() => setSelectedImg(null)}
                                transition={{duration: 0.35, ease: "easeInOut"}}
                            >
                                <motion.img
                                    src={selectedImg}
                                    alt=""
                                    className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                                    transition={{duration: 0.2, ease: "easeInOut"}}
                                />
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
