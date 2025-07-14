import Link from "next/link";

function DivDropdown() {
    return (
        <div className="max-[1200px]:hidden flex-none h-auto relative w-auto group">
            <div className="items-center flex flex-row flex-nowrap gap-[5px] h-min justify-center overflow-hidden py-[5px] relative w-min">
                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative select-none whitespace-pre w-auto">
                    <p className="font-mono text-[15px] font-medium tracking-[-0.01em] leading-[2em] text-left select-none whitespace-pre">
                        Business Divisions
                    </p>
                </div>
                <div className="flex-none h-auto relative w-auto ">
                    <div className="h-3.5 relative overflow-visible ">
                        <div className="size-3.5 transition-transform">
                            <div className="size-full">
                                <svg className="size-full text-accent-nav duration-200 group-hover:-rotate-180" viewBox="0 0 14 14" >
                                    <path d="M 3 5.5 L 7 9.5 L 11 5.5" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bg-transparent pt-7.5 left-0 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-out ">
                <div className=" w-[150px] h-auto relative  ">
                    <div style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    }}
                        className="text-accent-dim bg-setting-nav w-full items-start flex flex-col gap-[5px] h-min p-[15px] relative">
                        <div className="items-center flex flex-none gap-[15px] flex-row h-min overflow-hidden relative w-full">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative select-none whitespace-pre-wrap w-[1px]">
                                <Link href="textile">
                                    <p className=" font-mono font-medium tracking-[-0.01em] leading-[1.5em] text-left whitespace-pre-wrap select-none ">
                                        Textile
                                    </p>
                                </Link>

                            </div>

                        </div>
                        <div className="items-center flex flex-none gap-[15px] flex-row h-min overflow-hidden relative w-full">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative select-none whitespace-pre-wrap w-[1px]">
                                <Link href="dairy">
                                    <p className="font-mono font-medium tracking-[-0.01em] leading-[1.5em] text-left whitespace-pre-wrap select-none ">
                                        Dairy
                                    </p>
                                </Link>

                            </div>

                        </div>
                        <div className="items-center flex flex-none gap-[15px] flex-row h-min overflow-hidden relative w-full">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative select-none whitespace-pre-wrap w-[1px]">
                                <Link href="mining">
                                    <p className="font-mono font-medium tracking-[-0.01em] leading-[1.5em] text-left whitespace-pre-wrap select-none ">
                                        Mining
                                    </p>
                                </Link>

                            </div>

                        </div>
                        <div className="items-center flex flex-none gap-[15px] flex-row h-min overflow-hidden relative w-full">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative select-none whitespace-pre-wrap w-[1px]">
                                <Link href="mining">
                                    <p className="font-mono font-medium tracking-[-0.01em] leading-[1.5em] text-left whitespace-pre-wrap select-none ">
                                        Laundry
                                    </p>
                                </Link>

                            </div>

                        </div>
                        <div className="items-center flex flex-none gap-[15px] flex-row h-min overflow-hidden relative w-full">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative select-none whitespace-pre-wrap w-[1px]">
                                <Link href="mining">
                                    <p className="font-mono font-medium tracking-[-0.01em] leading-[1.5em] text-left whitespace-pre-wrap select-none ">
                                        Real Estate
                                    </p>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DivDropdown;
