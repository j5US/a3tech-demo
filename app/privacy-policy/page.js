import GetQuoteComp from "../_components/GetQuoteComp";


export const metadata = {
    title: "AAA Tech Corp • Privacy Policy",
}

const Bullet = ({ points }) => {
    return (
        <ul className="relative font-mono font-medium tracking-[-0.02em] leading-[1.6em] whitespace-pre-wrap pl-[3ch]">

            {points.map((item, index) => {
                const { label, value } = item;
                return <li key={index} className="tracking-[-0.02em] leading-[1.6em] whitespace-pre-wrap [&::before]:absolute [&::before]:left-0 [&::before]:content-['•']">
                    <strong>{label && `${label}: `}</strong>{value}
                </li>
            })}
        </ul>
    );
}

export default function Page() {

    return (
        <div className="pt-[200px]">
            <div className="items-end flex flex-none flex-col gap-2.5 h-min overflow-hidden px-10 pb-6 max-[1199px]:px-6">
                <svg
                    className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre w-full"
                    viewBox={"0 0 314 67"}
                >
                    <foreignObject width="100%" height="100%" transform="scale(1)"
                        style={{
                            overflow: "visible",
                            transformOrigin: "center center",
                            whiteSpace: "pre",
                        }}>
                        <p style={{ fontSize: "56px" }} className="font-anton whitespace-pre font-normal tracking-normal leading-[1.2em]">
                            Privacy Policy
                        </p>
                    </foreignObject>
                </svg>
            </div>

            <div className="px-10 max-[1199px]:px-6 space-y-6 mb-10">
                <div className="border border-sticky-card-bound w-fit bg-setting-bright rounded-md p-2 py-1.5">
                    <p className="font-mono font-medium leading-[1.5em] text-[16px]">
                        Last Updated: 24 June 2025
                    </p>
                </div>

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Introduction
                </h4>

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em] whitespace-pre-wrap">
                    This Privacy Policy describes how our Multi-Business Accounting and Manufacturing Process Management Application ("the Application", "we", "us", or "our") collects, uses, and protects your personal and business information. We are committed to protecting your privacy and ensuring the security of your sensitive financial and operational data.
                </p>

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em] whitespace-pre-wrap">
                    <strong>Important:</strong> This application handles sensitive financial data, manufacturing information, and business intelligence. We implement enterprise-grade security measures to protect your information.
                </p>

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Information We Collect
                </h4>

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    Business and Financial Data
                </h5>

                <Bullet points={[
                    { label: "Financial Information", value: "Revenue data, expenditures, profit calculations, cash flow records, tax information" },
                    { label: "Accounting Records", value: "Fixed and variable costs, business-wise financial tracking, consolidated portfolio data" },
                    { label: "Manufacturing Data", value: "Quotations, purchase orders, production tracking, inventory management, delivery schedules" },
                    { label: "Customer Information", value: "Contact details, tax information, purchase history, payment terms, profitability analysis" },
                    { label: "Vendor Information", value: "Contact details, contract information, performance metrics, purchase history" },
                ]} />

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    User Account Information
                </h5>

                <Bullet points={[
                    { label: "", value: "User credentials and authentication data" },
                    { label: "", value: "Role assignments (Master Admin, Partner, Data Entry Employee)" },
                    { label: "", value: "Business access permissions and assignments " },
                    { label: "", value: "User activity logs and system interactions" },
                ]} />

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    How We Use Your Information
                </h4>

                <div className="w-full overflow-x-auto">
                    <div className="w-full min-w-[570px] space-y-1">
                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Purpose</div>
                            <div className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Data Used</div>
                            <div className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Legal Basis</div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Financial Management</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">All financial and accounting data</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Contract Performance</div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Manufacturing Process Management</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Production, inventory, and order data</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Contract Performance</div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Business Analytics & Reporting</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Aggregated business performance data</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Legitimate Interest</div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">User Authentication & Access Control</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">User credentials and role information</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Contract Performance</div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-1">
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">System Security & Maintenance</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Technical logs and usage data</div>
                            <div className="font-mono text-[16px] leading-[1.6em] tracking-[-0.02em] font-bold whitespace-pre-wrap pl-3.5 py-2 bg-setting-bright">Legitimate Interest</div>
                        </div>
                    </div>
                </div>

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Data Access and Sharing
                </h4>

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    Role-Based Access Control
                </h5>

                <Bullet points={[
                    { label: "Master Admins/Owners", value: "Full access to all business data, financial reports, and system administration" },
                    { label: "Partners", value: "Access limited to assigned businesses only, view-only permissions for financial and manufacturing data" },
                    { label: "Data Entry Employees", value: "Limited access to enter transactional data, no access to overall financial analytics" },
                ]} />

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    Third-Party Sharing
                </h5>

                <p className="font-mono font-bold tracking-[-0.02em] leading-[1.6em]">
                    We do not sell, trade, or rent your personal or business information to third parties. We may share information only in the following circumstances:
                </p>

                <Bullet points={[
                    { label: "", value: "With your explicit consent" },
                    { label: "", value: "To comply with legal obligations or court orders" },
                    { label: "", value: "With trusted service providers who assist in application hosting and maintenance (under strict confidentiality agreements)" },
                    { label: "", value: "In case of business transfer or merger (with advance notification)" },
                ]} />

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Data Security
                </h4>

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    Security Measures
                </h5>

                <Bullet points={[
                    { label: "Access Controls", value: "Multi-factor authentication and role-based access control" },
                    { label: "Infrastructure", value: "Secure cloud hosting with regular security audits" },
                    { label: "Monitoring", value: "24/7 security monitoring and intrusion detection" },
                    { label: "Backup", value: "Regular encrypted backups with disaster recovery procedures" },
                    { label: "Compliance", value: "Regular security assessments and vulnerability testing" },
                ]} />

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    <strong>Data Breach Protocol:</strong> In the unlikely event of a data breach, we will notify affected users within 72 hours and provide detailed information about the incident and remediation steps.
                </p>

                <h5 className="font-anton text-[18px] leading-[1.2em] whitespace-pre-wrap font-normal">
                    Data Retention
                </h5>

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    We retain your data for as long as necessary to provide our services and comply with legal obligations:
                </p>

                <Bullet points={[
                    { label: "Financial Records", value: "Retained as required by accounting regulations" },
                    { label: "Manufacturing Data", value: "Retained for operational and warranty purposes" },
                    { label: "User Account Data", value: "Retained until account deletion" },
                ]} />

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Your Rights
                </h4>

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    You have the following rights regarding your personal data:
                </p>

                <Bullet points={[
                    { label: "Access", value: "Request information about data we hold about you" },
                    { label: "Rectification", value: "Request correction of inaccurate or incomplete data" },
                    { label: "Erasure", value: "Request deletion of your data (subject to legal retention requirements)" },
                    { label: "Portability", value: "Request transfer of your data in a structured, machine-readable format" },
                    { label: "Restriction", value: "Request limitation of data processing in certain circumstances" },
                    { label: "Objection", value: "Object to processing based on legitimate interests" },
                ]} />

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                </p>

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Updates to This Policy
                </h4>

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through:
                </p>

                <Bullet points={[
                    { label: "", value: "Email notification to registered users" },
                    { label: "", value: "In-application notifications" },
                    { label: "", value: "Updates on our website" },
                ]} />

                <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                    Continued use of the application after policy updates constitutes acceptance of the revised terms.
                </p>

                <h4 className="font-anton text-2xl leading-[1.2em] whitespace-pre-wrap font-normal">
                    Contact Information
                </h4>

                <div className="space-y-2">
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                        <strong>Data Protection Officer: ronak@a3tech.in</strong>
                    </p>
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                        <strong>General Inquiries: ronak@a3tech.in</strong>
                    </p>
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                        <strong>Phone: +91 84608 97841</strong>
                    </p>
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                        <strong>Address: <br /></strong>
                        <span>ZEFA-11A,Phoenix Kessaku,RAJKUMAR ROAD,</span><br />
                        <span>opposite ORION MALL, Rajaji Nagar,</span><br />
                        <span>Bengaluru,karnataka,560010</span><br />
                    </p>
                    <p className="font-mono font-medium tracking-[-0.02em] leading-[1.6em]">
                        <strong>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</strong>
                    </p>
                </div>

            </div>
            <GetQuoteComp />
        </div>
    );
}
