import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const ThemeToggle = () => {
    const [checked, setChecked] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setChecked(!checked);
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log(theme);
    };

    return (
        <div className="">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"
                       className="sr-only"
                       onClick={toggleTheme}
                />
                {checked ? (
                    <div className={"flex items-center"}>
                        <div className={"relative w-11 h-6 bg-blue-500 rounded-full"}>
                            <motion.div
                                className="relative w-6 h-6 border-2 border-blue-500 bg-white rounded-full"
                                layout
                                animate={{x: 20}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                            </motion.div>
                        </div>
                        <span className="ms-2 text-base font-medium font-poppinsFont text-black">🌞</span>
                    </div>
                ) : (
                    <div className={"flex items-center"}>
                        <div className={"relative w-11 h-6 bg-gray-200 rounded-full dark:bg-neutral-600"}>
                            <motion.div className="relative w-6 h-6 bg-white border-2 rounded-full"
                                        layout
                                        animate={{x: 0}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                            </motion.div>
                        </div>
                        <span className="ms-2 text-base font-medium font-poppinsFont text-black">🌙</span>
                    </div>
                )}

            </label>
        </div>
    );
};

export default ThemeToggle;