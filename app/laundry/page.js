import CardBasic from "../_components/CardBasic";
import DivisionBanner from "../_components/DivisionBanner";
import DivisionBannerCard from "../_components/DivisionBannerCard";
import DivisionSection from "../_components/DivisionSection";
import GetQuoteComp from "../_components/GetQuoteComp";
import bannerImg from "@/public/banner_laundry.avif";
import secBannerImg from "@/public/clothes_stack.avif";

export const metadata = {
    title: "AAA Tech Corp • Laundry",
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <DivisionBanner
                bannerTitle="Laundry Services"
                bannerSize="162.92px"
                svgViewBox="0 0 1120 196"
                bannerSrc={bannerImg}
                bannerAlt="Banner for laundry page - ironing a piece of fabric"
                precis="Distributor of Franchise - Laundry Legend"
            />

            <DivisionSection >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"5+ Ironing Machine"}
                        precis={["Multiple Service Areas"]}
                    />
                    <CardBasic
                        title={"Karnataka"}
                        precis={["Distributor of Franchise - Laundry Legend"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc={secBannerImg}
                    imgAlt="Clothes stacked on top of each other in a laundry"
                    summary={[
                        {
                            title: "Service Areas",
                            bullets: [
                                "✦ Dry cleaning",
                                "✦ Wash and fold",
                                "✦ Shoe cleaning",
                                "✦ Steam press",
                                "✦ Carpet cleaning",
                                "✦ Soft toy cleaning",
                                "✦ Back cleaning",
                                "✦ Helmet cleaning",
                            ],
                        },
                        {
                            title: "Franchise Plan",
                            bullets: [
                                "✦ 5 franchises by August this year",
                                "✦ 25 franchises by March 2026",
                            ],
                        }
                    ]}
                />
            </DivisionSection>
            <GetQuoteComp />
        </div>
    );
}
