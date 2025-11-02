import NavButton from "../buttons/NavButton.tsx";
import NavRouteButton from "../buttons/NavRouteButton.tsx";

const Navbar = () => {
    return (
        <div className={"flex font-poppinsFont text-base font-normal gap-x-3"}>
            <div className={"flex flex-col"}>
                <NavButton text={"HOME"} sectionLink={"home"}/>
                <NavButton text={"PROJECTS"} sectionLink={"projects"}/>
            </div>
            <div className={"flex flex-col justify-center"}>
                <NavRouteButton text={"BLOG"} routeLink={"/blog"}/>
            </div>
            <div className={"flex flex-col"}>
                <NavButton text={"ABOUT"} sectionLink={"about"}/>
                <NavButton text={"CONTACT"} sectionLink={"contact"}/>
            </div>
        </div>
    );
};

export default Navbar;