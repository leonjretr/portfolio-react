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
        <div className={"min-h-screen h-screen scroll-smooth"}>
            <PageWrapper>
                <div id={"home"}>
                    <IntroductionSection/>
                </div>
                <PhotoSection/>

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