import HamburgerMenuButtons from "./HamburgerMenuButtons.tsx";
import {motion} from "framer-motion";
import HamburgerStore from "../../stores/HamburgerStore.ts";

const HamburgerMenu = () => {

    // const menuVariants = {
    //     open: {
    //         height: "auto", // Allow the menu to expand to its full height
    //         opacity: 1,
    //         transition: {
    //             height: { type: "spring", stiffness: 100, damping: 20 },
    //             opacity: { duration: 0.8 },
    //             staggerChildren: 0.5,
    //             delayChildren: 1,
    //         },
    //     },
    //     closed: {
    //         height: 0,
    //         opacity: 0,
    //         transition: {
    //             height: { type: "spring", stiffness: 100, damping: 20 },
    //             opacity: { duration: 1 },
    //         },
    //     },
    // };
    const overlayVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit:{opacity:0}
    };


    return (
        <motion.div
            initial={"hidden"}
            animate={HamburgerStore.isOpen && "visible"}
            exit={"exit"}
            variants={overlayVariants}
            transition={{duration: 0.1}}
            className={"flex fixed top-16 text-left items-center w-full dark:bg-bgDarkColor bg-cyan-50 z-50 text-black dark:text-white px-6 pb-3 rounded-b-lg"}>
            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                className="flex flex-col items-center justify-start text-left text-sm font-poppinsFont">
                <HamburgerMenuButtons text={"home"} sectionLink={"home"}/>
                <HamburgerMenuButtons text={"about"} sectionLink={"about"}/>
                <HamburgerMenuButtons text={"projects"} sectionLink={"projects"}/>
                <HamburgerMenuButtons text={"contact"} sectionLink={"contact"}/>
            </motion.div>
        </motion.div>
    );
};

export default HamburgerMenu;