import CardBasic from "../_components/CardBasic";
import DivisionBanner from "../_components/DivisionBanner";
import DivisionBannerCard from "../_components/DivisionBannerCard";
import DivisionSection from "../_components/DivisionSection";
import GetQuoteComp from "../_components/GetQuoteComp";

export const metadata = {
    title: "AAA Tech Corp • Real Estate",
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <DivisionBanner
                bannerTitle="Real Estate"
                bannerSize="254.8px"
                svgViewBox="0 0 1120 306"
                bannerSrc="/banner_infra.avif"
                bannerAlt="Banner for real estate page - Asthetically pleasing housing complex"
                precis="Luxury Flat and Villas"
            />

            <DivisionSection >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"Luxury Flat and Villas"}
                        precis={["at the heart of Bengaluru"]}
                    />
                    <CardBasic
                        title={"Project Starts from"}
                        precis={["August 2025 (Facility photos will be added to website)"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc="/infra_city.avif"
                    imgAlt="City landscape with towering buildings"
                    summary={[
                        {
                            title: "Projects",
                            bullets: [
                                "✦ 500+ Flats for 2 BHK & 3 BHK",
                                "✦ 100+ Villas",
                            ],
                        },
                    ]}
                    highlights={{
                        title: "All Amenities Available",
                        points: ["Collaboration", "Maintenance", "Asset Management", "Efficiency",]
                    }}
                />
            </DivisionSection>
            <GetQuoteComp />
        </div>
    );
}
