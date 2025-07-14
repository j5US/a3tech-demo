"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function LandingGallery() {
    return (

        <motion.div
            className="max-[809px]:flex-col max-[809px]:h-[635px] items-center flex flex-none flex-row flex-nowrap gap-1 h-[442px] justify-center overflow-hidden relative w-[93%]"
            initial={{
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                    bounce: 0.8,
                    duration: 2,
                }
            }}
            whileInView={{
                opacity: 0,
                scale: 0.7,
                transition: {
                    duration: 1,
                    ease: "linear",
                }
            }}
            viewport={{
                amount: 0.7,
                margin: "200px 0px 0px 0px"
            }}

        >
            <div className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                <div className="flex-none h-full overflow-hidden relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        src="/poster_textile.avif"
                        alt="clothes image"
                    />
                </div>
            </div>

            <div className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                <div className="flex-none h-full overflow-hidden relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        src="/poster_dairy.avif"
                        alt="Dairy Image"

                    />
                </div>
            </div>
            <div className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                <div className="flex-none h-full overflow-hidden relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        src="/poster_mining.avif"
                        alt="Automobile Image"
                    />
                </div>
            </div>
            <div className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                <div className="flex-none h-full overflow-hidden relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        src="/poster_laundry.avif"
                        alt="Automobile Image"
                    />
                </div>
            </div>
            <div className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                <div className="flex-none h-full overflow-hidden relative w-full">
                    <Image
                        fill
                        className="object-cover"
                        src="/poster_infra.avif"
                        alt="Automobile Image"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default LandingGallery;

{/* <div className="flex-none h-full overflow-hidden relative w-[33%] max-[809px]:[flex:1_0_0px] max-[809px]:h-[1px] max-[809px]:w-full">
                <Image
                    fill
                    className="object-cover"
                    src="/poster_dairy.avif"
                    alt="Dairy Image"

                />
            </div> */}