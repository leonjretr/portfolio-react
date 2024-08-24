import {motion} from "framer-motion";
import HamburgerStore from "../../stores/HamburgerStore.ts";
import {observer} from "mobx-react-lite";

const Hamburger = observer(() => {

    const toggleMenu = () => {
        HamburgerStore.isOpen = !HamburgerStore.isOpen;
    };

    return (
        <nav className="flex justify-center items-center text-white">
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                animate={HamburgerStore.isOpen ? {rotate:-90} : {rotate:0}}
                className="inline-flex items-center -mt-1 w-10 h-10 justify-center text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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