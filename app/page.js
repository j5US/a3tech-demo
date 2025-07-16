import StickyCard from "./_components/StickyCard";
import GetQuoteComp from "./_components/GetQuoteComp";
import LandingGallery from "./_components/LandingGallery";
import WeFosterCard from "./_components/WeFosterCard";
import LandingBanner from "./_components/LandingBanner";
import AnimateTilt from "./_components/AnimateTilt";
import stickyPoster1 from "@/public/fabric.jpg";
import stickyPoster2 from "@/public/dairy_platter.jpg";
import stickyPoster3 from "@/public/terrain.avif";
import stickyPoster4 from "@/public/washing_machine.jpg";
import stickyPoster5 from "@/public/building.jpg";

export default function Home() {
  return (
    <div className="min-h-screen pt-[155px] mb-0">
      {/* <div className="w-full px-[40px] flex items-end flex-row flex-nowrap gap-4 h-[192px] mt-[204px] justify-center overflow-visible"> */}
      <LandingBanner />

      <div className="hidden my-6 mt-7 max-[809px]:flex w-full h-[44px] relative flex-none px-6">
        <AnimateTilt component="button" bgSetting="var(--setting-dim)" hoverSetting="var(--accent-nav)" classNames="bg-setting-dim size-full w-full items-center cursor-pointer flex flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-4 relative">
          <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto cursor-pointer ">
            <p className="font-mono font-extrabold text-accent-bright text-[16px] tracking-normal leading-[1.2em] whitespace-pre relative cursor-pointer ">
              ✦ Get Quote
            </p>
          </div>
        </AnimateTilt>
      </div>

      <div className="w-full flex justify-center mt-2.5">
        <LandingGallery />
      </div>

      <div className="mt-20 mb-28 px-10 max-[809px]:px-6 w-full h-min">
        <WeFosterCard />
      </div>


      <div className="h-min relative overflow-visible p-10 max-[809px]:p-6 w-full">
        {
          [
            {
              title: "Textile Manufacturing",
              precis: "Advanced yarn and fabric production with cutting-edge technology",
              // image: "/fabric.jpg",
              image: stickyPoster1,
              imageAlt: "Piece of silky smooth fabric",
              contents: <>
                <li> • 45+ Air Jet Looms (China-imported) </li>
                <li> • 20,000 meters/day capacity</li>
                <li> • 4 computerized embroidery machines</li>
                <li> • Expanding to 1,000+ looms by 2026 </li>
              </>,
              linkRef: "/textile",
            },
            {
              title: "Milk Products",
              precis: "Full-scale dairy processing facility at Karjan, Vadodara",
              // image: "/dairy_platter.jpg",
              image: stickyPoster2,
              imageAlt: "Platter full of dairy products",
              variant: "secondary",
              contents: <>
                <li> • Milk, curd, ghee, paneer production </li>
                <li> • In-house cold storage </li>
                <li> • Retail and bulk markets</li>
                <li> • Modern packaging capabilities</li>
              </>,
              linkRef: "/dairy",
            },
            {
              title: "Mining Equipments",
              precis: "Heavy machinery operation and leasing services",
              // image: "/terrain.avif",
              image: stickyPoster3,
              imageAlt: "Picture of terrain being excavated",
              contents: <>
                <li> • 10 excavators currently operational </li>
                <li> • Multiple locations across India </li>
                <li> • Expanding to 50 excavators by March 2026 </li>
                <li> • International operations planned </li>
              </>,
              linkRef: "/mining",
            },
            {
              title: "Laundry Services",
              precis: "Equipped with 5+ professional pressing machines for efficient service.",
              // image: "/washing_machine.jpg",
              image: stickyPoster4,
              imageAlt: "Laundry machinery - washing machines",
              variant: "secondary",
              contents: <>
                <li> • All fabric pressing </li>
                <li> • Quick service </li>
                <li> • Careful handling</li>
                <li> • For homes & businesses</li>
              </>,
              linkRef: "/laundry",
            },
            {
              title: "Real Estate",
              precis: "We offer reliable real estate solutions to meet your property needs.",
              // image: "/building.jpg",
              image: stickyPoster5,
              imageAlt: "Picture of tall buildings",
              contents: <>
                <li> • Property buying & selling </li>
                <li> • Rental & lease services </li>
                <li> • Verified property listings </li>
                <li> • Expert market guidance </li>
              </>,
              linkRef: "/real-estate",
            },
          ].map((card, index) => {
            return <StickyCard key={index} index={index} {...card} />
          })
        }
      </div>

      <GetQuoteComp />


      {/* <div className=" overflow-hidden w-full">
          <p className="text-[115px] font-anton w-full font-normal p-2.5 leading-[1.2em]">
        • AAATech Corporation • Est 2000
        </p>
        </div> */}
    </div>
  );
}
