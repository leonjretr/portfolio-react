import Navbar from "../navbars/Navbar.tsx";
import HomeButton from "../buttons/HomeButton.tsx";
import Hamburger from "../menus/Hamburger.tsx";
import ThemeToggle from "../toggle/ThemeToggle.tsx";
import NavButton from "../buttons/NavButton.tsx";
import useIsScrolledPastHero from "../scroll/useIsScrolledPastHero.ts";

const Header = () => {
    const isScrolled = useIsScrolledPastHero();

    return (
        <div
            className={`grid grid-cols-3 fixed top-0 left-0 z-50 items-center w-full h-20 px-6 transition-colors duration-300 ${
                isScrolled
                    ? "bg-creamColor text-textWarm dark:text-white dark:bg-bgDarkColor shadow-md"
                    : "bg-transparent text-white"
            }`}>
            <div className={"col-start-1 flex items-center"}>
                <HomeButton/>
            </div>

            <div className={"col-start-2 flex items-center justify-center"}>
                <div className={"hidden font-poppinsFont md:flex"}>
                    <Navbar/>
                </div>
                <div className={"flex md:hidden"}>
                    <ThemeToggle transparent={!isScrolled}/>
                </div>
            </div>

            <div className={"col-start-3 flex items-center justify-end"}>
                <div className={"hidden font-poppinsFont md:flex items-center gap-x-4"}>
                    <NavButton text={"get in touch"} sectionLink={"contact"}/>
                    <ThemeToggle transparent={!isScrolled}/>
                </div>
                <div className={"flex md:hidden"}>
                    <Hamburger transparent={!isScrolled}/>
                </div>
            </div>
        </div>
    );
};

export default Header;