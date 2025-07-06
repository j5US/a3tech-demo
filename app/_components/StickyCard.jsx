import Image from "next/image";
function StickyCard({ title, precis, image, imageAlt, variant = "primary", children }) {
    const backgroundColor = (variant === "secondary") ? "bg-[#1A1f71]" : "bg-[#e2e3f8]";
    const fontColor = (variant === "secondary") ? "text-[#fff]" : "text-[#1A1f71]";
    return (
        <div className={`${backgroundColor} ${fontColor} border border-[#1A1f71] flex-none h-[648px] w-full flex flex-row`}>
            <div className={`w-1/2 h-full px-7 pt-9 flex flex-col justify-between`}>
                <p className={`font-mono text-[16px] font-medium w-full leading-[1.2em]`}>
                    Business Division
                </p>
                <div className={`flex flex-col gap-2.5 mb-18`}>
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
            <div className="w-1/2 h-full relative ">
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
