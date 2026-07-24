import Navbar from "../navbars/Navbar.tsx";
import HomeButton from "../buttons/HomeButton.tsx";
import Hamburger from "../menus/Hamburger.tsx";
import ThemeToggle from "../toggle/ThemeToggle.tsx";
import {useEffect, useState} from "react";
import NavButton from "../buttons/NavButton.tsx";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const heroEl = document.getElementById("home");
        const threshold = heroEl ? heroEl.offsetHeight - 80 : window.innerHeight - 80;

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > threshold);
                ticking = false;
            });
        };
        onScroll();

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`grid grid-cols-3 fixed top-0 left-0 z-50 items-center w-full h-20 px-6 transition-colors duration-300 ${
                isScrolled
                    ? "bg-creamColor text-textWarm dark:text-white dark:bg-bgDarkColor shadow-md"
                    : "bg-transparent text-white"
            }`}>
            <div className={"flex items-center"}>
                <HomeButton/>
            </div>

            <div className={"hidden font-poppinsFont md:flex items-center justify-center"}>
                <Navbar/>
            </div>

            <div className={"hidden font-poppinsFont md:flex items-center justify-end gap-x-4"}>
                <NavButton text={"get in touch"} sectionLink={"contact"}/>
                <ThemeToggle transparent={!isScrolled}/>
            </div>

            <div className={"col-span-2 col-start-2 flex md:hidden items-center justify-end gap-x-4"}>
                <ThemeToggle transparent={!isScrolled}/>
                <Hamburger/>
            </div>
        </div>
    );
};

export default Header;