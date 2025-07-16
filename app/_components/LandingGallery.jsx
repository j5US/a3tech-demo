"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "@/public/poster_textile.avif";
import img2 from "@/public/poster_dairy.avif";
import img3 from "@/public/poster_mining.avif";
import img4 from "@/public/poster_laundry.avif";
import img5 from "@/public/poster_infra.avif";

function LandingGallery() {
    const { scrollY } = useScroll();
    const [scrolledPast, setScrolledPast] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > 150) {
                setScrolledPast(true);
            } else {
                setScrolledPast(false);
            }
        });
    }, [scrollY]);

    return (

        <motion.div
            className="max-[809px]:flex-col max-[809px]:h-[635px] items-center flex flex-none flex-row flex-nowrap gap-1 h-[442px] justify-center overflow-hidden relative w-[93%]"
            // initial={{
            //     opacity: 1,
            //     scale: 1,
            //     transition: {
            //         type: "spring",
            //         stiffness: 300,
            //         damping: 18,
            //         bounce: 0.8,
            //         duration: 2,
            //     }
            // }}
            // whileInView={{
            //     opacity: 0,
            //     scale: 0.7,
            //     transition: {
            //         duration: 1,
            //         ease: "linear",
            //     }
            // }}
            // viewport={{
            //     amount: 0.7,
            //     margin: "200px 0px 0px 0px"
            // }}
            animate={{
                opacity: scrolledPast ? 0 : 1,
                scale: scrolledPast ? 0.7 : 1,
            }}
            transition={{
                type: "spring",
                bounce: 0.35,
                duration: 1.8,
                // stiffness: 300,
                // damping: 20,
            }}

        >
            {
                [
                    { srcImg: img1, altTxt: "clothes image", },
                    { srcImg: img2, altTxt: "Dairy Image", },
                    { srcImg: img3, altTxt: "Automobile Image", },
                    { srcImg: img4, altTxt: "Laundry Image", },
                    { srcImg: img5, altTxt: "Infrastructure/Real Estate", },
                ].map((item, index) => {
                    const { srcImg, altTxt } = item;
                    return (
                        <div key={index} className="[flex:1_0_0px] h-full overflow-hidden relative w-[1px] max-[809px]:h-[1px] max-[809px]:w-full">
                            <div className="flex-none h-full overflow-hidden relative w-full">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={srcImg}
                                    alt={altTxt}
                                    quality={90}
                                    sizes="(max-width: 809px) 100vw, 20vw"
                                />
                            </div>
                        </div>
                    );
                })
            }
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