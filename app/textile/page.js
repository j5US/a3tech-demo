import CardBasic from "../_components/CardBasic";
import FutureExpansionCard from "../_components/FutureExpansionCard";
import GetQuoteComp from "../_components/GetQuoteComp";
import DivisionBanner from "../_components/DivisionBanner";
import DivisionBannerCard from "../_components/DivisionBannerCard";
import DivisionSection from "../_components/DivisionSection";

export const metadata = {
    title: "AAA Tech Corp • Textile",
}

export default function Page() {
    return (
        <div className="pt-[200px]">
            <DivisionBanner
                bannerTitle="Textile Division"
                bannerSize="187px"
                svgViewBox="0 0 1120 224"
                bannerSrc="/banner_textile.avif"
                bannerAlt="Banner for textile page - sheet of white fabric"
                precis="Explore our cutting-edge textile manufacturing capabilities driving fashion and industrial fabrics worldwide."
            />

            <DivisionSection
                title="World Class Yarn Manufacturing"
                precis="Robust yarn and fabric manufacturing infrastructure"
            >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"45+ Air Jet Looms"}
                        precis={["China-imported advanced machinery"]}
                    />
                    <CardBasic
                        title={"20,000 meters/day"}
                        precis={["Production capacity"]}
                    />
                    <CardBasic
                        title={"Multiple Yarn Types"}
                        precis={["100% Cotton, Polyester, Viscose & Blends"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc="/yarn_machinery.avif"
                    imgAlt="Yarn Handhled Machinery"
                    summary={[{
                        title: "Types of Yarn Handled",
                        bullets: [
                            "✦ 100% Cotton Yarn (Combed & Carded)",
                            "✦ Polyester Yarn (Filament & Textured)",
                            "✦ Viscose and Rayon Yarn",
                            "✦ Polyester-Cotton Blended Yarn",
                            "✦ Specialized Functional Yarn (as per client specifications)",
                        ],
                    },
                    ]}
                    highlights={{
                        title: "Applications",
                        points: ["Suiting", "Shirting", "Home Textiles", "Fashion Fabrics"]
                    }}
                />
                <FutureExpansionCard
                    planTitle="Aggressive growth strategy for textile manufacturing"
                    planBullets={[
                        "✦ 100% Cotton Yarn (Combed & Carded)",
                        "✦ Centralized high-tech facility",
                        "✦ Large-scale & customized production",
                        "✦ Digital monitoring systems",
                        "✦ Real-time efficiency tracking"
                    ]}
                    expansionType="Air Jet Looms Expansion"
                    expansionTitle="✦ Targeting 1000+ units in next 2 years"
                    expansionPrecis="✦ This expansion will position AAA Tech Corporation as a major force in textile manufacturing, capable of fulfilling high-volume, high-quality orders with rapid turnaround times."
                />
            </DivisionSection>

            <DivisionSection
                title="Embroidery Services & Specializations"
                precis="Advanced embroidery capabilities for value-added services"
            >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"4+ Embroidery Machines"}
                        precis={["High-speed computerised machines imported from China"]}
                    />
                    <CardBasic
                        title={"Unique embroidery type"}
                        precis={["✦ Flat Embroidery ✦ Sequin Work", "✦ Appliqué ✦ Fashion Embroidery"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc="/embroidery.jpg"
                    imgAlt="Colorful embroidery on fabric"
                    summary={[{
                        title: "Machine Specifications",
                        bullets: [
                            "✦ Multi-head and multi-needle configurations",
                            "✦ High-precision embroidery capabilities",
                            "✦ Compatible with variety of fabrics",
                        ],
                    },
                    ]}
                    highlights={{
                        title: "Applications",
                        points: ["Fashion", "Home Decor", "Apparel",]
                    }}
                />
                <FutureExpansionCard
                    planTitle="Stategic Setup"
                    planBullets={[
                        "✦ Multiple locations across India",
                        "✦ Reduced logistical costs",
                        "✦ Faster client delivery",
                    ]}
                    expansionType="Targetted Machine Expansion"
                    expansionTitle="✦ Targeting 30+ units in next years"
                    expansionPrecis={[
                        "Automated Design Transfer",
                        "AI-Assisted Pattern Recognition",
                        "Multi-Color Functionality",
                    ]}
                />
            </DivisionSection>

            <DivisionSection
                title="Cutting & Packaging Services"
                precis="Dedicated cutting and packing infrastructure"
            >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"2 per facility"}
                        precis={["High-Precision Cutting Machines"]}
                    />
                    <CardBasic
                        title={"Quality Assurance"}
                        precis={["Our packaging processes follow strict quality control protocols to ensure products are neatly packed, defect-free, and ready for direct shipment to clients across domestic and export markets."]}
                    />
                </div>

                <DivisionBannerCard
                    imgSrc="/cardboard_boxes.jpg"
                    imgAlt="Carboard boxes stacked together"
                    summary={[
                        {
                            title: "Cutting Unit",
                            bullets: [
                                "✦ Efficient and uniform fabric cutting",
                                "✦ Bulk volume handling with minimal wastage",
                                "✦ High-speed processing capabilities",
                                "✦ Integrated with design & embroidery units",
                            ],
                        },
                        {
                            title: "Packing Centre",
                            bullets: [
                                "✦ Quality checks and inspection",
                                "✦ Professional folding and tagging",
                                "✦ Automated & semi-automated packing lines",
                                "✦ Bulk and retail-ready shipments",
                            ],
                        },
                    ]}
                />
            </DivisionSection>

            <div className="items-start flex flex-none flex-col gap-6 h-min overflow-hidden py-10 px-10 relative w-full max-[1199px]:px-6">
                <svg className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-full" viewBox="0 0 468 67">
                    <foreignObject className="whitespace-pre" width="100%" height="100%" transform="scale(1)" style={{ overflow: "visible", transformOrigin: "center center" }}>
                        <p className="font-anton text-[56px] whitespace-pre font-normal text-accent-dim tracking-normal leading-[1.2em]">
                            Production Summary
                        </p>
                    </foreignObject>
                </svg>

                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em] text-right text-accent-dim whitespace-pre-wrap ">
                        Complete end-to-end textile manufacturing solution
                    </p>
                </div>

                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        icon={
                            <>
                                <path d="M 8.5 8.5 L 8.5 0 L 0 0" fill="transparent" height="8.5px" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(8.75 6.75)" width="8.5px"></path>
                                <path d="M 10.25 0 L 0 10.25" fill="transparent" height="10.25px" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(6.75 7)" width="10.25px"></path>
                            </>
                        }
                        title={"2000"}
                        precis={["Meters/Day Capacity"]}
                    />
                    <CardBasic
                        icon={
                            <>
                                <path d="M 0 7.25 C 0 3.246 3.246 0 7.25 0 C 11.254 0 14.5 3.246 14.5 7.25 C 14.5 11.254 11.254 14.5 7.25 14.5 C 3.246 14.5 0 11.254 0 7.25 Z" fill="transparent" height="14.5px" id="NIZB4iVIO" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.75 4.75)" width="14.5px"></path>
                                <path d="M 6.5 7.25 C 6.5 11.75 4.493 14.5 3.25 14.5 C 2.007 14.5 0 11.75 0 7.25 C 0 2.75 2.007 0 3.25 0 C 4.493 0 6.5 2.75 6.5 7.25 Z" fill="transparent" height="14.5px" id="On0NJj9_U" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(8.75 4.75)" width="6.5px"></path>
                                <path d="M 0 0 L 7 0 L 14 0" fill="transparent" height="1px" id="skCiKaN5Z" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(5 12)" width="14px"></path>
                            </>
                        }
                        title={"Domestic & Export"}
                        precis={["Market Coverage"]}
                    />
                    <CardBasic
                        icon={
                            <>
                                <path d="M 0 7.25 C 0 3.246 3.246 0 7.25 0 C 11.254 0 14.5 3.246 14.5 7.25 C 14.5 11.254 11.254 14.5 7.25 14.5 C 3.246 14.5 0 11.254 0 7.25 Z" fill="transparent" height="14.5px" id="eykqsanp5" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.75 4.75)" width="14.5px"></path>
                                <path d="M 0 4.25 C 0 1.903 1.903 0 4.25 0 C 6.597 0 8.5 1.903 8.5 4.25 C 8.5 6.597 6.597 8.5 4.25 8.5 C 1.903 8.5 0 6.597 0 4.25 Z" fill="transparent" height="8.5px" id="NWbhVZVdN" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(7.75 7.75)" width="8.5px"></path>
                                <path d="M 0 1.25 C 0 0.56 0.56 0 1.25 0 C 1.94 0 2.5 0.56 2.5 1.25 C 2.5 1.94 1.94 2.5 1.25 2.5 C 0.56 2.5 0 1.94 0 1.25 Z" fill="transparent" height="2.5px" id="tfM3j2MBu" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(10.75 10.75)" width="2.5px"></path>
                            </>
                        }
                        title={"Zero Defect"}
                        precis={["Quality Target"]}
                    />
                </div>

                <div className="whitespace-pre-wrap font-mono font-medium tracking-[0.02em] leading-[1.6em] text-left text-accent-dim">
                    <strong>Note:</strong> Quality certifications are currently being pursued to enhance our credentials and market reach.
                </div>
            </div>

            <GetQuoteComp />

        </div>
    );
}