import {useEffect} from "react";
import {useLocation} from "react-router";
import {META_SELECTORS, SITE} from "../../config/site.ts";

type DocumentMeta = {
    title: string;
    description: string;
};

const setHeadAttribute = (selector: string, attribute: string, value: string) =>
    document.head.querySelector(selector)?.setAttribute(attribute, value);

export const useDocumentMeta = ({title, description}: DocumentMeta) => {
    const {pathname} = useLocation();

    useEffect(() => {
        const url = new URL(pathname, SITE.URL).href;

        document.title = title;
        setHeadAttribute(META_SELECTORS.DESCRIPTION, "content", description);
        setHeadAttribute(META_SELECTORS.OG_TITLE, "content", title);
        setHeadAttribute(META_SELECTORS.OG_DESCRIPTION, "content", description);
        setHeadAttribute(META_SELECTORS.OG_URL, "content", url);
        setHeadAttribute(META_SELECTORS.TWITTER_TITLE, "content", title);
        setHeadAttribute(META_SELECTORS.TWITTER_DESCRIPTION, "content", description);
        setHeadAttribute(META_SELECTORS.CANONICAL, "href", url);
    }, [title, description, pathname]);
};
