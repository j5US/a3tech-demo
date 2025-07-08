'use client';

import { Drawer } from 'vaul';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import Link from 'next/link';
import AnimateTilt from './AnimateTilt';
// import { MenuIcon, XIcon } from 'lucide-react'; // Optional

export default function NavDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen} direction='top' modal={false}>
            <Drawer.Trigger className="max-[1200px]:flex relative hidden outline-none flex-shrink-0 items-center justify-center overflow-hidden text-2xl transition-all cursor-pointer">
                {isOpen ? <RxCross2 className='cursor-pointer' /> : <LuMenu className='cursor-pointer' />}
            </Drawer.Trigger>
            <Drawer.Portal>
                {/* Overlay for modal=true */}
                {/* <Drawer.Overlay className="fixed inset-0 bg-black/40" /> */}
                <Drawer.Content className="bg-transparent flex flex-col h-fit fixed top-0 left-0 right-0 outline-none border-b border-[#00000012] antialiased">
                    <div className="max-[809px]:px-6 px-10 bg-setting-nav flex-1 pt-[80px]">
                        <Drawer.Title className="sr-only">Drawer for React.</Drawer.Title>
                        <div className='w-full flex flex-col gap-5 text-accent-nav'>
                            <Link href="#">
                                <div className='text-[16px] w-full leading-[1.2em] tracking-normal font-mono p-6 border-b border-sticky-card-bound'>
                                    Business Division
                                </div>
                            </Link>
                            <Link className='mt-2' href="/our-story">
                                <div className='text-[16px] font-mono w-full leading-[1.2em] tracking-normal p-6 border-b border-sticky-card-bound'>
                                    Our Story
                                </div>
                            </Link>
                            <Link href="#">
                                <div className='text-[16px] font-mono leading-[1.2em] tracking-normal w-full p-6 border-b border-sticky-card-bound'>
                                    Contact
                                </div>
                            </Link>
                            <AnimateTilt bgSetting='var(--setting-dim)' hoverSetting='var(--accent-nav)' classNames='cursor-pointer flex items-center justify-center p-4 h-[69px] font-mono font-extrabold leading-[1.2em] tracking-normal text-accent-bright bg-setting-dim'>
                                ✦ Get Quote
                            </AnimateTilt>

                        </div>
                        <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mt-6 mb-2" />
                    </div>

                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>

    );
}