import {motion} from "framer-motion";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";

const HomeButton = () => {
    const nav = useScrollNavigate();
    return (
        <motion.button whileHover={{scale: 1.15}}
                       whileTap={{scale: 0.9}}
                       className="font-poppinsFont text-2xl font-medium m-4"
                       onClick={() => nav("home")}
        >
            LEO SV.
        </motion.button>
    );
};

export default HomeButton;