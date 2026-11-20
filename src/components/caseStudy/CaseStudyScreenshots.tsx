import {ProjectScreenshot} from "../../config/projectCards.ts";

type CaseStudyScreenshotsProps = {
    screenshots: ProjectScreenshot[];
};

export const CaseStudyScreenshots = ({screenshots}: CaseStudyScreenshotsProps) => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {screenshots.map((screenshot) => (
            <img
                key={screenshot.src}
                src={screenshot.src}
                alt={screenshot.alt}
                loading="lazy"
                className="w-full rounded-lg border border-textWarm/10 object-cover shadow-md dark:border-white/10"
            />
        ))}
    </div>
);
