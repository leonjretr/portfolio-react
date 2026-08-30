import SkillPlate from "../skillplate/SkillPlate.tsx";
import {skillGroups} from "../../config/skills.ts";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const SkillRack = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            {skillGroups.map((group, gi) => (
                <ScrollReveal key={group.label} variant="right" delay={gi * 0.1} amount={0.4}>
                    <div className="grid items-start gap-2 sm:grid-cols-[132px_1fr] sm:gap-4">
                        <div className="flex items-center gap-1.5">
                            <span className="whitespace-nowrap font-terminalFont text-xs uppercase tracking-[0.16em] text-textWarm/70 dark:text-white/70">
                                {group.label}
                            </span>
                            <span className="font-terminalFont text-xs text-greenNew">/</span>
                            <span className="hidden h-px flex-1 bg-textWarm/15 dark:bg-white/15 sm:block"/>
                        </div>

                        <div className="flex flex-wrap gap-2.5 py-1 select-none">
                            {group.skills.map((skill) => (
                                <SkillPlate key={skill.skillName} skillTitle={skill.skillName} color={skill.color}/>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
};

export default SkillRack;
