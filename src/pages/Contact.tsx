import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <FadeIn>
                <p className="text-sm font-semibold text-primary mb-2">Contact</p>
                <h1 className="text-3xl font-bold text-foreground mb-4">Get in touch</h1>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Have questions about Outlook to Notion? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-primary" />
                    <span className="text-muted-foreground">YUVALGAKMAN@Optimosmartwork.onmicrosoft.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock size={16} className="text-primary" />
                    <span className="text-muted-foreground">Response within 1–2 business days</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-3">
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-purple-200 bg-white/50 p-10 text-center shadow-sm backdrop-blur-sm">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10">
                    <Mail className="h-10 w-10 text-purple-600" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">Email Us</h3>

                  <p className="mb-8 text-gray-600">
                    We typically respond within 1–2 business days.
                  </p>

                  <a
                    href="mailto:YUVALGAKMAN@Optimosmartwork.onmicrosoft.com"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-purple-600 px-8 py-4 text-base font-medium text-white shadow-md transition-all hover:bg-purple-700 hover:shadow-lg active:scale-[0.98]"
                  >
                    <Mail className="h-5 w-5" />
                    YUVALGAKMAN@Optimosmartwork.onmicrosoft.com
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
