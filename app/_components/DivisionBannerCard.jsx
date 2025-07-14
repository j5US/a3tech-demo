import Image from "next/image";
import React from "react";

function DivisionBannerCard({ summary, highlights, imgSrc, imgAlt }) {
    return (
        <div className="border border-sticky-card-bound flex-none h-[470px] flex flex-row overflow-hidden relative w-full max-[1199px]:flex-col max-[1199px]:gap-2.5 max-[1199px]:h-min">
            <div className="h-full w-[50%] flex flex-col items-start justify-end gap-2.5 overflow-hidden p-6 max-[1199px]:w-full">
                {summary.length > 0 &&
                    summary.map((item, index) => {
                        const { title, bullets } = item
                        return (
                            <React.Fragment key={index}>
                                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                                    <p className="text-2xl font-anton tracking-normal leading-[1.2em] whitespace-pre-wrap font-normal">
                                        {title}
                                    </p>
                                </div>
                                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                                    {bullets.map((item, index) => {
                                        return (
                                            <p key={index} className="font-mono font-medium leading-[1.5em] text-left tracking-normal">
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </React.Fragment>
                        );
                    })
                }
                {highlights &&
                    <>
                        <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                            <p className="font-anton text-2xl font-normal tracking-normal leading-[1.2em] whitespace-pre-wrap">
                                {highlights?.title}
                            </p>
                        </div>

                        <div className="items-center flex flex-none flex-row gap-2.5 h-min overflow-hidden relative w-full flex-wrap">
                            {
                                highlights?.points.map((item, index) => {
                                    return (
                                        <div key={index} className="border border-sticky-card-bound items-center bg-setting-bright flex flex-none rounded-lg h-min overflow-hidden p-2 relative w-min ">
                                            <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto ">
                                                <p className="font-mono font-medium leading-[1.4em] text-accent-dim tracking-normal">
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </>
                }
            </div>

            <div className="w-[50%] h-full relative max-[1199px]:w-full max-[1199px]:h-[470px]">
                <Image
                    fill
                    className="object-cover"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
        </div>
    );
}

export default DivisionBannerCard;
