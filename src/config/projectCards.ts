const projImg1 = new URL("/imgs/portfolio1.png", import.meta.url).href;
const projImg2 = new URL("/imgs/traffix2.png", import.meta.url).href;

export const projectCards = [
    {
        title: "Portfolio website",
        description: "My personal landing page to showcase my skills and experience",
        deepDescription: "Personal landing page was my first pet project ever.",
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
    }
]