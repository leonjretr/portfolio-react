import {FC, ReactNode} from "react";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default PageWrapper;