import {motion} from "framer-motion";
import {FC} from "react";

interface FooterSocialButtonProps {
    title: string;
}

const FooterSocialButton: FC<FooterSocialButtonProps> = ({title}) => {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.87}}
            className={"relative group font-poppinsFont font-medium m-4 rounded-lg p-1.5"}>
            {title}
            <span
                className={"absolute bottom-0.5 left-0.5 w-0 h-0.5 bg-black transition-all group-hover:w-full"}></span>
        </motion.button>
    );
};

export default FooterSocialButton;

//
