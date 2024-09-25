import React, {useEffect, useRef, useState} from 'react';

interface PopoverProps {
    children: React.ReactNode;
    title: string;
    description: string;
    linkToWiki: string;
    img: string;
}

const Popover: React.FC<PopoverProps> = ({children, title, description, linkToWiki, img}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [position, setPosition] = useState<'left' | 'right'>('right');
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculatePosition = () => {
            if (triggerRef.current) {
                const triggerRect = triggerRef.current.getBoundingClientRect();

                // Determine if the popover would go off-screen
                if (window.innerWidth > 900) {
                    if (triggerRect.left > 410) {
                        setPosition('left');
                    } else if(triggerRect.left < 410) {
                        setPosition('right');
                    }
                }
                if (window.innerWidth <= 900 && window.innerWidth >= 639) {
                    if (triggerRect.left >= 370) {
                        setPosition('left');
                    } else if(triggerRect.left < 370) {
                        setPosition('right');
                    }
                }
                if (window.innerWidth < 639) {
                    if (triggerRect.left >= 370) {
                        setPosition('left');
                    } else if(triggerRect.left < 370) {
                        setPosition('right');
                    }
                }
            }
        };
        calculatePosition();
    }, [position]);
    return (
        <div className="relative inline-block">
            <div ref={triggerRef}
                 onMouseEnter={() => setIsVisible(true)}
                 onMouseLeave={() => setIsVisible(false)}
                 className="text-sm md:text-base lg:text-lg"
            >
                {children}
            </div>
            {isVisible && (
                <div
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    className={`absolute ${position === "left" && "bottom-full sm:right-5"} ${position === "right" && "sm:left-2 bottom-full"} z-10 w-32 sm:w-80 lg:w-96 h-auto text-sm text-white bg-white rounded-md shadow-lg`}
                >
                    <div className="flex justify-between h-auto items-center">
                        <div className="col-span-3 p-3">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-xs sm:text-sm text-black">{title}</h3>
                                <p className={"text-xxs sm:text-xs text-gray-900 text-left"}>{description}</p>
                                <a target="_blank" href={linkToWiki}
                                   className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read
                                    more </a>
                            </div>
                        </div>
                        <img src={img} className="w-2/4 h-3/4 rounded-lg p-1 hidden md:flex" alt="Popover Image"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popover;