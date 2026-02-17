import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Shield, Key, Bell, DatabaseZap, CheckCircle2 } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Encrypted Communication",
    desc: "All transmissions use industry-standard encryption. Your data is protected in transit and at rest.",
  },
  {
    icon: Key,
    title: "Unique Access Keys",
    desc: "Each user gets secure authentication keys. No shared credentials, no compromised access.",
  },
  {
    icon: Bell,
    title: "Breach Notification",
    desc: "Users are notified immediately if an incident occurs. Transparency is our priority.",
  },
  {
    icon: DatabaseZap,
    title: "No Email Storage",
    desc: "Emails are processed only to send to Notion and not stored. Once delivered, we don't keep copies.",
  },
];

const Privacy = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold text-primary mb-2">Privacy & Security</p>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-4">Security & Privacy Commitment</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Emails may contain sensitive information. We take your privacy seriously. Data is processed securely with no ongoing access to your inbox.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6">
          {sections.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <s.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-accent p-6">
            <p className="text-sm text-foreground leading-relaxed font-medium mb-4">
              "This application processes emails only for sending them to your Notion workspace. We do not store or read your inbox."
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground">
                I have read and understand the security measures.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Privacy;
