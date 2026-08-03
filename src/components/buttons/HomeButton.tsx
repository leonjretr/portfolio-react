import {motion} from "framer-motion";
import useScrollNavigate from "../scroll/useScrollNavigate.ts";
import {useLocation, useNavigate} from "react-router";

const TICK_X = [4, 34, 64, 94, 124, 154, 184, 214, 244, 274, 304];

const TickRow = ({y}: { y: number }) => (
    <>
        {TICK_X.map((x, i) => (
            <rect key={x} x={x} y={y} width="10" height="14" rx="2" opacity={i % 3 === 1 ? 0.5 : 1}/>
        ))}
    </>
);

const HomeButton = () => {
    const nav = useScrollNavigate();
    const goTo = useNavigate();
    const location = useLocation();
    const butClick = () => {
        if (location.pathname === "/blog") {
            goTo("/");
            setTimeout(() => nav("home"), 750);
        } else {
            nav("home");
        }
    }
    return (
        <motion.button whileHover={{scale: 1.15}}
                       whileTap={{scale: 0.9}}
                       className="flex items-center p-2 mob2:p-3 md:p-4"
                       onClick={butClick}
                       aria-label="LEO SV."
        >
            <svg width="152" height="44" viewBox="0 0 400 150" className="w-28 mob2:w-32 md:w-36">
                <g className="fill-greenNew">
                    <TickRow y={4}/>
                </g>
                <text x="164" y="98" textAnchor="middle" fontFamily="'Unbounded', sans-serif"
                      fontWeight="800" fontSize="78" letterSpacing="-9" fill="currentColor">
                    LEO SV<tspan className="fill-greenNew">.</tspan>
                </text>
                <g className="fill-greenNew" transform="translate(0,124)">
                    <TickRow y={0}/>
                </g>
            </svg>
        </motion.button>
    );
};

export default HomeButton;
