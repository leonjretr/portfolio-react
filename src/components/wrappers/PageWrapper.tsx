import {FC, ReactNode} from "react";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import Headroom from "react-headroom";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <>
            <Headroom>
                <Header/>
            </Headroom>
            {children}
            <Footer/>
        </>
    );
};

export default PageWrapper;