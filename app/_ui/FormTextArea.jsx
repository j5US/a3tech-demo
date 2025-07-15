function FormTextArea({ label, textAreaName, required, placeholder }) {
    return (
        <label className="items-start flex flex-none flex-col gap-2.5 h-min relative w-full">
            <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-auto">
                <p className="font-mono text-[12px] font-medium text-accent-dim tracking-normal leading-[1.2em] whitespace-pre">
                    {label}
                </p>
            </div>
            <div className="flex-none h-auto min-h-[100px] relative w-full overflow-hidden">
                <textarea
                    name={textAreaName}
                    autoComplete="off"
                    placeholder={placeholder}
                    className="w-full h-auto min-h-[100px] resize-y overflow-hidden  whitespace-break-spaces overflow-ellipsis outline-none border border-input-bound focus:border-sticky-card-bound bg-setting-input text-accent-dim font-mono tracking-normal leading-[1.2em] text-[14px] font-medium p-3 rounded-none placeholder:text-[#c1c3f1] "
                    required={required}
                >
                </textarea>
            </div>
        </label>
    );
}

export default FormTextArea;
