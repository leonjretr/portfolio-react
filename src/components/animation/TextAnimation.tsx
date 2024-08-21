import {FC} from 'react';
import {motion} from "framer-motion";

interface TextAnimationProps {
    classname: string;
    text: string[];
}

const TextAnimation: FC<TextAnimationProps> = ({classname, text}) => {
    return (
        <div className={classname}>
            {text.map((el, i) => (
                <motion.span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 0.35,
                        delay: i / 7,
                    }}
                    key={i}
                >
                    {el}{" "}
                </motion.span>
            ))}
        </div>
    );
};

export default TextAnimation;