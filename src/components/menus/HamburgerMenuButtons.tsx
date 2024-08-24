import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {FC} from "react";
import {motion} from "framer-motion";

interface HamburgerMenuButtonProps {
    text: string;
    sectionLink: string;
}

const HamburgerMenuButtons: FC<HamburgerMenuButtonProps> = ({sectionLink, text}) => {
    const nav = useScrollNavigate();

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit:{ opacity: 0, y: -20 },
    };
    return (
        <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={itemVariants}
            transition={{duration: 0.3}}
            className="p-1 hover:dark:text-neutral-200 hover:dark:bg-bgDarkColor hover:bg-gray-200 rounded-lg"
            onClick={() => nav(sectionLink)}>{text}
        </motion.button>
    );
};

export default HamburgerMenuButtons;