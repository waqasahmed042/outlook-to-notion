import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";

const sections = [
    {
        title: "1. License Grant",
        content:
            'Subject to the terms of this Agreement, OptimoSmartWork ("Licensor") grants you a limited, non-exclusive, non-transferable, revocable license to use the Outlook to Notion add-in ("the Software") solely for your personal or internal business purposes. You may not sublicense, sell, resell, or redistribute the Software.',
    },
    {
        title: "2. Description of Service",
        content:
            "Outlook to Notion is a Microsoft Outlook add-in that enables users to send email content from Microsoft Outlook directly to their Notion databases. The Software integrates with Notion's API to create database entries based on selected email content.",
    },
    {
        title: "3. User Responsibilities",
        content:
            "You are responsible for maintaining the confidentiality of your Notion account credentials and for all activities that occur through your use of the Software. You agree to use the Software only for lawful purposes and in compliance with all applicable laws, regulations, and Microsoft's usage policies for Outlook add-ins. You must not attempt to reverse-engineer, decompile, or disassemble the Software.",
    },
    {
        title: "4. Data Usage and Privacy",
        content:
            "Outlook to Notion processes email data solely for the purpose of transferring selected content to your designated Notion database. The Software does not store, retain, or share your email content on any external servers beyond what is necessary to complete the transfer to Notion. Email data is transmitted securely and is processed only at the time of the transfer. We do not sell, rent, or share your personal data with third parties. For more information, please refer to our Privacy Policy.",
    },
    {
        title: "5. Intellectual Property",
        content:
            "All intellectual property rights in the Software, including but not limited to code, design, logos, and documentation, are and shall remain the exclusive property of the Licensor. This Agreement does not grant you any rights to the Licensor's trademarks or service marks.",
    },
    {
        title: "6. No Warranty",
        content:
            'THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. THE LICENSOR DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.',
    },
    {
        title: "7. Limitation of Liability",
        content:
            "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF THE LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
    },
    {
        title: "8. Termination",
        content:
            "This Agreement is effective until terminated. The Licensor may terminate this Agreement at any time, with or without cause, by disabling your access to the Software. You may terminate this Agreement by uninstalling the Software and ceasing all use. Upon termination, all rights granted under this Agreement shall immediately cease. Sections relating to intellectual property, disclaimers, limitation of liability, and governing law shall survive termination.",
    },
    {
        title: "9. Changes to This Agreement",
        content:
            "The Licensor reserves the right to modify this Agreement at any time. Changes will be posted and effective upon publication. Your continued use of the Software after any such modifications constitutes your acceptance of the revised Agreement.",
    },
    {
        title: "10. Governing Law",
        content:
            "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Licensor operates, without regard to its conflict of law provisions.",
    }
];

const Terms = () => {
    return (
        <Layout>
            <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
                    <FadeIn>
                        {/* Title */}
                        <section className="mb-12">
                            <div className="flex items-center gap-2 mb-3">
                                <Scale className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">Legal</span>
                            </div>
                            <h1 className="text-4xl font-bold text-foreground mb-4">
                                End User License Agreement (EULA)
                            </h1>
                            <p className="text-muted-foreground">
                                <strong>Effective Date:</strong> [Insert Date]
                            </p>
                            <p className="text-muted-foreground mt-2 leading-relaxed">
                                This End User License Agreement ("Agreement") is a legal agreement between you ("User") and the developer of <strong>Outlook to Notion</strong> regarding your use of the Outlook to Notion add-in for Microsoft Outlook. By installing or using the Software, you agree to be bound by the terms of this Agreement.
                            </p>
                        </section>

                        {/* Sections */}
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <section
                                    key={index}
                                    className="rounded-xl border border-border bg-card p-6"
                                >
                                    <h2 className="text-lg font-semibold text-foreground mb-3">
                                        {section.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                </section>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                            Get in touch <ArrowRight size={16} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;