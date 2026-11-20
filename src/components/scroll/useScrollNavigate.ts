import {useCallback} from "react";

const HEADER_OFFSET = 96;

const useScrollNavigate = () => {
    return useCallback((id: string) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                top: element.offsetTop - HEADER_OFFSET,
                behavior: 'smooth',
            });
        }
    }, []);
}

export default useScrollNavigate;
