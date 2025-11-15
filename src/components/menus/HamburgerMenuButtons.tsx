import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {FC} from "react";
import {motion} from "framer-motion";
import {useLocation, useNavigate} from "react-router";
import HamburgerStore from "../../stores/HamburgerStore.ts";

interface HamburgerMenuButtonProps {
    text: string;
    sectionLink: string;
}

const HamburgerMenuButtons: FC<HamburgerMenuButtonProps> = ({sectionLink, text}) => {
    const nav = useScrollNavigate();
    const goTo = useNavigate();
    const location = useLocation();

    const itemVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -20},
    };

    const butClick = () => {
        if (location.pathname === "/blog") {
            if (sectionLink != "/blog") {
                goTo("/");
                setTimeout(() => nav(sectionLink), 750);
                HamburgerStore.setIsOpenFalse();
            } else {
                goTo("/blog");
                HamburgerStore.setIsOpenFalse();
                nav("bloghome");
            }
        } else {
            if (sectionLink.startsWith("/")) {
                goTo("/blog");
                HamburgerStore.setIsOpenFalse();
                setTimeout(() => nav("bloghome"), 400);
            } else {
                nav(sectionLink);
                HamburgerStore.setIsOpenFalse();
            }
        }
    }
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={itemVariants}
            transition={{duration: 0.3}}
            className="p-1 hover:dark:text-neutral-200 hover:dark:bg-bgDarkColor hover:bg-gray-200 rounded-lg"
            onClick={butClick}>{text}
        </motion.button>
    );
};

export default HamburgerMenuButtons;