import FooterSocialButton from "../buttons/FooterSocialButton.tsx";
import {CvButton} from "../buttons/CvButton.tsx";
import {GITHUB_LINK, TELEGRAM_LINK, LINKEDIN_LINK} from "../../config/constants.ts"

const Footer = () => {
    return (
        <div
            className="flex bottom-0 justify-center lg:justify-between min-h-20 rounded-t-xl items-center w-full bg-creamColor text-textWarm dark:bg-bgDarkColor dark:text-white">
            <div className={"hidden lg:flex font-poppinsFont font-medium m-4 opacity-70"}>
                &copy; Leonid Svietlychnyi &mdash; {new Date().getFullYear()}
            </div>
            <div className={"flex flex-wrap items-center justify-center font-poppinsFont font-medium mob2:mr-4"}>
                <FooterSocialButton title={"GitHub"} link={GITHUB_LINK}/>
                <FooterSocialButton title={"Linkedin"} link={LINKEDIN_LINK}/>
                <FooterSocialButton title={"Telegram"} link={TELEGRAM_LINK}/>
                <CvButton/>
            </div>
            
        </div>
    );
};

export default Footer;