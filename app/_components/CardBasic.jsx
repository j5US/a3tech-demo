const heart = <path d="M 7.245 1.483 C 5.796 -0.14 3.378 -0.577 1.562 0.91 C -0.254 2.396 -0.51 4.881 0.917 6.639 L 7.245 12.5 L 13.574 6.639 C 15 4.881 14.775 2.38 12.928 0.91 C 11.081 -0.561 8.695 -0.14 7.245 1.483 Z" fill="transparent" height="12.500011836293409px" id="L3ZT6vaS3" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.75 5.75)" width="14.500012148564352px"></path>;

function CardBasic({ title, precis, icon = heart }) {
    return (
        <div className="border flex border-sticky-card-bound [flex:1_0_0px] h-full relative w-[1px] max-[1199px]:items-center max-[1199px]:flex max-[1199px]:flex-none max-[1199px]:flex-col max-[1199px]:flex-nowrap max-[1199px]:gap-2.5 max-[1199px]:h-min max-[1199px]:justify-center max-[1199px]:w-full">
            <div className="items-start flex flex-col flex-nowrap gap-3 h-full justify-center overflow-hidden p-6 max-[1199px]:h-min max-[1199px]:w-full">
                <div className="items-center bg-setting-dim rounded-full flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center overflow-hidden p-2.5 relative w-min ">
                    <svg className="flex-none h-auto w-6 relative text-accent-bright aspect-[1]" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {icon}
                    </svg>
                </div>
                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                    <p className="font-anton text-2xl tracking-normal leading-[1.2em] whitespace-pre-wrap">
                        {title}
                    </p>
                </div>
                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                    {
                        precis.map((item, index) => {
                            return (
                                <p key={index} className="font-mono font-medium text-left leading-[1.2em] tracking-normal" >
                                    {item}
                                </p>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CardBasic;
