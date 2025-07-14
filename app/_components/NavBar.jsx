"use client";
import { PiYarn } from "react-icons/pi";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import AnimateTilt from "./AnimateTilt";
import DivDropdown from "./DivDropdown";
import AnimatedMenuIcon from "../_ui/AnimatedMenuIcon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-20 fixed z-50 bg-setting-nav top-0 w-full">
            <nav className={`flex justify-between border-b size-full font-mono items-center px-10 max-[809px]:px-6 ${isOpen ? "border-transparent": "border-[#00000012]"}`}>
                <Link href="/" onClick={() => setIsOpen(false)} className="flex gap-5 items-center h-full outline-none">
                    <PiYarn className="text-2xl" />
                    <p className="text-[16px] font-extrabold max-[809px]:hidden">AAA Tech Corporation</p>
                </Link>

                <div className="flex gap-5 items-center text-accent-nav text-[15.5px] font-medium">
                    <DivDropdown />
                    <Link className="max-[1200px]:hidden tracking-[-0.01em] leading-[2em]" href="/our-story">Our Story</Link>
                    <Link href="#" className="max-[1200px]:hidden tracking-[-0.01em] leading-[2em]" >Contact</Link>
                    <AnimateTilt
                        classNames="cursor-pointer max-[809px]:hidden h-11 px-4 py-2 flex items-center gap-1 bg-setting-dim font-extrabold text-accent-bright"
                        hoverSetting="var(--accent-nav)"
                        bgSetting="var(--setting-dim)"
                    >
                        <p className="leading-[1.2em]"> ✦ Get Quote</p>
                    </AnimateTilt>

                    <div className="flex items-center justify-center h-10 w-8 outline-none">

                        <DarkModeToggle />
                    </div>
                    {/* <NavDrawer /> */}
                    <button
                        className="outline-none select-none size-min cursor-pointer max-[1200px]:flex hidden"
                        onClick={() => setIsOpen(cur => !cur)}>
                        <AnimatedMenuIcon isOpen={isOpen} />
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.3, }}
                        className="w-full bg-setting-nav text-accent-nav overflow-hidden max-[809px]:px-6 px-10 "
                    >
                        <div
                            className="w-full flex flex-col gap-5 text-accent-nav scroll-hide"
                            style={{
                                maxHeight: 'calc(100vh - 5rem)', // 5rem = h-20 navbar height
                                overflowY: 'auto',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >

                            <Link href="/textile">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                    Textile Manufacturing
                                </div>
                            </Link>
                            <Link href="/dairy">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                    Dairy Products
                                </div>
                            </Link>
                            <Link href="#">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                    Mining Equipments
                                </div>
                            </Link>
                            <Link href="#">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                    Laundry Services
                                </div>
                            </Link>
                            <Link href="#">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                   Real Estate 
                                </div>
                            </Link>
                            <Link className='mt-2' href="/our-story">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] font-mono w-full leading-[1.2em] tracking-normal p-6 border-b border-sticky-card-bound'>
                                    About us
                                </div>
                            </Link>
                            <Link href="#">
                                <div onClick={() => setIsOpen(false)} className='text-[16px] font-mono leading-[1.2em] tracking-normal w-full p-6 border-b border-sticky-card-bound'>
                                    Contact
                                </div>
                            </Link>
                            <AnimateTilt bgSetting='var(--setting-dim)' hoverSetting='var(--accent-nav)' classNames='z-60 mb-6 cursor-pointer flex items-center justify-center p-4 h-[69px] font-mono font-extrabold leading-[1.2em] tracking-normal text-accent-bright bg-setting-dim'>
                                ✦ Get Quote
                            </AnimateTilt>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default NavBar;
