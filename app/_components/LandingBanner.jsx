"use client";

import { motion } from "framer-motion";

function LandingBanner() {

    return (
        <div className="mt-[80px] max-[1199px]:mt-0 brand-header-container flex items-end justify-center flex-row flex-nowrap gap-4 h-48 w-full overflow-visible px-10 max-[809px]:px-6 relative flex-none">
            <motion.svg
                viewBox="0 0 532 192"
                className="brand-header h-auto flex-none relative whitespace-pre outline-none w-[50%] shrink-0 justify-start flex flex-col opacity-[1]"
                initial={{ x: -200, opacity: 0 }}     
                animate={{ x: 0, opacity: 1 }}        
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.35
                }} // Smooth transition
            >
                <foreignObject width="100%" height="100%"
                    style={{
                        overflow: 'visible',
                        transformOrigin: 'center center',
                        whiteSpace: 'pre',
                    }}
                >
                    <p
                        className="text-[160px] font-anton whitespace-pre leading-[1.2em] "
                        xmlns="http://www.w3.org/1999/xhtml"
                    >
                        AAATech
                    </p>
                </foreignObject>
            </motion.svg>
            <div className="brand-overview-container items-center flex flex-row flex-nowrap [flex:1_0_0px] gap-2.5 h-[192px] w-[1px] relative justify-center overflow-hidden">
                <motion.div
                    className="brand-overview outline-none relative flex w-[86%] h-[56%] flex-col justify-end shrink-0 whitespace-pre-wrap"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        type: "spring",
                        bounce: 0.35
                    }}
                >
                    <p className="font-mono font-medium text-right leading-[1.2em] w-full">
                        Leading umbrella corporation empowering innovation across textile manufacturing,
                        dairy products, and mining equipment sectors with strategic leadership and operational
                        excellence.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default LandingBanner;
