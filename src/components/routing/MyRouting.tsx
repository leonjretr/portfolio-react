import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router";
import MainPage from "../pages/MainPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";
import {CaseStudyPage} from "../pages/CaseStudyPage.tsx";
import {ShutterLayout} from "../transition";
import {ROUTES} from "../../config/routes.ts";

const scrollToTop = () => window.scrollTo({top: 0, behavior: "instant"});

const MyRouting = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={scrollToTop}>
            <Routes location={location} key={location.pathname}>
                <Route element={<ShutterLayout/>}>
                    <Route path={ROUTES.HOME} element={<MainPage/>}/>
                    <Route path={ROUTES.BLOG} element={<BlogPage/>}/>
                    <Route path={ROUTES.PROJECT} element={<CaseStudyPage/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default MyRouting;
