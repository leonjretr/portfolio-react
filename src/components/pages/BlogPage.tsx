import PageWrapper from "../wrappers/PageWrapper.tsx";
import MosaicGallery, {Ticks} from "../gallery/MosaicGallery.tsx";

const BlogPage = () => {
    return (
        <div className={"min-h-screen bg-creamColor text-textWarm dark:bg-bgDarkColor dark:text-white scroll-smooth"}>
            <PageWrapper>
                <div id={"bloghome"} className={"flex flex-col items-center justify-center gap-3 pt-28 pb-6 px-5"}>
                    <div className={"font-terminalFont text-[10px] tracking-[4px] opacity-60"}>WANDERING NOTES — VOL. 01</div>
                    <h1 className={"text-center max-w-2xl font-niceFont italic font-normal text-3xl sm:text-4xl"}>
                        Every image has its story
                    </h1>
                    <Ticks count={13}/>
                </div>
                <MosaicGallery/>
            </PageWrapper>
        </div>
    );
};

export default BlogPage;