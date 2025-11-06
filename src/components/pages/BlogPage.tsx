import PageWrapper from "../wrappers/PageWrapper.tsx";
import MosaicGallery from "../gallery/MosaicGallery.tsx";

const BlogPage = () => {
    return (
        <div className={"min-h-screen bg-white dark:bg-bgDarkColor scroll-smooth"}>
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