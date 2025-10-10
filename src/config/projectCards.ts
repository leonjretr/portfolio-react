const projImg1 = new URL("/imgs/portfolio1.png", import.meta.url).href;
const projImg2 = new URL("/imgs/traffix2.png", import.meta.url).href;
const projImg3 = new URL("/imgs/inktells.png", import.meta.url).href;

export const projectCards = [
    {
        title: "Portfolio website",
        description: "My personal landing page to showcase my skills and experience",
        deepDescription: "Personal landing page was my first pet project ever!😱 I tried to incorporate " +
            "maximum amount of features that I'd learnt in order to showcase my skills and experience🔥🤓 " +
            "Popups, animations, terminal(which I find quaint and extraordinary) and much-much more!",
        internalTitle: "Personal landing page",
        image: projImg1
    },
    {
        title: "TraffiX - web app",
        description: "A modern web app that targets Telegram Mini Apps mobile platform",
        deepDescription: "TraffiX is a clicker web game on Telegram platform" +
            " which became my second pet project, though at first it meant to be commercial." +
            " It was made by my friend and me, I was responsible for front-end part.",
        internalTitle: "Revolutionary web app",
        image: projImg2
    },
    {
        title: "Inktells",
        internalTitle: "Inktells - place that connects",
        description: "Inktells - a special place for readers to connect and share their hobby",
        deepDescription: "Inktells is website that allows readers all around the world to " +
            "share their passion for books and stories. It enables any person to register and " +
            "publish their own story on the website and spread the useful habit of reading.",
        image: projImg3
    }
]