import {motion} from "framer-motion";

const HomeButton = () => {
    return (
        <motion.button whileHover={{scale: 1.15}}
                       whileTap={{scale: 0.9}}
                       className="font-poppinsFont text-2xl font-medium m-4"
        >
            LEO SV.
        </motion.button>
    );
};

export default HomeButton;