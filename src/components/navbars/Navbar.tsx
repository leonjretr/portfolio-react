import NavButton from "../buttons/NavButton.tsx";

const Navbar = () => {
    return (
        <div className={"grid grid-rows-2 grid-cols-2 font-poppinsFont text-base font-normal gap-x-3"}>
            <NavButton text={"HOME"}/>
            <NavButton text={"ABOUT"}/>
            <NavButton text={"PROJECTS"}/>
            <NavButton text={"CONTACT"}/>
        </div>
    );
};

export default Navbar;