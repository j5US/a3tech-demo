import Image from "next/image";
import Link from "next/link";
function StickyCard({
    index,
    title,
    precis,
    contents,
    image,
    imageAlt,
    variant = "primary",
    linkRef = "#"
}) {
    const backgroundColor = (variant === "secondary") ? "bg-setting-dim" : "bg-setting-bright";
    const fontColor = (variant === "secondary") ? "text-accent-bright" : "text-accent-dim";
    // const top = `top-[${120 + (index * 30)}px]`
    const topOffset = 120 + index * 40;
    return (
        <div
            style={{ top: `${topOffset}px` }}
            className={`${backgroundColor} ${fontColor} sticky z-10 border border-sticky-card-bound flex-none h-[600px] max-[1199px]:h-[1000px] w-full flex flex-row max-[1199px]:flex-col`}>
            <div className={`h-full max-[1199px]:h-[40%] max-[809px]:h-min max-[1199px]:w-[680px] max-[809px]:w-full max-[1199px]:p-[24px] w-1/2 px-7 pt-9 flex flex-col gap-[60px] max-[809px]:justify-center max-[1199px]:gap-0`}>
                <p className={`font-mono text-[16px] mb-2 font-medium w-full leading-[1.2em]`}>
                    Business Division
                </p>
                <div className={`flex flex-col gap-2.5 mb-18 max-[1199px]:mb-1`}>
                    <p className="text-[40px] font-anton font-normal leading-[1.2em]"> {title} </p>
                    <p className="text-2xl font-mono font-medium leading-[1.2em]"> {precis} </p>
                    <ul className="text-2xl font-mono font-medium leading-[1.2em] my-4 max-[809px]:hidden">
                        {/* {children} */}
                        {contents}
                    </ul>
                    <Link href={linkRef}>
                        <p className="text-2xl font-mono font-black leading-[1.2em] ">
                            Know More ✦
                        </p>
                    </Link>
                </div>
            </div>
            <div className="max-[1199px]:w-full w-1/2 h-full relative max-[1199px]:h-[60%] max-[809px]:h-full">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    quality={50}
                    className="object-cover"
                    sizes="(max-width: 809px) 100vw, (max-width: 1199px) 100vw, 50vw"
                />

            </div>
        </div>
    );
}

export default StickyCard;
