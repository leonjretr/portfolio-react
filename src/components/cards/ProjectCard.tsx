import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import ModalProjectCard from "../modals/ModalProjectCard.tsx";
import SocialLinkButton from "../buttons/SocialLinkButton.tsx";
import {FaGithub} from "react-icons/fa";
import {GITHUB_LINK} from "../../config/constants.ts";
import {FaLocationArrow} from "react-icons/fa";

interface ProjectCardProps {
    image?: string;
    title: string;
    description: string;
    deepDescription: string;
    internalTitle?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({title, description, deepDescription, internalTitle, image}) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => {
        setIsModalOpened(true);
    };
    const closeModal = () => {
        setIsModalOpened(false);
    };
    useEffect(() => {
        if (isModalOpened) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isModalOpened]);

    return (
        <motion.div
            whileHover={{y: -6}}
            transition={{duration: 0.25}}
            className="max-w-48 mob3:max-w-52 md:max-w-sm overflow-hidden rounded-lg border border-textWarm/10 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-bgDarkColorSoft">
            <div className={"aspect-[9/4] w-full overflow-hidden"}>
                <img className="h-full w-full object-cover"
                     src={image} alt="Project1"/>
            </div>
            <div className="p-3 mob2:p-5">
                <h5 className="mb-2 text-base mob3:text-lg lg:text-2xl font-interFont font-bold tracking-tight text-textWarm dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 text-xs mob1:text-sm mob3:text-base font-normal text-textWarm/70 dark:text-gray-400">
                    {description}
                </p>
                <motion.button
                    onClick={openModal}
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.9}}
                    className="inline-flex text-xs md:text-sm items-center px-3 py-2 font-medium font-interFont text-center text-white bg-gradient-to-tr from-greenNew to-greenDark rounded-lg focus:ring-2 focus:outline-none focus:ring-greenNew">
                    Tap to learn more
                    <div className={"ml-2 mt-0.5"}>
                        <FaLocationArrow className={"text-sm"}/>
                    </div>
                </motion.button>
                <ModalProjectCard showModal={isModalOpened} closeModal={closeModal}>
                    <motion.button
                        whileTap={{scale: 1.3}}
                        onClick={closeModal}
                        className="float-right -mr-1 -mt-1 flex place-items-center pb-1 text-3xl font-sans font-medium text-textWarm/60 hover:text-textWarm dark:text-white/60 dark:hover:text-white">
                        &times;
                    </motion.button>
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