import IntroductionText from "../texts/IntroductionText.tsx";

const IntroductionSection = () => {
    return (
        <div className={"flex items-center justify-center mr-2 my-5 dark:text-white"}>
                <IntroductionText/>
        </div>
    );
};

export default IntroductionSection;