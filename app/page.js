import Image from "next/image";
// import NavBar from "@/app/_components/NavBar";
import { VscArrowSmallRight } from "react-icons/vsc";
import StickyCard from "./_components/StickyCard";

export default function Home() {
  return (
    <div className="min-h-screen pt-[235px] mb-0">
      {/* <NavBar /> */}
      {/* <div className="w-full px-[40px] flex items-end flex-row flex-nowrap gap-4 h-[192px] mt-[204px] justify-center overflow-visible"> */}
      <div className="brand-header-container flex items-end justify-center flex-row flex-nowrap gap-4 h-48 w-full overflow-visible px-10 relative flex-none">
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
            <p className="font-mono font-medium text-right leading-[1.2em]">
              Leading umbrella corporation empowering innovation across textile manufacturing,
              dairy products, and mining equipment sectors with strategic leadership and operational
              excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-2.5">

        <div className="items-center flex flex-none flex-row flex-nowrap gap-1 h-[442px] justify-center overflow-hidden relative w-[93%]">
          <div className="flex-none h-full overflow-hidden relative w-[33%]">
            <Image
              fill
              className="object-cover"
              src="/cotton.avif"
              alt="clothes image"
            />
          </div>
          <div className="flex-none h-full overflow-hidden relative w-[33%]">
            <Image
              fill
              className="object-cover"
              src="/dairy.avif"
              alt="Dairy Image"

            />
          </div>
          <div className="flex-none h-full overflow-hidden relative w-[33%]">
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

      <div className="mt-20 mb-15 flex flex-col flex-none flex-nowrap items-center justify-center gap-[10px] overflow-hidden px-[40px] w-full h-min">
        <div className="outline-none flex justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
          <p className="font-mono font-medium text-[16px] leading-[1.2em] w-full">Est 2018</p>
        </div>
        <div className="outline-none flex flex-col shrink-0 justify-start h-auto relative whitespace-pre-wrap w-full">
          <p className="font-anton text-[56px] font-normal leading-[1.2em] ">
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


      <div className="items-center flex flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-10 w-full">
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

      <div className="w-full h-min px-[40px] mb-10 ">
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
      </div>

      
        {/* <div className=" overflow-hidden w-full">
          <p className="text-[115px] font-anton w-full font-normal p-2.5 leading-[1.2em]">
        • AAATech Corporation • Est 2000
        </p>
        </div> */}
    </div>
  );
}
