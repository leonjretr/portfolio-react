import {motion} from "framer-motion";
import {FC} from "react";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {Link} from "react-router-dom";

interface NavRouteButtonProps {
    text: string;
    routeLink: string;
}

const NavRouteButton: FC<NavRouteButtonProps> = ({text, routeLink}) => {
    const nav = useScrollNavigate();

    return (
        <Link to={`${routeLink}`}>
            <motion.button
                className={"hover:bg-gray-100 hover:dark:bg-bgDarkColor hover:dark:text-white hover:rounded-lg dark:text-neutral-400 p-1"}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                onClick={() => nav(routeLink)}
                style={{filter: "blur(.0px)"}}>{text}
            </motion.button>
        </Link>

    )
        ;
};

export default NavRouteButton;