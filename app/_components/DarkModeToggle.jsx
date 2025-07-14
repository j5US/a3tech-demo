"use client";
import Moon from "../_ui/Moon";
import Sun from "../_ui/Sun";
import { useDarkMode } from "../_context/DarkModeContext"; 

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button className="cursor-pointer outline-none" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="size-5 text-[#c1c3f1]" /> : <Moon className="size-5 text-[#282fae]" />}
        </button>
    );
}

export default DarkModeToggle;