import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

interface PopoverProps {
    children: React.ReactNode;
    title: string;
    description: string;
    linkToWiki: string;
    img?: string;
}

const getPopoverWidth = () => {
    if (window.innerWidth < 640) return 128; // w-32
    if (window.innerWidth < 1024) return 320; // sm:w-80
    return 384; // lg:w-96
};

const Popover: React.FC<PopoverProps> = ({children, title, description, linkToWiki, img}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [position, setPosition] = useState<'left' | 'right'>('right');
    const triggerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const calculatePosition = () => {
        if (!triggerRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const width = getPopoverWidth();
        const spaceOnRight = window.innerWidth - triggerRect.right;
        const spaceOnLeft = triggerRect.left;

        if (spaceOnRight >= width) {
            setPosition('right');
        } else if (spaceOnLeft >= width) {
            setPosition('left');
        } else {
            setPosition(spaceOnRight >= spaceOnLeft ? 'right' : 'left');
        }
    };

    useLayoutEffect(() => {
        if (!isVisible) return;
        calculatePosition();

        window.addEventListener('resize', calculatePosition);
        return () => window.removeEventListener('resize', calculatePosition);
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isVisible]);

    return (
        <div className="relative inline-block" ref={wrapperRef}>
            <div ref={triggerRef}
                 onMouseEnter={() => setIsVisible(true)}
                 onMouseLeave={() => setIsVisible(false)}
                 onClick={() => setIsVisible(true)}
                 className="text-sm md:text-base lg:text-lg"
            >
                {children}
            </div>
            {isVisible && (
                <div
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    className={`absolute bottom-full ${position === "left" ? "right-0" : "left-0"} z-10 w-32 sm:w-80 lg:w-96 h-auto overflow-hidden text-sm bg-white rounded-md shadow-lg`}
                >
                    <div className="flex justify-between h-auto items-stretch">
                        <div className="p-3">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-xs sm:text-sm text-black">{title}</h3>
                                <p className={"text-xs text-gray-900 text-left"}>{description}</p>
                                <a target="_blank" href={linkToWiki}
                                   className="flex items-center font-medium text-greenDark hover:text-greenNew dark:text-greenNew dark:hover:text-amateurColor hover:underline">Read
                                    more </a>
                            </div>
                        </div>
                        <img src={img}
                             className="hidden md:block w-32 lg:w-40 shrink-0 aspect-square object-cover"
                             alt="Popover Image"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popover;