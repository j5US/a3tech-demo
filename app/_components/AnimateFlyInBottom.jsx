"use client";
import { motion } from "framer-motion";

function AnimateFlyInBottom({
    children,
    classNames,
    yFrom = "200px",
    duration = 2,
    bounceRate = 0.3,
    viewportAmount = "some",
}) {

    return (
        <motion.div
            className={` ${classNames}`}
            initial={{
                y: yFrom,
                opacity: 0,
            }}
            whileInView={{
                y: "0px",
                opacity: 1,
                transition: {
                    duration,
                    type: "spring",
                    bounce: bounceRate,
                }
            }}
            viewport={{
                amount: viewportAmount,
                once: true,
            }}
        >
            {children}
        </motion.div>
    );
}

export default AnimateFlyInBottom;
