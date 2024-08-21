import {motion} from "framer-motion";
import {FC, ReactNode} from "react";

interface SocialLinkButtonProps {
    icon: ReactNode;
    link: string;
}

const SocialLinkButton: FC<SocialLinkButtonProps> = ({icon, link}) => {
    return (
        <a rel="noopener noreferrer"
           href={link}
           target="_blank">
            <motion.button className={"text-4xl mx-1.5"}
                           whileHover={{scale: 1.1}}
                           whileTap={{scale: 0.9}}>{icon}
            </motion.button>
        </a>
    );
};

export default SocialLinkButton;