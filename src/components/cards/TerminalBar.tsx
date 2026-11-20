type TerminalBarProps = {
    filename: string;
};

const Dots = () => (
    <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-greenNew"/>
        <span className="h-2 w-2 rounded-full bg-creamColor/25"/>
        <span className="h-2 w-2 rounded-full bg-creamColor/25"/>
    </div>
);

export const TerminalBar = ({filename}: TerminalBarProps) => (
    <div className="flex items-center justify-between bg-bgDarkColor px-4 py-2 text-creamColor">
        <Dots/>
        <span className="font-terminalFont text-xxs tracking-wide opacity-75">{filename}</span>
    </div>
);
