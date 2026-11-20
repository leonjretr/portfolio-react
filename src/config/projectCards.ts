import {IconType} from "react-icons";
import {FaGithub, FaGlobe} from "react-icons/fa";
import {GITHUB_LINK} from "./constants.ts";
import {PROJECT_SLUGS} from "./projectSlugs.ts";

export type ProjectLink = {
    href: string;
    icon: IconType;
    label: string;
};

export type ProjectScreenshot = {
    src: string;
    alt: string;
};

export type CaseStudy = {
    role?: string;
    year?: string;
    stack?: string[];
    challenges?: string[];
    results?: string[];
    screenshots?: ProjectScreenshot[];
};

export type Project = {
    title: string;
    slug: string;
    internalTitle?: string;
    description: string;
    deepDescription: string;
    image: string;
    link: ProjectLink;
    caseStudy?: CaseStudy;
};

const GITHUB_PROJECT_LINK: ProjectLink = {href: GITHUB_LINK, icon: FaGithub, label: "source code"};

const treadfireImg = new URL("/imgs/treadfire-hero.png", import.meta.url).href;
const thingsTalkImg = new URL("/imgs/things-talk.png", import.meta.url).href;
const inktellsImg = new URL("/imgs/inktells.png", import.meta.url).href;
const portfolioImg = new URL("/imgs/portfolio1.png", import.meta.url).href;
const traffixImg = new URL("/imgs/traffix2.png", import.meta.url).href;

export const projectCards: Project[] = [
    {
        title: "Treadfire",
        slug: PROJECT_SLUGS.TREADFIRE,
        internalTitle: "Cover breaks. Skill wins.",
        description: "Official website for Treadfire - an online PvP tank shooter",
        deepDescription: "Treadfire is the official promotional website for an upcoming online PvP tank " +
            "arcade shooter by indie studio Chaotex, heading to Steam. Built to hype the launch, it features " +
            "HUD-style gameplay overlays, a countdown to the demo, a playtest sign-up, community polls and " +
            "a development roadmap. I designed and built the website, and it keeps growing together with " +
            "the game - new trailers are on the way.",
        image: treadfireImg,
        link: {href: "https://treadfire.chaotex.games/", icon: FaGlobe, label: "visit website"},
        caseStudy: {
            role: "Designer & developer",
        }
    },
    {
        title: "Things Talk",
        slug: PROJECT_SLUGS.THINGS_TALK,
        internalTitle: "things fade. stories don't",
        description: "A place for people to share stories that matter",
        deepDescription: "Things Talk is website that allows any person to " +
            "share emotions and thoughts that their things give them. Whether it is a camera your granddad gifted to you, " +
            "first car you bought or just a receipt from 2010 - it doesn't matter. Things fade. Stories don't.",
        image: thingsTalkImg,
        link: GITHUB_PROJECT_LINK
    },
    {
        title: "Inktells",
        slug: PROJECT_SLUGS.INKTELLS,
        internalTitle: "Inktells - place that connects",
        description: "Inktells - a special place for readers to connect and share their hobby",
        deepDescription: "Inktells is website that allows readers all around the world to " +
            "share their passion for books and stories. It enables any person to register and " +
            "publish their own story on the website and spread the useful habit of reading.",
        image: inktellsImg,
        link: GITHUB_PROJECT_LINK
    },
    {
        title: "Portfolio website",
        slug: PROJECT_SLUGS.PORTFOLIO,
        internalTitle: "Personal landing page",
        description: "My personal landing page to showcase my skills and experience",
        deepDescription: "Personal landing page was my first pet project ever!😱 I tried to incorporate " +
            "maximum amount of features that I'd learnt in order to showcase my skills and experience🔥🤓 " +
            "Popups, animations, terminal(which I find quaint and extraordinary) and much-much more!",
        image: portfolioImg,
        link: GITHUB_PROJECT_LINK,
        caseStudy: {
            stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "MobX", "Framer Motion"],
        }
    },
    {
        title: "TraffiX - web app",
        slug: PROJECT_SLUGS.TRAFFIX,
        internalTitle: "Revolutionary web app",
        description: "A modern web app that targets Telegram Mini Apps mobile platform",
        deepDescription: "TraffiX is a clicker web game on Telegram platform" +
            " which became my second pet project, though at first it meant to be commercial." +
            " It was made by my friend and me, I was responsible for front-end part.",
        image: traffixImg,
        link: GITHUB_PROJECT_LINK,
        caseStudy: {
            role: "Front-end developer",
        }
    }
];
