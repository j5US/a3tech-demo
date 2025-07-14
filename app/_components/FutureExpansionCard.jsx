function FutureExpansionCard({
    planTitle,
    planBullets,
    expansionType,
    expansionTitle,
    expansionPrecis, }) {

    const expansionContent = typeof (expansionPrecis) === "string"
        ? <div className="border border-sticky-card-bound items-center flex bg-setting-bright rounded-lg flex-none flex-row overflow-hidden gap-4 h-min p-4 relative w-full ">
            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative whitespace-pre-wrap w-[1px]  ">
                <p className="font-mono text-[16px] text-accent-dim font-medium tracking-normal leading-[1.5em] whitespace-pre-wrap">
                    {expansionPrecis}
                </p>
            </div>
        </div>
        : <div className="flex flex-none flex-wrap items-center justify-start content-center gap-2.5 h-min overflow-hidden relative w-full">
            {
                expansionPrecis.map((item, index) => {
                    return (
                        <p key={index} className="border border-sticky-card-bound p-2 bg-setting-bright text-accent-dim rounded-lg font-mono text-left text-[16px] font-medium tracking-normal leading-[1.5em] whitespace-pre-wrap">
                            {item}
                        </p>
                    );
                })
            }
        </div>;

    return (
        <div className="bg-accent-dim flex-none h-[345px] overflow-hidden relative w-full max-[1199px]:items-center max-[1199px]:flex max-[1199px]:flex-col max-[1199px]:gap-0 max-[1199px]:h-min">

            <svg className="outline-none flex flex-col justify-start shrink-0 -translate-x-1/2 -translate-y-1/2 flex-none h-auto left-1/2 absolute top-[54%] whitespace-pre w-full max-[1199px]:order-1 max-[1199px]:relative max-[1199px]:-translate-y-0 " viewBox="0 0 198 120" >
                <foreignObject className="whitespace-pre" width="100%" height="100%" transform="scale(1)" style={{ overflow: "visible", transformOrigin: "center center" }}>
                    <p className="font-anton text-[100px] text-white/10 whitespace-pre font-normal tracking-normal leading-[1.2em]">
                        2026
                    </p>
                </foreignObject>
            </svg>

            <div className="justify-center items-center flex flex-row gap-10 h-full p-10 overflow-hidden w-full max-[1199px]:flex-col max-[1199px]:order-[0] max-[1199px]:p-6 max-[1199px]:relative ">
                <div className="items-start flex [flex:1_0_0px] flex-col gap-2.5 h-min overflow-hidden relative w-[1px] max-[1199px]:w-full max-[1199px]:flex-none">
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                        <p className="font-anton text-2xl text-accent-bright font-normal tracking-normal leading-[1.2em] whitespace-pre-wrap">
                            Future Expansion Plan
                        </p>
                    </div>
                    <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                        <p className="font-mono text-left text-[16px] text-accent-bright font-medium tracking-normal leading-[1.5em] whitespace-pre-wrap">
                            {planTitle}
                        </p>
                    </div>
                    <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                        {
                            planBullets.map((item, index) => {
                                return <p key={index} className="font-mono text-left text-[16px] text-accent-bright font-medium tracking-normal leading-[1.5em] whitespace-pre-wrap">
                                    {item}
                                </p>;
                            })
                        }
                    </div>
                </div>

                <div className="items-start flex [flex:1_0_0px] flex-col gap-2.5 h-min overflow-hidden relative w-[1px] max-[1199px]:w-full max-[1199px]:flex-none">
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                        <p className="font-anton text-2xl text-accent-bright font-bold tracking-normal leading-[1.2em] whitespace-pre-wrap">
                            {expansionType}
                        </p>
                    </div>
                    <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                        <p className="font-mono text-left text-[16px] text-accent-bright font-medium tracking-normal leading-[1.5em] whitespace-pre-wrap">
                            {expansionTitle}
                        </p>
                    </div>
                    {expansionContent}
                </div>
            </div>
        </div>
    );
}

export default FutureExpansionCard;
