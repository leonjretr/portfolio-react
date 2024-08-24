import {motion} from "framer-motion";
import {FC} from "react";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";

interface NavButtonProps {
    text: string;
    sectionLink: string;
}

const NavButton: FC<NavButtonProps> = ({text, sectionLink}) => {
    const nav = useScrollNavigate();

    return (
        <motion.button className={"hover:bg-gray-100 hover:dark:bg-bgDarkColor hover:dark:text-white hover:rounded-lg dark:text-neutral-400 p-1"}
                       whileHover={{scale: 1.2}}
                       whileTap={{scale: 0.9}}
                       onClick={() => nav(sectionLink)}
                       style={{filter: "blur(.0px)"}}>{text}
        </motion.button>

    )
        ;
};

export default NavButton;