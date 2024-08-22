import NavButton from "../buttons/NavButton.tsx";

const Navbar = () => {
    return (
        <div className={"grid grid-rows-2 grid-cols-2 font-poppinsFont text-base font-normal gap-x-3"}>
            <NavButton text={"HOME"} linkTo={"#home"}/>
            <NavButton text={"ABOUT"} linkTo={"#about"}/>
            <NavButton text={"PROJECTS"} linkTo={"#projects"}/>
            <NavButton text={"CONTACT"} linkTo={"#contact"}/>
        </div>
    );
};

export default Navbar;