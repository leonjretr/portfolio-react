import {motion} from "framer-motion";

const PhotoSection = () => {
    const myPhoto = new URL("/imgs/me22.JPG", import.meta.url).href;
    return (
        <div className={"flex justify-center my-8 md:my-16 select-none"}>
            <motion.img
                style={{scale:1.15}}
                whileHover={{scale: 1.25}}
                className={"w-72 h-48 mob1:w-80 mob1:h-52 mob3:w-96 mob3:h-64 md:w-110 md:h-72 lg:w-130 lg:h-96 xl:w-140 xl:h-full rounded-xl cursor-pointer"} src={myPhoto} alt={"Me"}>
            </motion.img>
        </div>
    );
};

export default PhotoSection;