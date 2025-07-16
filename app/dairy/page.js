import CardBasic from "../_components/CardBasic";
import DivisionBanner from "../_components/DivisionBanner";
import DivisionBannerCard from "../_components/DivisionBannerCard";
import DivisionSection from "../_components/DivisionSection";
import GetQuoteComp from "../_components/GetQuoteComp";
import bannerImg from "@/public/banner_dairy.avif"
import secBannerImg from "@/public/dairy_products.avif"

export const metadata = {
    title: "AAA Tech Corp • Dairy",
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <DivisionBanner
                bannerTitle="Dairy Products"
                bannerSize="191.7px"
                svgViewBox="0 0 1120 230"
                bannerSrc={bannerImg}
                bannerAlt="Banner for dairy products page - platter of dairy products"
                precis="Explore our versatile range of dairy products with full-scale dairy processing facility"
            />

            <DivisionSection >
                <div className="items-center flex flex-none flex-row max-[1199px]:flex-col max-[1199px]:h-min flex-nowrap gap-6 h-[255px] justify-center overflow-hidden relative w-full">
                    <CardBasic
                        title={"Location"}
                        precis={["Karjan, Vadodara, Gujarat"]}
                    />
                    <CardBasic
                        title={"Launch Timeline"}
                        precis={["September 2025 (Facility photos will be added to website)"]}
                    />
                    <CardBasic
                        title={"Future Expansion Plan"}
                        precis={["By September 2025, the Dairy Products Division will Launch in Karjan, Vadodara, Gujarat"]}
                    />
                </div>
                <DivisionBannerCard
                    imgSrc={secBannerImg}
                    imgAlt="An image full of high grade dairy items"
                    summary={[
                        {
                            title: "Infrastructure",
                            bullets: [
                                "✦ 1 Production and processing facility",
                                "✦ In-house cold storage capabilities",
                                "✦ Modern packaging infrastructure",
                            ],
                        },
                        {
                            title: "Market Focus",
                            bullets: [
                                "✦ Retail market coverage",
                                "✦ Bulk market operations",
                                "✦ Quality control standards",
                            ],
                        }
                    ]}
                    highlights={{
                        title: "Product Range",
                        points: ["Milk", "Curd", "Ghee", "Paneer", "Flavoured Products",]
                    }}
                />
            </DivisionSection>
            <GetQuoteComp />
        </div>
    );
}
