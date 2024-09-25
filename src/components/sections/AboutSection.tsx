import AboutText from "../texts/AboutText.tsx";
import SkillPlate from "../skillplate/SkillPlate.tsx";
import {skills} from "../../config/skills.ts";

const AboutSection = () => {
    return (
        <div className={"flex flex-col mx-8 md:mx-16 lg:mx-32 xl:mx-36"}>
            <div className={"dark:text-white"}>
                <h1 className={"font-interFont text-3xl md:text-5xl font-bold text-center mb-3 md:mb-6"}>About me</h1>
                <AboutText/>
            </div>
            <div className={"flex justify-start gap-1 my-2 flex-wrap select-none mt-5"}>
                {skills.map((skill, index) => (
                    <SkillPlate key={index} skillTitle={skill.skillName} color={skill.color}/>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;