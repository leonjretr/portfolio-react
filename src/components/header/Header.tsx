import Navbar from "../navbars/Navbar.tsx";
import HomeButton from "../buttons/HomeButton.tsx";
import SocialLinkButton from "../buttons/SocialLinkButton.tsx";
import {FaGithub, FaTelegram, FaLinkedin} from "react-icons/fa";
import {GITHUB_LINK, TELEGRAM_LINK, LINKEDIN_LINK} from "../../config/constants.ts"
import Hamburger from "../menus/Hamburger.tsx";

const Header = () => {
    return (
        <div className="flex justify-between p-2 h-20 rounded-b-xl items-center w-full bg-cyan-50">
            <div className="">
                <HomeButton/>
            </div>
            <div className="hidden md:flex">
                <Navbar/>
            </div>
            <div className={"hidden md:flex"}>
                <SocialLinkButton icon={<FaTelegram/>} link={TELEGRAM_LINK}/>
                <SocialLinkButton icon={<FaGithub/>} link={GITHUB_LINK}/>
                <SocialLinkButton icon={<FaLinkedin/>} link={LINKEDIN_LINK}/>
            </div>
            <div className={"md:hidden"}>
                <Hamburger/>
            </div>
        </div>
    );
};

export default Header;