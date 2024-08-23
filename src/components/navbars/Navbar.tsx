import NavButton from "../buttons/NavButton.tsx";

const Navbar = () => {
    return (
        <div className={"grid grid-rows-2 grid-cols-2 font-poppinsFont text-base font-normal gap-x-3"}>
            <NavButton text={"HOME"} sectionLink={"home"}/>
            <NavButton text={"ABOUT"} sectionLink={"about"}/>
            <NavButton text={"PROJECTS"} sectionLink={"projects"}/>
            <NavButton text={"CONTACT"} sectionLink={"contact"}/>
        </div>
    );
};

export default Navbar;