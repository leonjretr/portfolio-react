import AboutText from "../texts/AboutText.tsx";
import SkillPlate from "../skillplate/SkillPlate.tsx";

const AboutSection = () => {
    const skills = [
        {skillName: "React", color: "#50B9A6"}, {skillName: "JavaScript", color: "#50B9A6"},
        {skillName: "TypeScript", color: "#50B9A6"}, {skillName: "C#", color: "#50B9A6"},
        {skillName: "TailwindCSS", color: "#50B9A6"}, {skillName: "HTML", color: "#50B9A6"},
        {skillName: "CSS", color: "#50B9A6"}, {skillName: "Bootstrap", color: "#50B9A6"},
        {skillName: "MaterialUI", color: "#50B9A6"}, {skillName: "RadixUI", color: "#50B9A6"},
        {skillName: "GIT", color: "#50B9A6"},
        {skillName: "Playwright", color: "#50B9A6"}, {skillName: "Vitest", color: "#50B9A6"},
        {skillName: "OOP", color: "#50B9A6"}, {skillName: "SOLID", color: "#50B9A6"},

        {skillName: "react-query", color: "#F4BB44"}, {skillName: "Apollo", color: "#F4BB44"},
        {skillName: "Framer Motion", color: "#F4BB44"},

        {skillName: "MobX", color: "#50B9A6"}, {skillName: "Redux", color: "#F4BB44"},
        {skillName: "Jotai", color: "#50B9A6"},{skillName: "Zustand", color: "#50B9A6"},

        {skillName: "ChatGPT", color: "#50B9A6"}, {skillName: "Google Gemini", color: "#50B9A6"}
    ]

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