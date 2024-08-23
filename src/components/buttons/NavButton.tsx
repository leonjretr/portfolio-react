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
        <motion.button className={"hover:bg-gray-100 hover:rounded-lg p-1 scroll-smooth"}
                       whileHover={{scale: 1.2}}
                       whileTap={{scale: 0.9}}
                       onClick={() => nav(sectionLink)}
                       style={{filter: "blur(.0px)"}}>{text}
        </motion.button>

    )
        ;
};

export default NavButton;