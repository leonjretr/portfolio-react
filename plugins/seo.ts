import {HtmlTagDescriptor, Plugin} from "vite";
import {generatePath} from "react-router";
import {SITE} from "../src/config/site.ts";
import {ROUTES} from "../src/config/routes.ts";
import {PROJECT_SLUGS} from "../src/config/projectSlugs.ts";

type SeoOptions = {
    sameAs: string[];
};

const SEO_FILES = {
    ROBOTS: "robots.txt",
    SITEMAP: "sitemap.xml",
};

const toAbsoluteUrl = (path: string) => `${SITE.URL}${path}`;

const meta = (key: "name" | "property", value: string, content: string | number): HtmlTagDescriptor => ({
    tag: "meta",
    attrs: {[key]: value, content: String(content)},
    injectTo: "head",
});

const buildPersonSchema = (sameAs: string[]) => JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.NAME,
    url: SITE.URL,
    jobTitle: SITE.JOB_TITLE,
    image: toAbsoluteUrl(SITE.OG_IMAGE.PATH),
    sameAs,
});

const buildHeadTags = (sameAs: string[]): HtmlTagDescriptor[] => {
    const image = toAbsoluteUrl(SITE.OG_IMAGE.PATH);
    const url = toAbsoluteUrl(ROUTES.HOME);

    return [
        {tag: "title", children: SITE.TITLE, injectTo: "head"},
        meta("name", "description", SITE.DESCRIPTION),
        meta("name", "theme-color", SITE.THEME_COLOR),
        {tag: "link", attrs: {rel: "canonical", href: url}, injectTo: "head"},
        meta("property", "og:type", "website"),
        meta("property", "og:site_name", SITE.NAME),
        meta("property", "og:locale", SITE.LOCALE),
        meta("property", "og:url", url),
        meta("property", "og:title", SITE.TITLE),
        meta("property", "og:description", SITE.DESCRIPTION),
        meta("property", "og:image", image),
        meta("property", "og:image:width", SITE.OG_IMAGE.WIDTH),
        meta("property", "og:image:height", SITE.OG_IMAGE.HEIGHT),
        meta("property", "og:image:alt", SITE.TITLE),
        meta("name", "twitter:card", "summary_large_image"),
        meta("name", "twitter:title", SITE.TITLE),
        meta("name", "twitter:description", SITE.DESCRIPTION),
        meta("name", "twitter:image", image),
        {tag: "script", attrs: {type: "application/ld+json"}, children: buildPersonSchema(sameAs), injectTo: "head"},
    ];
};

const buildSitemap = () => {
    const paths = [
        ROUTES.HOME,
        ROUTES.BLOG,
        ...Object.values(PROJECT_SLUGS).map((slug) => generatePath(ROUTES.PROJECT, {slug})),
    ];
    const urls = paths.map((path) => `  <url><loc>${toAbsoluteUrl(path)}</loc></url>`).join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const buildRobots = () => `User-agent: *
Allow: /

Sitemap: ${toAbsoluteUrl(SEO_FILES.SITEMAP)}
`;

export const seoPlugin = ({sameAs}: SeoOptions): Plugin => ({
    name: "seo",
    transformIndexHtml: () => buildHeadTags(sameAs),
    generateBundle() {
        this.emitFile({type: "asset", fileName: SEO_FILES.SITEMAP, source: buildSitemap()});
        this.emitFile({type: "asset", fileName: SEO_FILES.ROBOTS, source: buildRobots()});
    },
});
