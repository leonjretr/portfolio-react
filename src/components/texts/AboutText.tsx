import Popover from "../popover/Popover.tsx";

const AboutText = () => {
    const uni = new URL("/imgs/hneu1.jpg", import.meta.url).href;
    const project3D = new URL("/imgs/3dproject.jpg", import.meta.url).href;
    const leonidas = new URL("/imgs/Leonidas.webp", import.meta.url).href;
    return (
        <div className={"text-justify font-poppinsFont text-sm md:text-base lg:text-lg font-medium dark:font-normal"}>
            Howdy stranger!🤠 My name is <Popover
            title={"Leonidas I"}
            description={"Leonidas was a Spartan king whose stand against the invading Persian army " +
                "at the pass of Thermopylae" +
                "is one of the enduring tales of heroism, " +
                "invoked as the epitome of bravery " +
                "exhibited against overwhelming odds."
            }
            img={leonidas}
            linkToWiki={"https://www.britannica.com/biography/Leonidas-king-of-Sparta"}
        >
            <span className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600 cursor-pointer"}>
                 Leonid
            </span>
        </Popover>, I’m a front-end developer and a Simon Kuznets Kharkiv National <Popover
            img={uni}
            linkToWiki={"https://www.google.com/search?q=Kharkiv+National+University+of+Economics"}
            title={"About university"}
            description={"KNUE is the largest economic higher educational and research institution in Eastern Ukraine. Follow the link below:"}>
            <span className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600 cursor-pointer"}>
                 University of Economics
            </span>
        </Popover> graduate in Computer Science.
            I have always been interested in technology and have tried many various areas
            such as game development on Unity and <Popover
            img={project3D}
            linkToWiki={"https://www.google.com/search?q=3dsMax"}
            title={"My experience"}
            description={`I did game dev for 2 years and 3D modelling for 1.5 years. Follow the link below:`}>
            <div className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600 cursor-pointer"}>
                3D modelling
            </div>
        </Popover> in 3dsMax. Moreover, I've tried many programming languages such as <span
            className={"text-green-600 font-semibold dark:text-cyan-500"}>Python, C++, C#, JavaScript and even Visual Basic. </span>
            For the past 6 months, I’ve been focusing on React and web development,
            and my primary goal is a <span className={"text-green-600 font-semibold dark:text-cyan-500"}>React developer role</span> on
            an interesting and challenging project that will allow me to grow and expand my professional horizons!
        </div>
    );
};

export default AboutText;