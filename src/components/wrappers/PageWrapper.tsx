import {FC, ReactNode} from "react";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import HamburgerStore from "../../stores/HamburgerStore.ts";
import {observer} from "mobx-react-lite";
import HamburgerMenu from "../menus/HamburgerMenu.tsx";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = observer(({children}) => {
    return (
        <>
            <Header/>
            {HamburgerStore.isOpen &&
                <div className={"text-left"}><HamburgerMenu/></div>
            }
            {children}
            <Footer/>
        </>
    );
});

export default PageWrapper;