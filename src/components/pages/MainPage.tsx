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



    // const render = () => {
    //     if (ToastStore.showToast) {
    //         return <Toast/>
    //     }
    // };

    return (
        <div className={"flex flex-col min-h-screen pb-20"}>
            <PageWrapper>
                <IntroductionSection/>
                <PhotoSection/>

                <HorizontalDivider/>

                <AboutSection/>

                <HorizontalDivider/>

                <ProjectSection/>

                <HorizontalDivider/>

                <ContactSection/>

                <div className={"flex"}>
                    {ToastStore.showToast && <Toast/>}
                </div>
            </PageWrapper>
        </div>
    );
});

export default MainPage;