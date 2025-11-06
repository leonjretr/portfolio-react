import PageWrapper from "../wrappers/PageWrapper.tsx";
import MosaicGallery from "../gallery/MosaicGallery.tsx";

const BlogPage = () => {
    return (
        <div className={"min-h-screen bg-white dark:bg-bgDarkColor scroll-smooth"}>
            <PageWrapper>
                <div className={"flex flex-col items-center justify-center text-3xl font-bold font-interFont dark:text-white m-5"}>
                    Im
                    {/*<p> they may not be great, but I feel that they reflect my thought, my vision and myself. </p>*/}
                </div>
                <MosaicGallery/>
            </PageWrapper>
        </div>
    );
};

export default BlogPage;