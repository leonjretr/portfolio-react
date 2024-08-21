import FooterSocialButton from "../buttons/FooterSocialButton.tsx";

const Footer = () => {
    return (
        <div className="flex fixed bottom-0 justify-center lg:justify-between h-20 rounded-t-xl items-center w-full bg-cyan-50">
            <div className={"hidden lg:flex font-poppinsFont font-medium m-4"}>
                &copy; Leonid Svietlychnyi &mdash; {new Date().getFullYear()}
            </div>
            <div className={""}>
                <FooterSocialButton title={"GitHub"}/>
                <FooterSocialButton title={"Linkedin"}/>
                <FooterSocialButton title={"Telegram"}/>
            </div>
        </div>
    );
};

export default Footer;

{/*<button className={"relative font-poppinsFont font-medium m-4 hover:bg-cyan-200 rounded-lg p-1.5"}>*/}
{/*    Twitter*/}
{/*    <span className={"absolute left-0 bottom-0 w-full border-black border-2 transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"}></span>*/}
{/*</button>*/}