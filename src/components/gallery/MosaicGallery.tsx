import {motion} from "framer-motion";

const MosaicGallery = () => {
    const images = [
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
        "/imgs/me22.JPG",
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


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[100px] p-4">
            {images.map((src, i) => (
                <motion.button
                    key={i}
                    whileHover={{scale: 1.07}}
                    className={`overflow-hidden rounded-lg ${layout[i % layout.length]} blur-sm hover:blur-none ease-out duration-200`}
                >
                    <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </motion.button>
            ))}
        </div>
    );
};
export default MosaicGallery;