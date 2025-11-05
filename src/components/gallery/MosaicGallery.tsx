import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const MosaicGallery = () => {
    const images = [
        "/imgs/carinterior.jpg",
        "/imgs/turkey.jpg",
        "/imgs/bench.jpg",
        "/imgs/3dproject.jpg",
        "/imgs/carme.jpg",
        "/imgs/cemetery.jpg",
        "/imgs/tree.jpg",
        "/imgs/tunnelvenice.jpg",
        "/imgs/house.jpg",
        "/imgs/chatsworth.jpg",
        "/imgs/street.jpg",
        "/imgs/retrome.jpg",
        "/imgs/krakow.jpg",
        "/imgs/me22.JPG",
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
                {images.map((src, i) => (
                    <motion.button
                        key={i}
                        whileHover={{scale: 1.05}}
                        layoutId={src} // link this card to the modal
                        onClick={() => setSelectedImg(src)}
                        className={`overflow-visible rounded-lg ${layout[i % layout.length]} blur-sm hover:blur-none ease-out duration-200`}
                    >
                        <img
                            src={src}
                            alt=""
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </motion.button>
                ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            onClick={() => setSelectedImg(null)}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <motion.div
                                layoutId={selectedImg}
                                className="relative rounded-lg overflow-hidden cursor-pointer will-change-transform pb-10 bg-neutral-900 "
                                onClick={() => setSelectedImg(null)}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
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
