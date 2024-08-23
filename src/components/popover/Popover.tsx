import React, {useState} from 'react';

interface PopoverProps {
    children: React.ReactNode;
    title: string;
    description: string;
    linkToWiki: string;
}

const Popover: React.FC<PopoverProps> = ({children, title, description, linkToWiki}) => {
    const [isVisible, setIsVisible] = useState(false);
    const uni = new URL("/imgs/hneu1.jpg", import.meta.url).href;
    return (
        <div className="relative inline-block">
            <div
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
                    className="absolute z-10 w-32 sm:w-80 lg:w-96 h-auto bottom-full text-sm text-white bg-white rounded-md shadow-lg">
                    <div className="flex justify-between h-auto">
                        <div className="col-span-3 p-3">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-xs sm:text-sm text-black dark:text-white">{title}</h3>
                                <p className={"text-xs sm:text-sm text-gray-900 text-left"}>{description}</p>
                                <a target="_blank" href={linkToWiki}
                                   className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read
                                    more </a>
                            </div>
                        </div>
                        <img src={uni} className="w-2/4 h-full rounded-lg p-1 hidden md:flex" alt="Popover Image"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popover;
// <svg className="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true"
//      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//     <path stroke="currentColor" d="m1 9 4-4-4-4"/>
// </svg>

// Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is
// also considered part of Western Europe. A unitary parliamentary republic with Rome
//     as its capital and largest city.

// <a href="#"
//    className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read
//     more
// </a>


// <div
//     className="absolute z-10 w-full p-4 bottom-full text-sm text-white bg-gray-800 rounded shadow-lg transition-opacity duration-300 border border-gray-200 opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
//     <div className="grid grid-cols-5">
//         <div className="col-span-3 p-3">
//             <div className="space-y-2">
//                 <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
//                 <p>{description}</p>
//             </div>
//         </div>
//         <img src={uni} className="h-full col-span-2" alt="Italy map"/>
//     </div>
// </div>