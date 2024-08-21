import {useState} from "react";
import {motion} from "framer-motion";

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const items = ["Home", "About", "Projects", "Contact"];
    const menuVariants = {
        open: {
            width: 150,
            height: 200,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.4,
                staggerChildren: 0.1,
                delayChildren: 0.25,
            },
        },
        closed: {
            width: 0,
            height: 0,
            opacity: 0,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.4,
            },
        },
    };

    const itemVariants = {
        open: { opacity: 1, scale: 1, x: 0 },
        closed: { opacity: 0, scale: 0.3, x: 50 },
    };

    return (
        <div className="relative p-4">
            <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleMenu}>
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </motion.button>
            <motion.div
                className="absolute -left-32 top-11"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}>
                <motion.ul
                    className="font-medium text-xl flex flex-col px-4 py-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    {items.map((item, index) => (
                        <motion.li key={index} variants={itemVariants}
                        whileTap={{scale:0.95}}
                        whileHover={{scale:1.1}}>
                            <a
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default Hamburger;