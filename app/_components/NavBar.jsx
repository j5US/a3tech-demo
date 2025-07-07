import { PiYarn } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import NavDrawer from "./NavDrawer";

function NavBar() {
    return (
        <div className="h-20 fixed z-50 bg-white top-0 w-full">
            <nav className="flex justify-between border-b border-[#00000012] size-full font-mono items-center px-10 max-[809px]:px-6">
                <Link href="/" className="flex gap-5 items-center h-full">
                    <PiYarn className="text-2xl" />
                    <p className="text-[16px] font-extrabold max-[809px]:hidden">AAA Tech Corporation</p>
                </Link>

                <div className="flex gap-5 items-center text-[15.5px] font-medium">
                    <p className="max-[1200px]:hidden">Business Division</p>
                    <Link className="max-[1200px]:hidden" href="/our-story">Our Story</Link>
                    <p className="max-[1200px]:hidden" >Contact</p>
                    <div className="max-[809px]:hidden h-11 border px-4 py-2 flex items-center gap-1 bg-[#1A1f71] font-extrabold text-white">
                        <p> ✦ Get Quote</p>
                    </div>
                    <button className="text-2xl">
                        <IoSunnyOutline />
                    </button>
                    <NavDrawer/>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
