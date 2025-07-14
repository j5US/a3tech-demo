"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedMenuIcon from "../_ui/AnimatedMenuIcon";

export default function CollapsibleMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full h-20 bg-white z-50">
            <div className="flex items-center justify-between h-full px-6 ">
                <h1 className="text-xl font-bold">My Site</h1>
                <button onClick={() => setIsOpen(cur => !cur)} className="p-2">
                    {/* {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
                    <AnimatedMenuIcon isOpen={isOpen}/>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="w-full bg-gray-800 overflow-hidden"
                    >
                        <div
                            className="flex flex-col p-6 space-y-4 text-left text-white scroll-hide"
                            style={{
                                maxHeight: 'calc(100vh - 5rem)', // 5rem = h-20 navbar height
                                overflowY: 'auto',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {Array.from({ length: 30 }, (_, i) => (
                                <button
                                    key={i}
                                    className="text-lg hover:text-gray-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Menu Item {i + 1}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
