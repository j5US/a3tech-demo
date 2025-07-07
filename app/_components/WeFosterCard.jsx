"use client";
import { motion } from "framer-motion";
import { VscArrowSmallRight } from "react-icons/vsc";

function WeFosterCard() {
    return (
        <motion.div
            className="flex flex-col flex-none flex-nowrap items-center justify-center gap-[10px] overflow-hidden w-full h-min"
            initial={{
                y: "200px",
                opacity: 0,
            }}
            whileInView={{
                y: "0px",
                opacity: 1,
                transition: {
                    duration: 2,
                    type: "spring",
                    // stiffness: 80,
                    // damping: 14,
                    // mass: 2,
                    bounce: 0.3,
                }
            }}
            viewport={{
                amount: "some",
                once: true,
            }}
        >
            <div className="outline-none flex justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                <p className="font-mono font-medium text-[16px] leading-[1.2em] w-full">Est 2018</p>
            </div>
            <div className="outline-none flex flex-col shrink-0 justify-start h-auto relative whitespace-pre-wrap w-full">
                <p className="font-anton text-[56px] max-[1199px]:text-[40px] max-[809px]:text-[32px] font-normal leading-[1.2em] ">
                    We foster synergy and sustainable growth by uniting diverse
                    industries under one agile, future-focused ecosystem.
                </p>
            </div>
            <div className="outline-none flex justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                <p className="flex gap-1.5 justify-end items-center font-mono  text-right leading-[1.2em] w-full">
                    <span className="text-[24px] font-bold">Read More</span>
                    <VscArrowSmallRight className="text-[26px] mt-0.5 mr-1" />
                </p>
            </div>
        </motion.div>
    );
}

export default WeFosterCard;
