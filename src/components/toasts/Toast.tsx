import ToastStore from "../../stores/ToastStore.ts";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const Toast = observer(() => {
    useEffect(() => {
        const timer = setTimeout(ToastStore.setHideToast, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="toast-simple"
             className="flex fixed top-1 right-1 z-50 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
             role="alert"
        >
            {ToastStore.toastSuccessful ? (
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor"
                          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                </svg>) : (
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>)}
            {ToastStore.toastSuccessful ? (
                <div className="ps-4 text-sm font-normal">Message sent successfully.</div>) : (
                <div className="ps-4 text-sm font-normal">Oops, something went wrong. Please try again</div>)}
        </div>
    );
});

export default Toast;