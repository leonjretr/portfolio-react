export default function MarqueeLoop({text, speed = 2, styling}: {
    text: string;
    speed?: number;
    styling: string;
}) {
    return (
        <div className="overflow-hidden relative whitespace-nowrap text-white text-3xl">
            <div
                className={`flex ${styling}`}
                style={{animationDuration: `${speed}s`}}
            >
                <h1 className="mx-2">{text}</h1>
                <h1 className="mx-2">{text}</h1>
            </div>
        </div>
    );
}