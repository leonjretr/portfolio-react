type CaseStudyListProps = {
    items: string[];
};

export const CaseStudyList = ({items}: CaseStudyListProps) => (
    <ul className="flex flex-col gap-3">
        {items.map((item) => (
            <li key={item} className="flex gap-3">
                <span className="font-terminalFont text-greenDark dark:text-greenNew">&gt;</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);
