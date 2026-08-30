export interface Skill {
    skillName: string;
    color: string;
}

export interface SkillGroup {
    label: string;
    skills: Skill[];
}

const chip = (skillName: string): Skill => ({skillName, color: "bg-greenNew"});

export const skillGroups: SkillGroup[] = [
    {
        label: "main",
        skills: [
            chip("React"),
            chip("Next.js"),
            chip("TypeScript"),
            chip("JavaScript"),
            chip("Tailwind CSS"),
            chip("Framer Motion"),
        ],
    },
    {
        label: "other",
        skills: [
            chip("MobX"),
            chip("Zustand"),
            chip("PostgreSQL"),
            chip("MySQL"),
            chip("Drizzle ORM"),
            chip("Zod"),
        ],
    },
    {
        label: "useful",
        skills: [
            chip("Git"),
            chip("Claude Code"),
        ],
    },
];

export const skills: Skill[] = skillGroups.flatMap((g) => g.skills);
