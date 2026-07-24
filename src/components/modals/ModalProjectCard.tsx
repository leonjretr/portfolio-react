import React, {FC} from "react";
import {createPortal} from "react-dom";
import {AnimatePresence, motion} from "framer-motion";

interface ProjectCardModalProps {
    showModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const ModalProjectCard: FC<ProjectCardModalProps> = ({showModal, closeModal, children}) => {
    return createPortal(
        <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 mob3:p-8">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}/>
                    <motion.div
                        initial={{opacity: 0, scale: 0.92, y: 12}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.92, y: 12}}
                        transition={{type: "spring", stiffness: 300, damping: 28}}
                        className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl bg-creamColor p-5 text-center text-textWarm shadow-2xl dark:bg-bgDarkColorSoft dark:text-white">
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ModalProjectCard;
