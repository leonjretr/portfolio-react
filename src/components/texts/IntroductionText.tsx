import TextAnimation from "../animation/TextAnimation.tsx";

const IntroductionText = () => {
    const hello = "Hey,".split(" ");
    const hello2 = "I'm Leo".split(" ");
    const hello3 = " - a front-end developer".split(" ");
    return (
        <div className={"font-interFont select-none"}>
            <TextAnimation classname={"text-7xl font-extrabold"} text={hello}/>
            <TextAnimation classname={"text-8xl my-1 font-extrabold"} text={hello2}/>
            <TextAnimation classname={"text-5xl ml-52 mt-5 font-bold"} text={hello3}/>
        </div>
    );
};

export default IntroductionText;

{/*<div className={"text-xl"}>*/}
{/*    {hello.map((el, i) => (*/}
{/*        <motion.span*/}
{/*            initial={{opacity: 0}}*/}
{/*            animate={{opacity: 1}}*/}
{/*            transition={{*/}
{/*                duration: 0.25,*/}
{/*                delay: i / 10,*/}
{/*            }}*/}
{/*            key={i}*/}
{/*        >*/}
{/*            {el}{" "}*/}
{/*        </motion.span>*/}
{/*    ))}*/}
{/*</div>*/}
{/*<div className={"text-5xl my-2"}>*/}
{/*    {hello2.map((el, i) => (*/}
{/*        <motion.span*/}
{/*            initial={{opacity: 0}}*/}
{/*            animate={{opacity: 1}}*/}
{/*            transition={{*/}
{/*                duration: 0.35,*/}
{/*                delay: i / 7,*/}
{/*            }}*/}
{/*            key={i}*/}
{/*        >*/}
{/*            {el}{" "}*/}
{/*        </motion.span>*/}
{/*    ))}*/}
{/*</div>*/}