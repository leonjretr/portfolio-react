import PageWrapper from "../wrappers/PageWrapper.tsx";
import HorizontalDivider from "../dividers/HorizontalDivider.tsx";
import AboutSection from "../sections/AboutSection.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";
import ContactSection from "../sections/ContactSection.tsx";
import ToastStore from "../../stores/ToastStore.ts";
import {observer} from "mobx-react-lite";
import Toast from "../toasts/Toast.tsx";
import {motion} from "framer-motion";

const MainPage = observer(() => {
    return (
        <div className={"min-h-screen scroll-smooth"}>
            <PageWrapper>
                <div id={"home"} className={"relative h-screen w-full overflow-hidden"}>
                    <picture>
                        <source media={"(min-width: 768px)"} srcSet={"img072.jpg"}/>
                        <img
                            src={"img048.jpg"}
                            alt={"home background"}
                            className={"absolute inset-0 h-full w-full object-cover"}
                        />
                    </picture>
                    <div className={"absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"}/>

                    <div
                        className={"absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"}>
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            className={"font-poppinsFont text-5xl font-medium md:text-7xl"}>
                            LEONID SV.
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.15}}
                            className={"font-niceFont mt-3 text-lg italic text-white/90 md:text-2xl"}>
                            сapturing light. сrafting code.
                        </motion.p>
                    </div>
                </div>

                <div className={"scroll-smooth mt-5"} id={"projects"}>
                    <ProjectSection/>
                </div>

                <HorizontalDivider/>

                <div className={"scroll-smooth"} id={"about"}>
                    <AboutSection/>
                </div>

                <HorizontalDivider/>

                <div className={"scroll-smooth"} id={"contact"}>
                    <ContactSection/>
                </div>

                <div className={"flex"}>
                    {ToastStore.showToast && <Toast/>}
                </div>
            </PageWrapper>
        </div>
    );
});

export default MainPage;