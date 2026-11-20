import {useEffect} from "react";
import {useLocation} from "react-router";
import useScrollNavigate from "./useScrollNavigate.ts";
import {isSectionState} from "./sectionState.ts";

export const useSectionArrival = () => {
    const {state} = useLocation();
    const scrollTo = useScrollNavigate();

    useEffect(() => {
        if (isSectionState(state)) {
            scrollTo(state.section);
        }
    }, [state, scrollTo]);
};
