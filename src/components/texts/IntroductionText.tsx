import TextAnimation from "../animation/TextAnimation.tsx";

const IntroductionText = () => {
    const hello = "Hey,".split(" ");
    const hello2 = "I'm Leo".split(" ");
    const hello3 = " - a front-end developer".split(" ");
    return (
        <div className={"font-interFont dark:font-poppinsFont select-none mx-5"}>
            <TextAnimation classname={"text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold dark:font-medium"} text={hello}/>
            <TextAnimation classname={"text-6xl md:text-6xl lg:text-7xl xl:text-8xl my-1 font-extrabold dark:font-medium"} text={hello2}/>
            <TextAnimation classname={"text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:lg:text-3xl dark:xl:text-4xl ml-3 mob1:ml-16 mob3:ml-36 md:ml-40 lg:ml-52 mt-5 font-bold"} text={hello3}/>
        </div>
    );
};

export default IntroductionText;