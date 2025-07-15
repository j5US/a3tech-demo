function FormSelect({ label, selectName, required = false, values }) {
    return (
        <label className="items-start flex flex-none flex-col gap-2.5 h-min relative w-full">
            <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto">
                <p className="font-mono text-[12px] font-medium text-accent-dim tracking-normal leading-[1.2em] whitespace-pre">
                    {label}
                </p>
            </div>
            <div className="flex-none bg-setting-input h-10 focus-within:border-sticky-card-bound border border-input-bound pr-3 relative w-full overflow-hidden">
                <select
                    required={required}
                    name={selectName}
                    defaultValue={""}
                    className="disabled-initial w-full h-10 outline-none text-accent-dim font-mono tracking-normal leading-[1.2em] text-[14px] font-medium rounded-none px-2.5 py-3">
                    <option className="tracking-normal leading-[1.2em] font-mono text-black" value={""} disabled >Select...</option>
                    {
                        values.map((v, index) => {
                            const { label, val } = v;
                            return (
                                <option
                                    key={index}
                                    className="tracking-normal leading-[1.2em] font-mono text-black"
                                    value={val}
                                >
                                    {label}
                                </option>
                            );

                        })
                    }
                </select>
            </div>
        </label>
    );
}

export default FormSelect;
