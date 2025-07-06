import Image from "next/image";
// import NavBar from "@/app/_components/NavBar";
import { VscArrowSmallRight } from "react-icons/vsc";
import StickyCard from "./_components/StickyCard";
import GetQuoteComp from "./_components/GetQuoteComp";

export default function Home() {
  return (
    <div className="min-h-screen pt-[155px] mb-0">
      {/* <NavBar /> */}
      {/* <div className="w-full px-[40px] flex items-end flex-row flex-nowrap gap-4 h-[192px] mt-[204px] justify-center overflow-visible"> */}
      <div className="mt-[80px] max-[1199px]:mt-0 brand-header-container flex items-end justify-center flex-row flex-nowrap gap-4 h-48 w-full overflow-visible px-10 max-[809px]:px-6 relative flex-none">
        <svg
          viewBox="0 0 532 192"
          className="brand-header h-auto flex-none relative whitespace-pre outline-none w-[50%] shrink-0 justify-start flex flex-col opacity-[1]"
        >
          <foreignObject width="100%" height="100%"
            style={{
              overflow: 'visible',
              transformOrigin: 'center center',
              whiteSpace: 'pre',
            }}
          >
            <p
              className="text-[160px] font-anton whitespace-pre leading-[1.2em] "
              xmlns="http://www.w3.org/1999/xhtml"
            >
              AAATech
            </p>
          </foreignObject>
        </svg>
        <div className="brand-overview-container items-center flex flex-row flex-nowrap [flex:1_0_0px] gap-2.5 h-[192px] w-[1px] relative justify-center overflow-hidden">
          <div className="brand-overview outline-none relative flex w-[86%] h-[56%] flex-col justify-end shrink-0 whitespace-pre-wrap">
            <p className="font-mono font-medium text-right leading-[1.2em] w-full">
              Leading umbrella corporation empowering innovation across textile manufacturing,
              dairy products, and mining equipment sectors with strategic leadership and operational
              excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden my-6 mt-7 max-[809px]:flex w-full h-[44px] relative flex-none px-6">
        <button className="bg-[#1a1f71] size-full w-full items-center cursor-pointer flex flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-4 relative">
          <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto cursor-pointer ">
            <p className="font-mono font-extrabold text-white text-[16px] tracking-normal leading-[1.2em] whitespace-pre relative cursor-pointer ">
              ✦ Get Quote
            </p>
          </div>
        </button>
      </div>

      <div className="w-full flex justify-center mt-2.5">

        <div className="max-[809px]:flex-col max-[809px]:h-[635px] items-center flex flex-none flex-row flex-nowrap gap-1 h-[442px] justify-center overflow-hidden relative w-[93%]">
          <div className="flex-none h-full overflow-hidden relative w-[33%] max-[809px]:[flex:1_0_0px] max-[809px]:h-[1px] max-[809px]:w-full">
            <Image
              fill
              className="object-cover"
              src="/cotton.avif"
              alt="clothes image"
            />
          </div>
          <div className="flex-none h-full overflow-hidden relative w-[33%] max-[809px]:[flex:1_0_0px] max-[809px]:h-[1px] max-[809px]:w-full">
            <Image
              fill
              className="object-cover"
              src="/dairy.avif"
              alt="Dairy Image"

            />
          </div>
          <div className="flex-none h-full overflow-hidden relative w-[33%] max-[809px]:[flex:1_0_0px] max-[809px]:h-[1px] max-[809px]:w-full">
            <Image
              fill
              className="object-cover"
              src="/automobile.avif"
              alt="Automobile Image"
              objectFit="cover"
            />
          </div>
        </div>

      </div>

      <div className="mt-20 mb-15 flex flex-col flex-none flex-nowrap items-center justify-center gap-[10px] overflow-hidden px-10 max-[809px]:px-6 w-full h-min">
        <div className="outline-none flex justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
          <p className="font-mono font-medium text-[16px] leading-[1.2em] w-full">Est 2018</p>
        </div>
        <div className="outline-none flex flex-col shrink-0 justify-start h-auto relative whitespace-pre-wrap w-full">
          <p className="font-anton text-[56px] max-[1199px]:text-[40px] max-[809px]:text-[32px] font-normal leading-[1.2em] ">
            We foster synergy and sustainable growth by uniting diverse
            industries under one agile, future-focused ecosystem.
          </p>
        </div>
        <div className="outline-none flex justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
          <p className="flex gap-1.5 justify-end items-center font-mono  text-right leading-[1.2em] w-full">
            <span className="text-[24px] font-bold">Read More</span>
            <VscArrowSmallRight className="text-[26px] mt-0.5 mr-1" />
          </p>
        </div>
      </div>


      <div className="items-center flex flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-10 max-[809px]:p-6 w-full">
        <StickyCard
          title="Textile Manufacturing"
          precis="Advanced yarn and fabric production with cutting-edge technology"
          image="/yarn.avif"
          imageAlt="Yarn image describing textile industry"
        >
          <li> • 45+ Air Jet Looms (China-imported) </li>
          <li> • 20,000 meters/day capacity</li>
          <li> • 4 computerized embroidery machines</li>
          <li> • Expanding to 1,000+ looms by 2026 </li>
        </StickyCard>

        <StickyCard
          title="Milk Products"
          precis="Full-scale dairy processing facility at Karjan, Vadodara"
          image="/dairy-bottles.avif"
          imageAlt="Shelves full of dairy products"
          variant="secondary"
        >
          <li> • Milk, curd, ghee, paneer production </li>
          <li> • In-house cold storage </li>
          <li> • Retail and bulk markets</li>
          <li> • Modern packaging capabilities</li>
        </StickyCard>

        <StickyCard
          title="Mining Equipments"
          precis="Heavy machinery operation and leasing services"
          image="/terrain.avif"
          imageAlt="Picture of terrain being excavated"
        >
          <li> • 10 excavators currently operational </li>
          <li> • Multiple locations across India </li>
          <li> • Expanding to 50 excavators by March 2026 </li>
          <li> • International operations planned </li>
        </StickyCard>

      </div>

      <GetQuoteComp/>


      {/* <div className=" overflow-hidden w-full">
          <p className="text-[115px] font-anton w-full font-normal p-2.5 leading-[1.2em]">
        • AAATech Corporation • Est 2000
        </p>
        </div> */}
    </div>
  );
}
