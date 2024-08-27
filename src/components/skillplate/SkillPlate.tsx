import { motion } from "framer-motion";
import {FC} from "react";

interface SkillPlateProps {
    skillTitle:string;
    color:string;
}

const SkillPlate:FC<SkillPlateProps> = ({skillTitle, color}) => {
    return (
        <motion.div
            whileHover={{scale:1.05}}
            className={"flex items-center hover:drop-shadow-md hover:shadow-gray-400 rounded-lg"}>
            <div className={"flex w-auto p-1.5 h-8 items-center text-white text-lg bg-greenDark font-interFont font-extrabold rounded-l-lg"}>
            #
            </div>
            <div className={"flex w-auto p-2 h-8 items-center justify-center text-base sm:text-lg font-interFont font-medium rounded-r-lg"}
            style={{backgroundColor: color}}>
                {skillTitle}
            </div>
        </motion.div>
    );
};

export default SkillPlate;