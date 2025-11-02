import {AnimatePresence} from "framer-motion";
import {Route, Routes} from "react-router";
import MainPage from "../pages/MainPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";

const MyRouting = () => {
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default MyRouting;