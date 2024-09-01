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
        <div
            className="max-w-48 mob3:max-w-52 md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className={"flex justify-center"}><img className="rounded-t-lg h-24 p-2 md:h-40 md:p-0 lg:h-40 w-auto"
                                                        src={image} alt="Project1"/></div>
            <div className="p-3 mob2:p-5">
                <h5 className="mb-2 text-base mob3:text-lg lg:text-2xl font-interFont font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 text-xs mob1:text-sm mob3:text-base  font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <motion.button
                    onClick={openModal}
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.9}}
                    className="inline-flex text-xs md:text-sm items-center px-3 py-2 font-medium font-interFont text-center text-white bg-gradient-to-tr from-green-500 to-pink-500 rounded-lg focus:ring-2 focus:outline-none focus:ring-green-400">
                    Tap to learn more
                    <div className={"ml-2 mt-0.5"}>
                        <FaLocationArrow className={"text-sm"}/>
                    </div>
                </motion.button>
                <ModalProjectCard showModal={isModalOpened} closeModal={closeModal}>
                    <motion.button
                        whileTap={{scale: 1.3}}
                        onClick={closeModal}
                        className="flex float-right -mt-5 -mr-2 pb-1 place-items-center text-black text-3xl font-sans font-medium">
                        &times;
                    </motion.button>
                    <h2 className="text-xl text-center text-black font-poppinsFont font-semibold mb-3">
                        {title}
                    </h2>
                    <div className={"flex justify-center mb-3"}>
                        <img className={"rounded-lg h-2/4 w-96"} src={image} alt={"Project Image"}/>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h2 className="flex justify-center text-base text-center text-black font-poppinsFont font-bold break-keep mb-2">
                            {internalTitle}
                        </h2>
                        <h2 className="flex justify-center text-sm text-justify max-w-screen-mob2 text-black font-poppinsFont font-medium break-keep mb-2">
                            {deepDescription}
                        </h2>
                        <div className={"animate-bounce mt-3 dark:text-black"}>
                            <SocialLinkButton icon={<FaGithub/>} link={GITHUB_LINK}/>
                        </div>
                    </div>
                </ModalProjectCard>

            </div>
        </div>


    );
};

export default ProjectCard;