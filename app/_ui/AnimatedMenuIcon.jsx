"use client";

import { motion } from "framer-motion";

function AnimatedMenuIcon({ isOpen }) {

    return (
        <>
            <div className="size-[44px] flex-none overdlow-hidden relative">
                {/*     <div className="bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(62.5%-1px)] rounded-[10px]">

                </div>
                <div className="bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(37.5%-1px)] rounded-[10px]">

                </div>

                <div className="bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(50%-1px)] rounded-[50%/500%] [transform:rotate(-48deg)]">

                </div>
                <div className="bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(50%-1px)] rounded-[50%/500%] [transform:rotate(48deg)]">

                </div> */}

                <motion.div
                    className={`bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(62.5%-1px)] rounded-[10px] will-change-transform [transform-origin:50%_50%_0]`}
                    animate={{
                        top: isOpen ? 'calc(50% - 1px)' : 'calc(62.5% - 1px)',
                        borderRadius: isOpen ? '50% / 500%' : '10px',
                        rotate: isOpen ? -48 : 0,
                    }}
                    transition={{ ease: "easeInOut", duration: 0.25 }}
                ></motion.div>

                <motion.div
                    className={`bg-setting-dim absolute w-[20px] h-[2px] overflow-hidden left-[calc(50%-10px)] top-[calc(37.5%-1px)] rounded-[10px] will-change-transform [transform-origin:50%_50%_0]`}
                    animate={{
                        top: isOpen ? "calc(50% - 1px)" : "calc(37.5% - 1px)",
                        borderRadius: isOpen ? '50% / 500%' : '10px',
                        rotate: isOpen ? 48 : 0,
                    }}
                    transition={{ ease: "easeInOut", duration: 0.22 }}
                >

                </motion.div>
            </div>
        </>
    );
}

export default AnimatedMenuIcon;
