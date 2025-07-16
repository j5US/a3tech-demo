"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function DivisionBanner({
    bannerTitle,
    precis,
    svgViewBox,
    bannerSize,
    bannerSrc,
    bannerAlt,
}) {
    return (
        <div className="items-end flex flex-none flex-col gap-2.5 h-min overflow-hidden px-10 pb-10 max-[1199px]:px-6">
            <motion.svg
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-full"
                viewBox={svgViewBox}
                initial={{ x: -150, opacity: 0, skewX: "0deg", skewY: "0deg" }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{
                    skewX: "6deg",
                    skewY: "1deg",
                    transition: {
                        type: "spring",
                        bounce: 0.6,
                        duration: 2
                    }
                }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.35
                }}
            >
                <foreignObject width="100%" height="100%" transform="scale(1)"
                    style={{
                        overflow: "visible",
                        transformOrigin: "center center",
                        whiteSpace: "pre",
                    }}>
                    <p style={{ fontSize: bannerSize }} className="font-anton whitespace-pre font-normal tracking-normal leading-[1.2em]">
                        {bannerTitle}
                    </p>
                </foreignObject>
            </motion.svg>
            <div className="items-end flex flex-none flex-col flex-nowrap gap-6 h-min justify-center overflow-hidden relative w-full">
                <motion.div
                    className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-[86%]"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        type: "spring",
                        bounce: 0.35
                    }}
                >
                    <p className="font-mono font-medium text-right tracking-normal leading-[1.2em] whitespace-pre-wrap">
                        {precis}
                    </p>
                </motion.div>

                <div className="flex-none h-[480px] relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        src={bannerSrc}
                        alt={bannerAlt}
                    />
                </div>

            </div>
        </div >
    );
}

export default DivisionBanner;
