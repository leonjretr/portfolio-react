import Terminal from "../terminal/Terminal.tsx";
import SectionTitle from "../animation/SectionTitle.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const ContactSection = () => {
    return (
        <div className={"flex flex-col gap-6 mb-5 justify-center dark:text-white"}>
            <SectionTitle kicker="say hello">get in touch</SectionTitle>
            <ScrollReveal variant="scale" duration={0.7} amount={0.2} className={"flex justify-center"}>
                <Terminal/>
            </ScrollReveal>
        </div>
    );
};

export default ContactSection;