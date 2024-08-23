import IntroductionSection from "../sections/IntroductionSection.tsx";
import PhotoSection from "../sections/PhotoSection.tsx";
import PageWrapper from "../wrappers/PageWrapper.tsx";
import HorizontalDivider from "../dividers/HorizontalDivider.tsx";
import AboutSection from "../sections/AboutSection.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";
import ContactSection from "../sections/ContactSection.tsx";
import ToastStore from "../../stores/ToastStore.ts";
import {observer} from "mobx-react-lite";
import Toast from "../toasts/Toast.tsx";

const MainPage = observer(() => {
    return (
        <div className={"flex flex-col min-h-screen pb-20 scroll-smooth"}>
            <PageWrapper>
                <div id={"home"}>
                    <IntroductionSection/>
                    <PhotoSection/>
                </div>

                <HorizontalDivider/>

                <div className={"scroll-smooth"} id={"about"}>
                    <AboutSection/>
                </div>

                <HorizontalDivider/>

                <div className={"scroll-smooth"} id={"projects"}>
                    <ProjectSection/>
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