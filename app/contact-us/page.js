import Image from "next/image";
import DivisionBanner from "../_components/DivisionBanner";
import FormField from "../_ui/FormField";
import ContactBanner from "../_components/ContactBanner";
import FormSelect from "../_ui/FormSelect";
import FormTextArea from "../_ui/FormTextArea";

export const metadata = {
    title: "AAA Tech Corp • Contact us",
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <ContactBanner />
            <div className="px-10 max-[1199px]:px-6">

                <div className="items-center flex flex-none flex-row gap-10 h-min overflow-hidden relative w-full max-[1199px]:flex-col max-[1199px]:justify-start">
                    <div className="self-stretch h-[614px] flex-none overflow-hidden relative w-[50%] max-[1199px]:w-full max-[1199px]:h-[328px]">
                        <Image
                            fill
                            className="object-cover"
                            src="/banner_contact.avif"
                            alt="High quality white cotton fabric"
                        />

                        <div className="max-[1199px]:hidden flex items-center border border-sticky-card-bound bg-setting-bright text-accent-dim rounded-lg flex-row gap-4 absolute right-[30px] left-[33px] bottom-[30px] p-4">
                            <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] ">
                                <p className="font-mono font-extrabold leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                    ✦ Quick Response Promise
                                </p>
                                <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                    • General inquiries: Within 24 hours
                                </p>
                                <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                    • Quote requests: Within 48 hours
                                </p>
                                <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                    • Technical specifications: Within 72 hours
                                </p>
                                <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                    • Partnership proposals: Within 1 week
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="items-start flex flex-none flex-col gap-5 h-min overflow-hidden relative w-[46%] max-[1199px]:w-full">
                        <FormField
                            autoComplete="name"
                            inputName="fullname"
                            placeholder="Enter your full name"
                            label="Name"
                            required
                        />
                        <FormField
                            autoComplete="email"
                            inputName="email"
                            placeholder="Enter your email address"
                            label="Email"
                            required
                        />
                        <FormField
                            autoComplete="tel"
                            inputName="phone"
                            placeholder="Enter your phone number"
                            label="Phone Number"
                            inputType="tel"
                            pattern="^\+?[1-9]\d{1,14}$"
                            required
                        />
                        <FormField
                            autoComplete="off"
                            inputName="company"
                            placeholder="Enter your company name"
                            label="Company Name"
                            inputType="text"
                            required
                        />
                        <FormSelect
                            selectName="location"
                            label="Type of inquiry"
                            values={[
                                {
                                    label: "Textile Manufacturing",
                                    val: "Textile Manufacturing",
                                },
                                {
                                    label: "Dairy Products",
                                    val: "Dairy Products",
                                },
                                {
                                    label: "Mining Equipments",
                                    val: "Mining Equipments",
                                },
                                {
                                    label: "Business Partnership",
                                    val: "Business Partnership",
                                },
                                {
                                    label: "Supply Inquiry",
                                    val: "Supply Inquiry",
                                },
                                {
                                    label: "Career Opportunities",
                                    val: "Career Opportunities",
                                },
                                {
                                    label: "General Inquiry",
                                    val: "General Inquiry",
                                },
                            ]}
                            required
                        />
                        <FormTextArea
                            label="Message"
                            required
                            name="Message"
                            placeholder="Tell us your requirement"
                        />
                        <div className="flex-none h-10 relative w-full">
                            <button
                                // type="submit"
                                className="hover:bg-accent-nav transition-all duration-200 bg-setting-dim leading-[1.2em] text-accent-bright tracking-normal size-full items-center cursor-pointer flex flex-row flex-nowrap justify-center overflow-visible relative"
                            >
                                Submit
                            </button>
                        </div>

                    </form>

                    <div className="w-full hidden max-[1199px]:flex items-center border border-sticky-card-bound bg-setting-bright text-accent-dim rounded-lg flex-row gap-4 p-4 mb-16">
                        <div className="outline-none flex flex-col justify-start shrink-0 [flex:1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] ">
                            <p className="font-mono font-extrabold leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                ✦ Quick Response Promise
                            </p>
                            <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                • General inquiries: Within 24 hours
                            </p>
                            <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                • Quote requests: Within 48 hours
                            </p>
                            <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                • Technical specifications: Within 72 hours
                            </p>
                            <p className="font-mono font-medium leading-[1.5em] text-[16px] tracking-normal whitespace-pre-wrap">
                                • Partnership proposals: Within 1 week
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
