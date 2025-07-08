"use client";
import { motion } from "framer-motion";
import AnimateTilt from "./AnimateTilt";

function GetQuoteComp() {
    return (
        <div className="w-full h-min px-10 max-[1199px]:px-6 mb-10 ">
            <motion.div
                className="p-10 max-[809px]:px-6 bg-setting-dim text-accent-bright w-full"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                        ease: "easeInOut"
                    }
                }}
                viewport={{
                    amount: "full",
                    once: true,
                }}
            >

                <div className="py-[38px] max-[809px]:py-16 space-y-[40px] w-full">
                    <div className="space-y-[10px] w-full">

                        <p className="font-anton text-[56px] max-[809px]:text-center max-[809px]:text-[24px] font-normal leading-[1.2em]">
                            Ready to partner with us ?
                        </p>
                        <p className="font-mono text-[16px] leading-[1.2em]">
                            Join us in building the future across textile, dairy, and mining equipment industries.
                        </p>
                    </div>

                    <div className="w-full h-20 flex justify-end">
                        <AnimateTilt hoverSetting="#c1c3f1" bgSetting="var(--setting-bright)" classNames="max-[809px]:w-full w-auto p-[27.15px] items-center bg-setting-bright text-accent-dim flex flex-row flex-nowrap justify-center overflow-hidden relative cursor-pointer h-full">
                            <button className=" font-mono text-[27px] font-extrabold leading-[1.2em] cursor-pointer ">
                                ✦ Get Quote
                            </button>
                        </AnimateTilt>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default GetQuoteComp;
