"use client";
import { motion } from "framer-motion";

export default function InfinityBanner() {
    const text = "AAATech Corporation • Est 2000 • ";

    return (
        <div className="overflow-hidden whitespace-nowrap w-full ">
            <motion.div
                className="inline-block whitespace-nowrap overflow-hidden"
                // animate={{ x: ["0%", "-100%"] }}
                // transition={{
                //     repeat: Infinity,
                //     repeatType: "loop",
                //     ease: "linear",
                //     duration: 260,
                // }}
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 450, // ⬅️ Higher = slower
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <p className="text-[115px] font-anton w-full font-normal leading-[1.2em] ">{text.repeat(40)}</p>
            </motion.div>
        </div>
    );
};
