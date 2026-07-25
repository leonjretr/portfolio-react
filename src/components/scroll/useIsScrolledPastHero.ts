import {useEffect, useState} from "react";

const useIsScrolledPastHero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const heroEl = document.getElementById("home");

        if (!heroEl) {
            setIsScrolled(true);
            return;
        }

        const threshold = heroEl.offsetHeight - 80;

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > threshold);
                ticking = false;
            });
        };
        onScroll();

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return isScrolled;
};

export default useIsScrolledPastHero;
