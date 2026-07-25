import {motion} from "framer-motion";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {useLocation, useNavigate} from "react-router";

const HomeButton = () => {
    const nav = useScrollNavigate();
    const goTo = useNavigate();
    const location = useLocation();
    const butClick = () => {
        if (location.pathname === "/blog") {
            goTo("/");
            setTimeout(() => nav("home"), 750);
        } else {
            nav("home");
        }
    }
    return (
        <motion.button whileHover={{scale: 1.15}}
                       whileTap={{scale: 0.9}}
                       className="whitespace-nowrap font-poppinsFont text-lg font-medium m-2 animate-pulse mob2:text-xl mob2:m-3 md:m-4 md:text-2xl"
                       onClick={butClick}
        >
            LEO SV.
        </motion.button>
    );
};

export default HomeButton;