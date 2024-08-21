import {motion} from "framer-motion";

const PhotoSection = () => {
    const myPhoto = new URL("/imgs/me22.JPG", import.meta.url).href;
    return (
        <div className={"flex justify-center my-12"}>
            <motion.img
                style={{scale:1.15}}
                whileHover={{scale: 1.25}}
                className={"w-140 h-full rounded-xl"} src={myPhoto} alt={"Me"}>
            </motion.img>
        </div>

    );
};

export default PhotoSection;

// <img className={"w-full h-full rounded-xl"} src={myPhoto} alt={"Me"}/>
// initial={{
//     opacity: 0,
//         // if odd index card,slide from right instead of left
//         x: key % 2 === 0 ? 50 : -50
// }}
// whileInView={{
//     opacity: 1,
//         x: 0, // Slide in to its original position
//         transition: {
//         duration: 0.5 // Animation duration
//     }
// }}
// viewport={{once: true}}