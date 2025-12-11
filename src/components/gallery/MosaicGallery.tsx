import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {IoIosArrowDown} from "react-icons/io";
import {IoMdClose} from "react-icons/io";

const MosaicGallery = () => {
    const images = [
        {img: "/imgs/carinterior.jpg", text: "..."},
        {img: "/imgs/turkey.webp", text: "..."},
        {img: "/imgs/bench.jpg", text: "..."},
        {img: "/imgs/3dproject.jpg", text: "My 3d Project"},
        {img: "/imgs/carme.jpg", text: "..."},
        {img: "/imgs/cemetery.jpg", text: "..."},
        {img: "/imgs/tree.jpg", text: "..."},
        {img: "/imgs/tunnelvenice.webp", text: "..."},
        {img: "/imgs/house.jpg", text: "..."},
        {img: "/imgs/chatsworth.jpg", text: "..."},
        {img: "/imgs/street.jpg", text: "..."},
        {img: "/imgs/retrome.webp", text: "..."},
        {img: "/imgs/krakow.jpg", text: "..."},
        {img: "/imgs/me22.webp", text: "..."},
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
    const [selectedImgText, setSelectedImgText] = useState<string | null>(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    useEffect(() => {
        if (selectedImg) {
            document.body.classList.add('overflow-hidden');

        } else {
            document.body.classList.remove('overflow-hidden');
            // setDescriptionOpen(true);
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
                className="grid grid-cols-1 mob1:grid-cols-2 mob2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[100px] p-4">
                {images.map((src, i) => !selectedImg || src.img !== selectedImg ? (
                    <motion.button
                        key={i}
                        whileHover={{scale: 1.05}}
                        layoutId={src.img} // link this card to the modal
                        onClick={() => {
                            setSelectedImg(src.img);
                            setSelectedImgText(src.text);
                        }}
                        className={`overflow-visible rounded-lg ${layout[i % layout.length]} `}
                    >
                        <img
                            loading={"lazy"}
                            src={src.img}
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
                            // onClick={() => setSelectedImg(null)}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <motion.div
                                layout
                                layoutId={selectedImg}
                                className="relative rounded-lg overflow-hidden will-change-transform bg-neutral-900"
                                transition={{duration: 0.35, ease: "easeInOut"}}
                            >

                                <motion.img
                                    src={selectedImg}
                                    srcSet={`${selectedImg} 600w, ${selectedImg} 1200w, ${selectedImg} 2000w`}
                                    sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 2000px"
                                    alt=""
                                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                                    transition={{duration: 0.2, ease: "easeInOut"}}
                                    loading={"lazy"}

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
                                            {selectedImgText}
                                        </p>
                                    </motion.div>)}
                                </AnimatePresence>
                                <motion.button
                                    onClick={() => setDescriptionOpen(!descriptionOpen)}
                                    whileTap={{scale: 0.95}}
                                    className={"absolute top-4 right-4 z-60 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"}
                                    transition={{layout: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}}>
                                    <IoIosArrowDown
                                        className={`transition-transform duration-300 ${
                                            descriptionOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    />
                                </motion.button>
                                <motion.button
                                    onClick={() => setSelectedImg(null)}
                                    whileTap={{scale: 0.95}}
                                    className={"absolute top-4 left-4 z-60 rounded-md active:scale-95 bg-black/50 text-white hover:bg-black/70 text-xl mob2:text-2xl p-1 mob1:p-2 mob2:p-3"}
                                    transition={{layout: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}}>
                                    <IoMdClose/>
                                </motion.button>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
        ;
};

export default MosaicGallery;
