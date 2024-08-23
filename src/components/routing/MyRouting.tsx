import {AnimatePresence} from "framer-motion";
import {Route, Routes} from "react-router";
import MainPage from "../pages/MainPage.tsx";

const MyRouting = () => {
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default MyRouting;