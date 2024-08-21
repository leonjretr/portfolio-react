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
            <img className="rounded-t-lg" src={image} alt="Project1"/>
            <div className="p-3 mob2:p-5">
                <h5 className="mb-2 text-base mob3:text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 text-xxs mob1:text-xs mob3:text-base font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <motion.button
                    onClick={openModal}
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.9}}
                    className="inline-flex text-xs md:text-sm items-center px-3 py-2 font-medium text-center text-white bg-gradient-to-tr from-green-500 to-pink-500 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-green-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Tap to learn more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
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
                        <img className={"rounded-lg w-5/6 h-full"} src={image} alt={"Project Image"}/>
                    </div>
                    <h2 className="flex justify-center text-base text-center text-black font-poppinsFont font-bold break-keep mb-2">
                        {internalTitle}
                        {/*<img className={"w-6 h-6"} src={coinUrl} alt={"Coin"}/>*/}
                    </h2>
                    <h2 className="flex justify-center text-sm text-justify text-black font-poppinsFont font-medium break-keep mb-2">
                        {deepDescription}
                        {/*<img className={"w-6 h-6"} src={coinUrl} alt={"Coin"}/>*/}
                    </h2>
                    <div className={"animate-bounce mt-3"}>
                        <SocialLinkButton icon={<FaGithub/>} link={GITHUB_LINK}/>
                    </div>

                    {/*<h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-2">*/}
                    {/*    Do you want to start this task?*/}
                    {/*</h2>*/}

                    {/*<motion.button*/}
                    {/*    whileTap={{scale: 0.9}}*/}
                    {/*    onClick={closeModal}*/}
                    {/*    className="w-auto px-4 py-2 bg-red-500 text-white text-center rounded-md hover:bg-red-600 active:ring active:ring-gray-400 font-medium">*/}
                    {/*    Close*/}
                    {/*</motion.button>*/}
                </ModalProjectCard>

            </div>
        </div>


    );
};

export default ProjectCard;