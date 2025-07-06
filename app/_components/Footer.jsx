import { Marquee } from "./Marquee";

function Footer() {
    return (
        <footer className="pt-[60px]">

            <div className="mb-7 flex flex-row max-[809px]:flex-col max-[809px]:px-6 flex-none flex-nowrap overflow-hidden justify-between max-[809px]:items-start max-[809px]:justify-center max-[809px]:gap-6 items-center w-full px-10">
                <div className="outline-none w-[367px] max-[809px]:w-full flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap">

                    <p className="leading-[1.2em] font-mono font-medium text-[16px] whitespace-pre-wrap ">
                        Leading umbrella corporation empowering innovation across textile manufacturing, dairy
                        products, and mining equipment sectors with strategic leadership and operational
                        excellence.
                    </p>
                </div>

                <div className="flex items-start flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-hidden relative">

                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap ">
                        <p className="font-mono font-medium leading-[1.2em] text-[16px]">Our Story </p>
                    </div>
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap ">
                        <p className="font-mono font-medium leading-[1.2em] text-[16px]">Business Divisions </p>
                    </div>
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap ">
                        <p className="font-mono font-medium leading-[1.2em] text-[16px]">Contact </p>
                    </div>

                </div>
            </div>

            {/* <InfinityBanner /> */}

            {/* <Marquee>
                <div>Hello</div>
            </Marquee> */}
            <Marquee containerClassName="mb-2.5">
                <li className="list-item list-none">
                    <div className="shrink-0 h-[138px] overflow-hidden relative w-[975px] ">
                        <div className="outline-none flex flex-col justify-start h-auto whitespace-pre w-auto">
                            <p className="font-anton text-[115px] text-[#1a1f71] font-normal tracking-normal leading-[1.2em] text-start ">
                                AAATech Corporation
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className=" font-mono text-[115px] font-extrabold tracking-normal leading-[1.2em] ">
                                •
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-anton text-[115px] font-normal tracking-normal leading-[1.2em] ">
                                Est 2020
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-mono text-[115px] font-extrabold tracking-normal leading-[1.2em] ">
                                •
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-anton text-[115px] font-normal tracking-normal leading-[1.2em] ">
                                AAATech Corporation
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-mono text-[115px] font-extrabold tracking-normal leading-[1.2em] ">
                                •
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-anton text-[115px] font-normal tracking-normal leading-[1.2em] ">
                                Est 2020
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-item list-none">
                    <div className="items-center flex flex-row flex-nowrap gap-2.5 h-[138px] justify-center overflow-hidden relative w-min">
                        <div className="outline-none flex flex-col justify-start shrink-0 text-[#1a1f71] flex-none h-auto relative whitespace-pre w-auto">
                            <p className="font-mono text-[115px] font-extrabold tracking-normal leading-[1.2em] ">
                                •
                            </p>
                        </div>
                    </div>
                </li>
            </Marquee>
        </footer>
    );
}

export default Footer;
