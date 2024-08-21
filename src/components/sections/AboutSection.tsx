import AboutText from "../texts/AboutText.tsx";

const AboutSection = () => {
    return (
        <div className={"flex flex-col"}>
            <h1 className={"font-interFont text-5xl font-bold text-center mb-6"}>About me</h1>
            <AboutText/>
        </div>
    );
};

export default AboutSection;