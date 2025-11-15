import {motion} from "framer-motion";
import {FC} from "react";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {useLocation, useNavigate} from "react-router";

interface NavButtonProps {
    text: string;
    sectionLink: string;
}

const NavButton: FC<NavButtonProps> = ({text, sectionLink}) => {
    const nav = useScrollNavigate();
    const goTo = useNavigate();
    const location = useLocation();

    const butClick = () => {
        if(location.pathname === "/blog"){
            goTo("/");
            setTimeout(() => nav(sectionLink), 750);
        } else {
            nav(sectionLink);
        }
    }
    return (
        <motion.button
            className={"hover:bg-gray-100 hover:dark:bg-bgDarkColor hover:dark:text-white hover:rounded-lg dark:text-neutral-400 p-1"}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
            onClick={butClick}
            style={{filter: "blur(.0px)"}}>{text}
        </motion.button>
    )
        ;
};

export default NavButton;