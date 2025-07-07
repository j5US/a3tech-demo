"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function StoryBanner() {

    return (
        <div className="flex px-10 max-[1199px]:px-6 pb-10 items-end flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-hidden relative w-full">
            <motion.svg
                viewBox="0 0 1120 179"
                className="h-auto flex-none relative whitespace-pre outline-none w-full shrink-0 justify-start flex flex-col opacity-[1]"
                initial={{ x: -150, opacity: 0 }}     // Start off-screen left
                animate={{ x: 0, opacity: 1 }}        // Animate to natural position
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.35
                }}
            >
                <foreignObject width="100%" height="100%"
                    style={{
                        overflow: 'visible',
                        transformOrigin: 'center center',
                        whiteSpace: 'pre',
                    }}
                >
                    <p
                        className="text-[149px] font-anton whitespace-pre leading-[1.2em] "
                        xmlns="http://www.w3.org/1999/xhtml"
                    >
                        Building the Future
                    </p>
                </foreignObject>
            </motion.svg>
            <div className=" items-end flex flex-none flex-col flex-nowrap gap-6 h-min overflow-hidden relative w-full">
                <motion.div
                    className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-[86%] max-[1199px]:w-full"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        type: "spring",
                        bounce: 0.35
                    }}
                >
                    <p className="font-mono font-medium text-right text-[16px] leading-[1.2em]">
                        Established in 2024, AAA Tech Corporation Pvt. Ltd. serves as an umbrella corporation, acting as the parent company to a group of affiliated and subsidiary businesses across diverse sectors.
                    </p>
                </motion.div>
                <div className="contents ">
                    <div className="flex-none h-[480px] max-[1199px]:h-[237px] relative w-full">
                        <Image
                            className="object-cover"
                            src="/studio.avif"
                            fill
                            alt="AAA Tech Corporation group picture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryBanner;
