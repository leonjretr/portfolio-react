import {useLocation, useNavigate} from "react-router";
import useScrollNavigate from "./useScrollNavigate.ts";
import {SectionState} from "./sectionState.ts";
import {ROUTES} from "../../config/routes.ts";

export const useSectionNavigate = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const scrollTo = useScrollNavigate();

    return (section: string) => {
        if (pathname === ROUTES.HOME) {
            scrollTo(section);
            return;
        }

        const state: SectionState = {section};
        navigate(ROUTES.HOME, {state});
    };
};
