const GalleryCard = () => {
    const images = [
        "/imgs/carinterior.jpg",
        "/imgs/turkey.jpg",
        "/imgs/bench.jpg",
        "/imgs/carinterior.jpg",
        "/imgs/carme.jpg",
        "/imgs/cemetery.jpg",
        "/imgs/tree.jpg",
        "/imgs/tunnelvenice.jpg",
        "/imgs/house.jpg",
        "/imgs/chatsworth.jpg",
        "/imgs/street.jpg",
        "/imgs/retrome.jpg",
        "/imgs/retrome.jpg",
        "/imgs/turkey.jpg",
    ];
    const layout = [
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-3",
        "row-span-2",
        "row-span-1",
        "row-span-1",
    ];


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[100px] p-4">
            {images.map((src, i) => (
                <button
                    key={i}
                    className={`overflow-hidden rounded-lg ${layout[i % layout.length]} blur-sm hover:blur-none ease-out hover:scale-105 duration-200`}
                >
                    <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </button>
            ))}
        </div>
    );
};
export default GalleryCard;
