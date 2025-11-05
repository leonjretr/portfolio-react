import PageWrapper from "../wrappers/PageWrapper.tsx";
import MosaicGallery from "../gallery/MosaicGallery.tsx";

const BlogPage = () => {
    return (
        <div className={"min-h-screen bg-white dark:bg-bgDarkColor scroll-smooth " +
            "relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.03] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]"}>
            <PageWrapper>
                <div className={"flex justify-center text-4xl font-bold font-interFont dark:text-white m-5"}>
                    Every image has its story✨
                </div>
                <MosaicGallery/>
            </PageWrapper>
        </div>
    );
};

export default BlogPage;