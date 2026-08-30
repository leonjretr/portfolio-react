import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {LuSunMedium} from "react-icons/lu";
import {IoMoonOutline} from "react-icons/io5";

interface ThemeToggleProps {
    transparent?: boolean;
}

const ThemeToggle = ({transparent = false}: ThemeToggleProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>("dark");

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"
                       className="sr-only"
                       onClick={toggleTheme}
                />
                {theme === "dark" ? (
                    <div className={"flex items-center"}>
                        <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                            transparent ? "bg-white/20 border border-white/40" : "bg-gray-500"
                        }`}>
                            <motion.div
                                className={`relative w-7 h-7 border-2 rounded-full transition-colors duration-300 ${
                                    transparent ? "border-white/40 bg-black/30" : "border-gray-500 bg-gray-700"
                                }`}
                                layout
                                animate={{x: 27}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                                <div className={"m-0.3"}><IoMoonOutline className={"text-white text-lg"}/></div>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <div className={"flex items-center"}>
                        <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                            transparent ? "bg-white/20 border border-white/40" : "bg-gray-200 dark:bg-neutral-600"
                        }`}>
                            <motion.div className={`relative w-7 h-7 border-2 rounded-full flex items-center transition-colors duration-300 ${
                                transparent ? "bg-white/80 border-white/40" : "bg-white"
                            }`}
                                        layout
                                        animate={{x: 0}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                                <div className={"absolute m-0.25"}><LuSunMedium
                                    className={"text-blue-500 text-lg text-center"}/></div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </label>
        </div>
    );
};

export default ThemeToggle;