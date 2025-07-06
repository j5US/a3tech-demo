function GetQuoteComp() {
    return (
        <div className="w-full h-min px-10 max-[1199px]:px-6 mb-10 ">
            <div className="p-10 max-[809px]:px-6 bg-[#1a1f71] text-white w-full">
                <div className="py-[38px] max-[809px]:py-16 space-y-[40px] w-full">
                    <div className="space-y-[10px] w-full">

                        <p className="font-anton text-[56px] max-[809px]:text-center max-[809px]:text-[24px] font-normal leading-[1.2em]">
                            Ready to partner with us ?
                        </p>
                        <p className="font-mono text-[16px] leading-[1.2em]">
                            Join us in building the future across textile, dairy, and mining equipment industries.
                        </p>
                    </div>

                    <div className="w-full h-20 flex justify-end">
                        <button className="max-[809px]:w-full w-auto font-mono text-[27px] font-extrabold leading-[1.2em] text-[#1a1f71] bg-[#e2e3f8] h-full p-[27.15px] items-center cursor-pointer flex flex-row flex-nowrap justify-center overflow-hidden relative ">
                            ✦ Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetQuoteComp;
