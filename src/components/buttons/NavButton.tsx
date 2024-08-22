import {motion} from "framer-motion";
import {FC} from "react";
// import {Link} from "react-router-dom";

interface NavButtonProps {
    text: string;
    // linkTo:string;
}

const NavButton: FC<NavButtonProps> = ({text}) => {
    return (
        <motion.button className={"hover:bg-gray-100 hover:rounded-lg p-1"}
                       whileHover={{scale: 1.2}}
                       whileTap={{scale: 0.9}}
                       style={{filter: "blur(.0px)"}}>{text}
            {/*<Link to={linkTo}>{text}</Link>*/}
        </motion.button>
    );
};

export default NavButton;