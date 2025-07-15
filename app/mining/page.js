import CardBasic from "../_components/CardBasic";
import DivisionBanner from "../_components/DivisionBanner";
import DivisionBannerCard from "../_components/DivisionBannerCard";
import DivisionSection from "../_components/DivisionSection";
import GetQuoteComp from "../_components/GetQuoteComp";

export const metadata = {
    title: "AAA Tech Corp • Mining",
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <DivisionBanner
                bannerTitle="Mining Equipments"
                bannerSize="146.5px"
                svgViewBox="0 0 1120 176"
                bannerSrc="/banner_mining.avif"
                bannerAlt="Banner for mining machinery"
                precis="Heavy machinery operation and leasing services"
            />

            <DivisionSection >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"10+ Excavators"}
                        precis={["Excavators Currently Operating"]}
                    />
                    <CardBasic
                        title={"Launch Timeline"}
                        precis={["September 2025 (Facility photos will be added to website)"]}
                    />
                    <CardBasic
                        title={"Future Expansion Plan"}
                        precis={["50+ Excavator launch by March 2026"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc="/excavator.avif"
                    imgAlt="Stirdy exacavation machinery"
                    summary={[
                        {
                            title: "Service Areas",
                            bullets: [
                                "✦ Multiple locations across India",
                                "✦ International operations",
                                "✦ Mining and construction projects",
                                "✦ Collaborative operational agreements",
                            ],
                        },
                        {
                            title: "Strategic Deployment",
                            bullets: [
                                "✦ Different locations in India",
                                "✦ Global market expansion",
                                "✦ Infrastructure projects",
                                "✦ Large-scale earthmoving",
                            ],
                        }
                    ]}
                    highlights={{
                        title: "Enhanced Support",
                        points: ["Collaboration", "Maintenance", "Asset Management", "Efficiency",]
                    }}
                />
            </DivisionSection>
            <GetQuoteComp />
        </div>
    );
}
