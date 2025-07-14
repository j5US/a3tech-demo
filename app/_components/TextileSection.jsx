function TextileSection({title, precis, children}) {
    return (
        <div className="items-start flex flex-none flex-col flex-nowrap gap-6 h-min justify-center overflow-hidden px-10 max-[1199px]:px-6 py-10 relative w-full">
            <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                <p className="font-anton text-[56px] max-[1199px]:text-[32px] font-normal tracking-normal leading-[1.2em] whitespace-pre-wrap w-full">
                    {/* World Class Yarn Manufacturing */}
                    {title}
                </p>
            </div>
            <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full">
                <div className="font-mono font-medium tracking-[-0.02em] leading-[1.6em] ">
                    {/* Robust yarn and fabric manufacturing infrastructure */}
                    {precis}
                </div>
            </div>

            {children}

        </div>
    );
}

export default TextileSection;
