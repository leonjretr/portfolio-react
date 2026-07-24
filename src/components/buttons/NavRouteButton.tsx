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
                className={"w-max p-2 transition-colors hover:text-greenNew dark:hover:text-greenNew"}
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