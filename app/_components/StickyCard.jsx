import Image from "next/image";
function StickyCard({ title, precis, image, imageAlt, variant = "primary", children }) {
    const backgroundColor = (variant === "secondary") ? "bg-[#1A1f71]" : "bg-[#e2e3f8]";
    const fontColor = (variant === "secondary") ? "text-[#fff]" : "text-[#1A1f71]";
    return (
        <div className={`${backgroundColor} ${fontColor} border border-[#1A1f71] flex-none h-[648px] max-[1199px]:h-[1000px] w-full flex flex-row max-[1199px]:flex-col`}>
            <div className={`h-full max-[1199px]:h-[40%] max-[809px]:h-[60%] max-[1199px]:w-[680px] max-[809px]:w-full max-[1199px]:p-[24px] w-1/2 px-7 pt-9 flex flex-col justify-between max-[809px]:justify-center`}>
                <p className={`font-mono text-[16px] mb-2 font-medium w-full leading-[1.2em]`}>
                    Business Division
                </p>
                <div className={`flex flex-col gap-2.5 mb-18 max-[1199px]:mb-1`}>
                    <p className="text-[40px] font-anton font-normal leading-[1.2em]"> {title} </p>
                    <p className="text-2xl font-mono font-medium leading-[1.2em]"> {precis} </p>
                    <ul className="text-2xl font-mono font-medium leading-[1.2em] my-4">
                        {children}
                    </ul>
                    <p className="text-2xl font-mono font-black leading-[1.2em] ">
                        Know More ✦
                    </p>
                </div>
            </div>
            <div className="max-[1199px]:w-full w-1/2 h-full relative max-[1199px]:h-[60%] max-[809px]:h-[40%]">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />

            </div>
        </div>
    );
}

export default StickyCard;
