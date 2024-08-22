import TextAnimation from "../animation/TextAnimation.tsx";

const IntroductionText = () => {
    const hello = "Hey,".split(" ");
    const hello2 = "I'm Leo".split(" ");
    const hello3 = " - a front-end developer".split(" ");
    return (
        <div className={"font-interFont select-none mx-5"}>
            <TextAnimation classname={"text-4xl md:text-5xl lg:text-7xl font-extrabold"} text={hello}/>
            <TextAnimation classname={"text-6xl md:text-6xl lg:text-8xl my-1 font-extrabold"} text={hello2}/>
            <TextAnimation classname={"text-2xl md:text-3xl lg:text-5xl ml-7 mob1:ml-16 mob3:ml-36 md:ml-40 lg:ml-52 mt-5 font-bold"} text={hello3}/>
        </div>
    );
};

export default IntroductionText;