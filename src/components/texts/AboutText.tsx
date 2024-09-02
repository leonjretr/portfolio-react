import Popover from "../popover/Popover.tsx";

const AboutText = () => {
    const uni = new URL("/imgs/hneu1.jpg", import.meta.url).href;
    const project3D = new URL("/imgs/3dproject.jpg", import.meta.url).href;

    return (
        <div className={"text-justify font-poppinsFont text-sm md:text-base lg:text-lg font-medium dark:font-normal"}>
            I'm fourth year student at Simon Kuznets <Popover
            img={uni}
            linkToWiki={"https://www.google.com/search?q=Kharkiv+National+University+of+Economics"}
            title={"About university"}
            description={"KNUE is the largest economic higher educational and research institution in Eastern Ukraine. Follow the link below:"}>
            <span className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600"}>
                Kharkiv National University of Economics
            </span>
        </Popover>, pursuing a bachelor degree in Computer Science. Due to war outbreak, I had to flee abroad and now
            I’m residing in the UK.
            I have always been interested in technology
            and have tried many various areas such as <Popover
            img={project3D}
            linkToWiki={"https://www.google.com/search?q=3dsMax"}
            title={"My experience"}
            description={"I did game dev for 2 years and 3D modelling for 1.5 years. Here's one of my renders!"}>
            <div className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600"}>
                game development
            </div>
        </Popover> on Unity and <Popover
            img={project3D}
            linkToWiki={"https://www.google.com/search?q=3dsMax"}
            title={"My experience"}
            description={"I did game dev for 2 years and 3D modelling for 1.5 years. Here's one of my renders!"}>
            <div className={"underline text-sm md:text-base lg:text-lg hover:no-underline text-blue-600"}>
                3D modelling
            </div>
        </Popover> in 3dsMax. Moreover, I have tried many programming languages such as <span
            className={"text-green-600 font-semibold dark:text-cyan-500"}>Python, C++, C#, JavaScript and even Visual Basic. </span>
            For the past 6 months, I’ve been focusing on React and web development,
            and my primary goal is a <span className={"text-green-600 font-semibold dark:text-cyan-500"}>React developer role</span> on
            an interesting and challenging project.

        </div>
    );
};

export default AboutText;