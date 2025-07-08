import { PiYarn } from "react-icons/pi";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import DarkModeToggle from "./DarkModeToggle";
import AnimateTilt from "./AnimateTilt";

function NavBar() {
    return (
        <div className="h-20 fixed z-50 bg-setting-nav top-0 w-full">
            <nav className="flex justify-between border-b border-[#00000012] size-full font-mono items-center px-10 max-[809px]:px-6">
                <Link href="/" className="flex gap-5 items-center h-full">
                    <PiYarn className="text-2xl" />
                    <p className="text-[16px] font-extrabold max-[809px]:hidden">AAA Tech Corporation</p>
                </Link>

                <div className="flex gap-5 items-center text-accent-nav text-[15.5px] font-medium">
                    <Link href="#" className="max-[1200px]:hidden">Business Division</Link>
                    <Link className="max-[1200px]:hidden" href="/our-story">Our Story</Link>
                    <Link href="#" className="max-[1200px]:hidden" >Contact</Link>
                    <AnimateTilt
                        classNames="cursor-pointer max-[809px]:hidden h-11 px-4 py-2 flex items-center gap-1 bg-setting-dim font-extrabold text-accent-bright"
                        hoverSetting="var(--accent-nav)"
                        bgSetting="var(--setting-dim)"
                    >
                        <p> ✦ Get Quote</p>
                    </AnimateTilt>

                    <DarkModeToggle />
                    <NavDrawer />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
