import AboutText from "../texts/AboutText.tsx";
import SkillRack from "../about/SkillRack.tsx";
import PortraitFrame from "../about/PortraitFrame.tsx";
import SectionTitle from "../animation/SectionTitle.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const AboutSection = () => {
    return (
        <div className={"mx-auto flex max-w-[1060px] flex-col gap-8 px-6 md:px-8"}>
            <div className={"dark:text-white flex flex-col gap-8"}>
                <SectionTitle kicker="who is behind the lens">biography</SectionTitle>
                <AboutText/>
            </div>

            <div className={"grid grid-cols-1 items-start gap-8 md:grid-cols-[340px_1fr] md:gap-10"}>
                <ScrollReveal variant="left" amount={0.3} className={"flex justify-center md:block"}>
                    <PortraitFrame/>
                </ScrollReveal>
                <div className={"flex flex-col gap-4"}>
                    <span className={"font-terminalFont text-xs uppercase tracking-[0.16em] text-textWarm/70 dark:text-white/70"}>
                        the toolkit
                    </span>
                    <SkillRack/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
