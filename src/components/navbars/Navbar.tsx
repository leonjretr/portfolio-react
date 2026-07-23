import NavButton from "../buttons/NavButton.tsx";
import NavRouteButton from "../buttons/NavRouteButton.tsx";

const Navbar = () => {

    const navButtons = [
        {buttonText: "PROJECTS", link: "projects"},
        {buttonText: "BIOGRAPHY", link: "about"},
    ];

    return (
        <div className={"flex font-poppinsFont text-base font-normal gap-x-6"}>
            <div className={"flex gap-x-2"}>
                {navButtons.map((button) => (
                    <NavButton text={button.buttonText} sectionLink={button.link} key={button.link}/>
                ))}
                <NavRouteButton text={"GALLERY"} routeLink={"/blog"}/>
            </div>
        </div>
    );
};

export default Navbar;