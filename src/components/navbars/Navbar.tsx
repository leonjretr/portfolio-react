import NavButton from "../buttons/NavButton.tsx";
import NavRouteButton from "../buttons/NavRouteButton.tsx";

const Navbar = () => {

    const navButtons = [
        {buttonText: "projects", link: "projects"},
        {buttonText: "biography", link: "about"},
    ];

    return (
        <div className={"flex items-center text-base font-normal gap-x-6"}>
            <div className={"flex items-center gap-x-2"}>
                {navButtons.map((button) => (
                    <div className={"flex items-center gap-x-2"} key={button.link}>
                        <NavButton text={button.buttonText} sectionLink={button.link}/>
                        <span className={"opacity-50"}>/</span>
                    </div>
                ))}
                <NavRouteButton text={"gallery"} routeLink={"/blog"}/>
            </div>
        </div>
    );
};

export default Navbar;