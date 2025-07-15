import Image from "next/image";
import ValueCard from "../_components/ValueCard";
import TeamLeadCard from "../_components/TeamLeadCard";
import GetQuoteComp from "../_components/GetQuoteComp";
import StoryBanner from "../_components/StoryBanner";
import AnimateFlyInBottom from "../_components/AnimateFlyInBottom";

export const metadata = {
    title: "AAA Tech Corp • Our Story",
}

export default function Page() {
    return (
        <div className="min-h-screen pt-[200px] mb-0">
            <StoryBanner />

            <AnimateFlyInBottom classNames="items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-hidden p-10 max-[1199px]:px-6 relative w-full">
                <div className="text-[16px] font-mono font-medium items-center flex flex-none flex-row flex-nowrap h-min justify-between overflow-hidden relative w-full">
                    <p className="leading-[1.2em]">Our Story</p>
                    <p className="leading-[1.2em]">Est 2024</p>
                </div>
                <div className="contents">
                    <div className="outline-none flex flex-col justify-start shrink-0 relative flex-none h-auto whitespace-pre-wrap w-full">
                        <p className="font-anton text-[56px] max-[1199px]:text-[24px] text-justify leading-[1.2em]">
                            AAA Tech Corporation Pvt. Ltd. was founded by two visionary directors as a strategic umbrella company.
                        </p>
                    </div>
                </div>
                <div className="contents">
                    <div className="outline-none flex flex-col justify-start shrink-0 relative flex-none h-auto whitespace-pre-wrap w-full">
                        <p className="font-mono text-[17px] font-medium text-right max-[1199px]:text-start leading-[1.2em] ">
                            We oversee and manage the strategic direction, financial interests, and operational efficiency of all associated entities
                        </p>
                        <p className="font-mono text-[17px] font-medium text-right max-[1199px]:text-start leading-[1.2em] ">
                            With a vision to streamline corporate management and drive unified growth across various sectors, we play a central role in holding and coordinating the activities of our group companies
                        </p>
                    </div>
                </div>
            </AnimateFlyInBottom>
            <div className="items-center flex flex-none flex-col gap-0 h-min overflow-hidden p-10 relative w-full max-[1199px]:px-6 max-[1199px]:gap-10">

                <AnimateFlyInBottom viewportAmount={0.4} classNames="items-center flex flex-row gap-0 h-min max-w-full overflow-hidden relative w-full max-[1199px]:flex-col max-[1199px]:gap-6">
                    <div className="items-center flex [flex:1_0_0px] flex-col gap-[15px] h-min overflow-visible relative w-[1px] max-[1199px]:flex-none max-[1199px]:order-1 max-[1199px]:w-full">
                        <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto max-w-full relative whitespace-pre-wrap w-[80%] max-[1199px]:w-full">
                            <p className="font-anton text-[32px] text-left tracking-[-0.03em] leading-[1em] ">
                                OUR VISION
                            </p>
                        </div>
                        <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto max-w-full relative whitespace-pre-wrap w-[80%] max-[1199px]:w-full ">
                            <p className="font-mono text-[24px] text-wrap tracking-[-0.01em] text-left font-normal leading-[1.2em] whitespace-pre-wrap max-[1199px]:text-[16px]">
                                "To be a leading umbrella corporation that empowers innovation, streamlines operations, and drives sustainable growth across a diverse portfolio of businesses, while fostering long-term value for stakeholders and society."
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-nowrap flex-row [flex:1_0_0px] gap-[10px] aspect-[1/1] bg-setting-dim h-auto w-[1px] overflow-visible relative max-[1199px]:flex-none max-[1199px]:w-full max-[1199px]:order-0">
                        <svg className="text-accent-bright flex-none h-auto w-1/2 relative aspect-[1]" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 14.5 6.25 C 14.5 7.25 12.75 12.5 7.25 12.5 C 1.75 12.5 0 7.25 0 6.25 C 0 5.25 1.75 0 7.25 0 C 12.75 0 14.5 5.25 14.5 6.25 Z" fill="transparent" height="12.5px" id="KuDKNszfv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.75 5.75)" width="14.5px"></path>
                            <path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" fill="transparent" height="4.5px" id="dwzTVdd43" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(9.75 9.75)" width="4.5px"></path>
                        </svg>
                    </div>
                </AnimateFlyInBottom>

                <AnimateFlyInBottom viewportAmount={0.4} classNames="items-center flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center max-w-full overflow-hidden relative w-full max-[1199px]:flex-col max-[1199px]:gap-6">
                    <div className="items-center aspect-[1/1] bg-setting-dim flex [flex:1_0_0px] flex-row flex-nowrap gap-2.5 h-auto justify-center overflow-visible relative w-[1px] max-[1199px]:flex-none max-[1199px]:w-full">
                        <svg className="text-accent-bright flex-none h-auto relative w-1/2 aspect-[1]" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0 7.25 C 0 3.246 3.246 0 7.25 0 C 11.254 0 14.5 3.246 14.5 7.25 C 14.5 11.254 11.254 14.5 7.25 14.5 C 3.246 14.5 0 11.254 0 7.25 Z" fill="transparent" height="14.5px" id="eykqsanp5" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4.75 4.75)" width="14.5px"></path>
                            <path d="M 0 4.25 C 0 1.903 1.903 0 4.25 0 C 6.597 0 8.5 1.903 8.5 4.25 C 8.5 6.597 6.597 8.5 4.25 8.5 C 1.903 8.5 0 6.597 0 4.25 Z" fill="transparent" height="8.5px" id="NWbhVZVdN" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(7.75 7.75)" width="8.5px"></path>
                            <path d="M 0 1.25 C 0 0.56 0.56 0 1.25 0 C 1.94 0 2.5 0.56 2.5 1.25 C 2.5 1.94 1.94 2.5 1.25 2.5 C 0.56 2.5 0 1.94 0 1.25 Z" fill="transparent" height="2.5px" id="tfM3j2MBu" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(10.75 10.75)" width="2.5px"></path>
                        </svg>
                    </div>
                    <div className="items-center flex [flex:1_0_0px] flex-col flex-nowrap gap-[15px] h-min justify-center overflow-visible relative w-[1px] max-[1199px]:flex-none max-[1199px]:w-full">
                        <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto max-w-full relative whitespace-pre-wrap w-[80%] max-[1199px]:w-full">
                            <p className="font-anton text-[32px] text-left tracking-[-0.03em] leading-[1em] ">
                                OUR MISSION
                            </p>
                        </div>

                        <div className="outline-none space-y-[28.8px] flex flex-col justify-start shrink-0 flex-none h-auto max-w-full relative whitespace-pre-wrap w-[80%] max-[1199px]:w-full">
                            <p className="font-mono text-[24px] max-[1199px]:text-[16px] tracking-[-0.01em] text-left font-normal leading-[1.2em] whitespace-pre-wrap text-wrap ">
                                ✦ Provide strategic leadership and support to our group companies
                            </p>

                            <p className="font-mono text-[24px] max-[1199px]:text-[16px] tracking-[-0.01em] text-left font-normal leading-[1.2em] whitespace-pre-wrap text-wrap ">
                                ✦ Build a dynamic ecosystem of businesses across various sectors
                            </p>

                            <p className="font-mono text-[24px] max-[1199px]:text-[16px] tracking-[-0.01em] text-left font-normal leading-[1.2em] whitespace-pre-wrap text-wrap ">
                                ✦ Promote collaboration, efficiency, and innovation within our corporate group
                            </p>

                            <p className="font-mono text-[24px] max-[1199px]:text-[16px] tracking-[-0.01em] text-left font-normal leading-[1.2em] whitespace-pre-wrap text-wrap ">
                                ✦ Uphold ethical business practices and deliver value to all stakeholders
                            </p>

                        </div>
                    </div>

                </AnimateFlyInBottom>

            </div>

            <AnimateFlyInBottom classNames="items-start bg-setting-dim flex flex-col flex-nowrap gap-6 h-min justify-center overflow-hidden px-[40px] pt-[40px] pb-[100px] relative w-full">
                <svg className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-full" viewBox="0 0 351 67">
                    <foreignObject className="overflow-visible w-full h-full whitespace-pre " >
                        <p className="font-anton text-[56px] text-accent-bright whitespace-pre font-normal leading-[1.2em]">
                            Our Core Values
                        </p>
                    </foreignObject>
                </svg>

                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-[58%] max-[1199px]:w-full">
                    <p className="font-mono text-left text-accent-bright font-normal text-[16px] leading-[1.2em] whitespace-pre-wrap">
                        Our experienced leadership brings together vision, expertise, and strategic foresight to drive growth and excellence across all group companies.
                    </p>
                </div>

                <div className="grid flex-none gap-x-6 gap-y-6 auto-rows-[200px] grid-cols-[repeat(3,minmax(50px,1fr))] grid-rows-[repeat(2,200px)] h-[424px] justify-center overflow-hidden relative w-full max-[1199px]:h-min max-[1199px]:grid-cols-[repeat(1,minmax(50px,1fr))]">
                    {
                        [
                            {
                                type: "heart",
                                title: "integrity",
                                value: "We operate with honesty, transparency, and accountability in all our business dealings.",
                            },
                            {
                                type: "sun",
                                title: "innovation",
                                value: "We embrace change and continuously seek new ideas and technologies to drive progress across our companies.",
                            },
                            {
                                type: "stack",
                                title: "Collaboration",
                                value: "We believe in the power of teamwork, synergy, and shared success among our subsidiaries and stakeholders.",
                            },
                            {
                                type: "star",
                                title: "excellence",
                                value: "We strive for the highest standards of quality, performance, and operational efficiency in businesses we support.",
                            },
                            {
                                type: "cloud",
                                title: "sustainability",
                                value: "We are committed to sustainable practices that protect the environment and ensure long-term value creation.",
                            },
                            {
                                type: "people",
                                title: "Customer Centricity",
                                value: "We prioritize customer satisfaction by supporting companies in delivering superior products & services.",
                            }
                        ].map((card, index) => {
                            return <ValueCard key={index} {...card} />
                        })
                    }
                </div>
            </AnimateFlyInBottom>

            <AnimateFlyInBottom classNames="items-start flex flex-none flex-col flex-nowrap gap-6 h-min justify-center overflow-hidden p-10 max-[1199px]:px-6 relative w-full">

                <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto max-[1199px]:w-full max-[1199px]:whitespace-pre-wrap">
                    <p className="max-[1199px]:text-[40px] font-anton text-[56px] font-normal tracking-normal leading-[1.2em] text-start max-[1199px]:text-center whitespace-pre h-auto w-auto flex-none relative" >
                        Leadership Team
                    </p>
                </div>

                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre w-full ">
                    <p className="font-mono text-left max-[1199px]:text-center font-normal leading-[1.2em] tracking-normal text-[16px] flex-none h-auto relative whitespace-pre-wrap w-full">
                        Our experienced leadership brings together vision, expertise, and strategic foresight to drive growth and excellence across all group companies.
                    </p>
                </div>

                <div className="items-center flex flex-none flex-nowrap gap-4 h-[357px] justify-center overflow-hidden relative w-full max-[1199px]:h-min max-[1199px]:flex-col">
                    <TeamLeadCard
                        name="Mr. Kalpesh J. Vaghasiya"
                        position="Managing Director"
                        precis="Leads overall strategic direction and operational leadership of AAA Tech Corporation. With deep understanding of corporate governance and business dynamics, he plays a pivotal role in decision-making, resource allocation, and growth planning."
                        img="/mr_kalpesh.avif"
                        imgAlt="Managing Director - Mr. Kalpesh J. Vaghasiya"
                    />
                    <TeamLeadCard
                        variant="secondary"
                        name="Mr. Rahul D. Vaghasiya"
                        position="Director"
                        precis="Co-founder and Director instrumental in overseeing key functions and supporting development of new business ventures. His leadership strengthens the corporation's foundation and ensures alignment with long-term goals."
                        img="/mr_rahul.avif"
                        imgAlt="Director - Mr. Rahul D. Vaghasiya"
                    />
                    <TeamLeadCard
                        name="Mr. Ronak Godara"
                        position="Head of Business Development"
                        precis="Leads Business Development division, responsible for identifying new opportunities, partnerships, and market expansion strategies. His proactive approach contributes significantly to the corporation's growth and outreach."
                        img="/mr_ronak.avif"
                        imgAlt="Head of Business Development - Mr. Ronak Godara"
                    />
                </div>
                <div className="outline-none flex flex-col justify-end shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full ">
                    <p className="font-mono text-right font-normal text-[16px] tracking-normal leading-[1.2em] flex-none h-auto relative whitespace-pre-wrap w-full">
                        Team Members : 10-20
                    </p>
                </div>
            </AnimateFlyInBottom>

            {/* <div className="w-full h-min px-[40px] mb-10 ">
                <div className="p-[40px] bg-[#1a1f71] text-white w-full">
                    <div className="py-[38px] space-y-[40px] w-full">
                        <div className="space-y-[10px] w-full">

                            <p className="font-anton text-[56px] font-normal leading-[1.2em]">
                                Ready to partner with us ?
                            </p>
                            <p className="font-mono text-[16px] leading-[1.2em]">
                                Join us in building the future across textile, dairy, and mining equipment industries.
                            </p>
                        </div>

                        <div className="w-full h-20 flex justify-end">
                            <button className="font-mono text-[27px] font-extrabold leading-[1.2em] text-[#1a1f71] bg-[#e2e3f8] h-full p-[27.15px] items-center cursor-pointer flex flex-row flex-nowrap justify-center overflow-hidden relative ">
                                ✦ Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            <GetQuoteComp />
        </div>
    );
}


