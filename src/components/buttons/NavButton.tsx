import {motion} from "framer-motion";
import {FC} from "react";

interface NavButtonProps {
    text: string;
}

const NavButton: FC<NavButtonProps> = ({text}) => {
    return (
        <motion.button className={"hover:bg-gray-100 hover:rounded-lg p-1"}
                       whileHover={{scale: 1.2}}
                       whileTap={{scale: 0.9}}
                       style={{filter: "blur(.0px)"}}>{text}
        </motion.button>
    );
};

export default NavButton;