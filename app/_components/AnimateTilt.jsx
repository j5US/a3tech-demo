"use client";

import { motion } from "framer-motion";

function AnimateTilt({ component: Component = 'div', classNames = "", children, hoverSetting = "rgb(40, 47, 174)", bgSetting = "#1a1f71" }) {
    const MotionComponent = motion[Component];
    return (
        <MotionComponent
            className={classNames}
            initial={{
                backgroundColor: bgSetting,
                rotate: "0deg",
                boxShadow: "rgba(26, 30, 112, 0.23) 0px 0px 0px 0px",
            }}
            whileHover={{
                rotate: "-5deg",
                backgroundColor: hoverSetting, //rgb(193, 195, 241)
                boxShadow: "rgba(26, 30, 112, 0.23) 0px 5px 13px 0px",
            }}
        >
            {children}
        </MotionComponent>
    );
}

export default AnimateTilt;
