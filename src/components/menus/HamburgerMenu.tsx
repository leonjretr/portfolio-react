import HamburgerMenuButtons from "./HamburgerMenuButtons.tsx";
import {motion} from "framer-motion";
import HamburgerStore from "../../stores/HamburgerStore.ts";
import useIsScrolledPastHero from "../scroll/useIsScrolledPastHero.ts";

const HamburgerMenu = () => {
    const isScrolled = useIsScrolledPastHero();

    const overlayVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0}
    };

    const MenuButtons = [
        {text: "home", link: "home"},
        {text: "projects", link: "projects"},
        {text: "biography", link: "about"},
        {text: "gallery", link: "/blog"},
        {text: "get in touch", link: "contact"},
    ];

    return (
        <motion.div
            initial={"hidden"}
            animate={HamburgerStore.isOpen && "visible"}
            exit={"exit"}
            variants={overlayVariants}
            transition={{duration: 0.1}}
            className={`flex fixed top-20 text-left items-center w-full z-40 px-6 pb-3 rounded-b-lg transition-colors duration-300 ${
                isScrolled
                    ? "bg-creamColor text-textWarm dark:bg-bgDarkColor dark:text-white shadow-md"
                    : "bg-white/10 text-white border-b border-white/20"
            }`}>
            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.2, ease: 'easeInOut'}}
                className="flex flex-col items-center justify-start text-left text-sm font-poppinsFont">
                {MenuButtons.map((button) => (
                    <HamburgerMenuButtons key={button.link} text={button.text} sectionLink={button.link}/>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HamburgerMenu;