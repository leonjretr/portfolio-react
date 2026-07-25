import PageWrapper from "../wrappers/PageWrapper.tsx";
import MosaicGallery from "../gallery/MosaicGallery.tsx";

const BlogPage = () => {
    return (
        <div className={"min-h-screen bg-creamColor text-textWarm dark:bg-bgDarkColor dark:text-white scroll-smooth"}>
            <PageWrapper>
                <div id={"bloghome"} className={"flex flex-col items-center justify-center pt-28 text-3xl font-bold font-interFont m-5"}>
                    Every image has its story✨
                    {/*<p> they may not be great, but I feel that they reflect my thought, my vision and myself. </p>*/}
                </div>
                <MosaicGallery/>
            </PageWrapper>
        </div>
    );
};

export default BlogPage;