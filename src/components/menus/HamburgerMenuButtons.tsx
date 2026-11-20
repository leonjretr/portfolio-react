import {useSectionNavigate} from "../scroll";
import {ROUTES} from "../../config/routes.ts";
import {FC} from "react";
import {motion} from "framer-motion";
import {useLocation, useNavigate} from "react-router";
import HamburgerStore from "../../stores/HamburgerStore.ts";

interface HamburgerMenuButtonProps {
    text: string;
    sectionLink: string;
}

const HamburgerMenuButtons: FC<HamburgerMenuButtonProps> = ({sectionLink, text}) => {
    const navigateToSection = useSectionNavigate();
    const goTo = useNavigate();
    const {pathname} = useLocation();

    const itemVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -20},
    };

    const isRoute = sectionLink.startsWith(ROUTES.HOME);

    const butClick = () => {
        HamburgerStore.setIsOpenFalse();

        if (!isRoute) {
            navigateToSection(sectionLink);
            return;
        }

        if (pathname === sectionLink) {
            window.scrollTo({top: 0, behavior: "smooth"});
            return;
        }

        goTo(sectionLink);
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