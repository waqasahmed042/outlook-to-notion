import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Terms = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold text-primary mb-2">Legal</p>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-6">Terms of Service</h1>
          <div className="prose prose-sm text-muted-foreground space-y-5 leading-relaxed">
            <p>
              By using the Outlook to Notion add-in ("the Service"), you agree to the following terms.
            </p>

            <h3 className="text-foreground font-semibold text-base">1. Service Description</h3>
            <p>
              Outlook to Notion provides a Microsoft Outlook add-in that allows users to send email content to their connected Notion workspace databases.
            </p>

            <h3 className="text-foreground font-semibold text-base">2. User Responsibilities</h3>
            <p>
              You are responsible for maintaining the security of your Notion workspace credentials and for any activity that occurs through your account.
            </p>

            <h3 className="text-foreground font-semibold text-base">3. Data Processing</h3>
            <p>
              We process email content solely for the purpose of transmitting it to your Notion workspace. We do not store, read, or analyze your email content beyond what is necessary for this function.
            </p>

            <h3 className="text-foreground font-semibold text-base">4. Third-Party Services</h3>
            <p>
              This service integrates with Microsoft Outlook and Notion. Your use of these platforms is subject to their respective terms of service.
            </p>

            <h3 className="text-foreground font-semibold text-base">5. Limitation of Liability</h3>
            <p>
              The Service is provided "as-is" without warranty of any kind. We are not liable for any data loss, service interruptions, or damages arising from the use of the add-in.
            </p>

            <h3 className="text-foreground font-semibold text-base">6. Changes to Terms</h3>
            <p>
              We reserve the right to update these terms at any time. Continued use of the Service after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Terms;
