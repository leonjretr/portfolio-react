export const SITE = {
    URL: "https://leonsv.com",
    NAME: "Leonid Svietlychnyi",
    TITLE: "Leonid Svietlychnyi — web developer & film photographer",
    DESCRIPTION: "Portfolio of Leonid Svietlychnyi, a React web developer and 35mm film photographer based in the UK. " +
        "Projects, case studies and film photography.",
    JOB_TITLE: "Web developer",
    LOCALE: "en_GB",
    THEME_COLOR: "#221F1F",
    OG_IMAGE: {PATH: "/og-image.jpg", WIDTH: 1200, HEIGHT: 630},
};

export const TITLE_SEPARATOR = " — ";

export const PAGE_META = {
    HOME: {TITLE: SITE.TITLE, DESCRIPTION: SITE.DESCRIPTION},
    BLOG: {
        TITLE: `Gallery${TITLE_SEPARATOR}${SITE.NAME}`,
        DESCRIPTION: "35mm film photography by Leonid Svietlychnyi. Every image has its story.",
    },
};

export const META_SELECTORS = {
    DESCRIPTION: 'meta[name="description"]',
    OG_TITLE: 'meta[property="og:title"]',
    OG_DESCRIPTION: 'meta[property="og:description"]',
    OG_URL: 'meta[property="og:url"]',
    TWITTER_TITLE: 'meta[name="twitter:title"]',
    TWITTER_DESCRIPTION: 'meta[name="twitter:description"]',
    CANONICAL: 'link[rel="canonical"]',
};
