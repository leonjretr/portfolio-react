import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import ModalProjectCard from "../modals/ModalProjectCard.tsx";
import SocialLinkButton from "../buttons/SocialLinkButton.tsx";
import {FaGithub} from "react-icons/fa";
import {GITHUB_LINK} from "../../config/constants.ts";

interface ProjectCardProps {
    image?: string;
    title: string;
    description: string;
    deepDescription: string;
    internalTitle?: string;
}

const CORNER_CLASSES = [
    "left-2.5 top-2.5 border-l-2 border-t-2",
    "right-2.5 top-2.5 border-r-2 border-t-2",
    "bottom-2.5 left-2.5 border-b-2 border-l-2",
    "bottom-2.5 right-2.5 border-b-2 border-r-2",
];

const Dots: FC = () => (
    <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-greenNew"/>
        <span className="h-2 w-2 rounded-full bg-creamColor/25"/>
        <span className="h-2 w-2 rounded-full bg-creamColor/25"/>
    </div>
);

const TerminalBar: FC<{ filename: string }> = ({filename}) => (
    <div className="flex items-center justify-between bg-bgDarkColor px-4 py-2 text-creamColor">
        <Dots/>
        <span className="font-terminalFont text-xxs tracking-wide opacity-75">{filename}</span>
    </div>
);

const toSlug = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

const ProjectCard: FC<ProjectCardProps> = ({title, description, deepDescription, internalTitle, image}) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => setIsModalOpened(true);
    const closeModal = () => setIsModalOpened(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isModalOpened);
    }, [isModalOpened]);

    const filename = `${toSlug(internalTitle || title)}.raw`;

    return (
        <motion.div
            whileHover={{y: -6}}
            transition={{duration: 0.25}}
            className="group max-w-48 mob3:max-w-52 md:max-w-sm overflow-hidden rounded-lg border border-textWarm/10 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-bgDarkColorSoft">
            <TerminalBar filename={filename}/>
            <div className="relative aspect-[9/4] w-full overflow-hidden bg-bgDarkColor">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                     src={image} alt={title}/>
                {CORNER_CLASSES.map((cornerClass) => (
                    <span key={cornerClass}
                          className={`absolute h-4 w-4 border-greenNew opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${cornerClass}`}/>
                ))}
                <span
                    className="absolute inset-x-0 top-0 h-0.5 bg-greenNew opacity-100 shadow-[0_0_8px] shadow-greenNew transition-all duration-700 group-hover:translate-y-full group-hover:opacity-0"/>
            </div>
            <div className="p-3 mob2:p-5">
                <h5 className="mb-2 text-base mob3:text-lg lg:text-2xl font-interFont font-bold tracking-tight text-textWarm dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-terminalFont text-xs mob1:text-sm mob3:text-base text-textWarm/70 dark:text-gray-400">
                    // {description}
                </p>
                <motion.button
                    onClick={openModal}
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.9}}
                    className="border-b border-transparent font-terminalFont text-xs text-greenDark transition-colors group-hover:border-greenDark dark:text-greenNew dark:group-hover:border-greenNew md:text-sm">
                    &gt; open_file()
                </motion.button>
                <ModalProjectCard showModal={isModalOpened} closeModal={closeModal}>
                    <motion.button
                        whileTap={{scale: 1.3}}
                        onClick={closeModal}
                        className="float-right -mr-1 -mt-1 flex place-items-center pb-1 text-3xl font-sans font-medium text-textWarm/60 hover:text-textWarm dark:text-white/60 dark:hover:text-white">
                        &times;
                    </motion.button>
                    <p className="mb-1 font-terminalFont text-xxs uppercase tracking-wide text-greenDark dark:text-greenNew">
                        {filename}
                    </p>
                    <h2 className="mb-3 text-xl text-center font-poppinsFont font-semibold">
                        {title}
                    </h2>
                    <div className={"mb-3 flex justify-center overflow-hidden rounded-lg bg-black/5 dark:bg-black/30"}>
                        <img className={"h-auto max-h-[50vh] w-full object-contain"} src={image} alt={"Project Image"}/>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h2 className="flex justify-center text-base text-center font-poppinsFont font-bold break-keep mb-2">
                            {internalTitle}
                        </h2>
                        <h2 className="flex justify-center text-sm text-justify max-w-screen-mob2 font-poppinsFont font-medium break-keep mb-2 text-textWarm/80 dark:text-white/80">
                            {deepDescription}
                        </h2>
                        <div className={"animate-bounce mt-3 text-greenNew"}>
                            <SocialLinkButton icon={<FaGithub/>} link={GITHUB_LINK}/>
                        </div>
                    </div>
                </ModalProjectCard>
            </div>
        </motion.div>
    );
};

export default ProjectCard;