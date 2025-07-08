import Image from "next/image";

function TeamLeadCard({variant="primary", img, imgAlt, name, position, precis}) {
    const backgroundColor = variant === "secondary" ? "bg-setting-bright" : "bg-setting-dim";
    const textColor = variant === "secondary" ? "text-accent-dim" : "text-accent-bright";

    return (
        <div className="[flex:1_0_0px] h-full relative w-[1px] max-[1199px]:w-full max-[1199px]:items-center max-[1199px]:flex max-[1199px]:flex-none max-[1199px]:flex-row max-[1199px]:gap-2.5 max-[1199px]:h-min">
            <div className={`${backgroundColor} items-start flex flex-none flex-col flex-nowrap gap-3 h-full justify-start overflow-hidden p-[24px] w-full max-[1199px]:h-min`}>
                <div className="rounded-full overflow-hidden flex-none size-[66px] relative">
                    <Image
                        className="object-cover rounded-full"
                        src={img}
                        alt={imgAlt}
                        fill
                    />
                </div>
                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                    <p className={`${textColor} font-anton text-[24px] font-normal tracking-normal leading-[1.2em] text-start h-auto flex-none relative whitespace-pre-wrap w-full`}>
                        {name}
                    </p>
                </div>
                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                    <p className={`${textColor} font-mono font-bold text-left tracking-normal leading-[1.2em] flex-none h-auto relative whitespace-pre-wrap w-full`}>
                        {position}
                    </p>
                </div>
                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-[325px] max-[1199px]:w-full">
                    <p className={`${textColor} font-mono text-left font-normal text-[16px] tracking-normal leading-[1.2em] flex-none h-auto relative whitespace-pre-wrap`}>
                        {precis}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TeamLeadCard;
