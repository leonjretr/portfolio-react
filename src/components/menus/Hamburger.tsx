import {motion} from "framer-motion";
import HamburgerStore from "../../stores/HamburgerStore.ts";
import {observer} from "mobx-react-lite";

interface HamburgerProps {
    transparent?: boolean;
}

const Hamburger = observer(({transparent = false}: HamburgerProps) => {

    const toggleMenu = () => {
        HamburgerStore.isOpen = !HamburgerStore.isOpen;
    };

    return (
        <nav className="flex justify-center items-center m-2 md:m-4">
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                animate={HamburgerStore.isOpen ? {rotate:-90} : {rotate:0}}
                className={`inline-flex items-center -mt-1 w-10 h-10 justify-center text-base rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 ${
                    transparent
                        ? "text-white hover:bg-white/10 focus:ring-white/30"
                        : "text-textWarm hover:bg-black/5 focus:ring-black/10 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/20"
                }`}
                onClick={toggleMenu}>
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </motion.button>
        </nav>
    );
});

export default Hamburger;