import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import heroMockup from "@/assets/hero-img.png";
import { Link } from "react-router-dom";
import {
  Shield, Database, Eye, Paperclip, RefreshCw, Layers,
  PanelRight, CheckCircle2, ArrowRight, Zap,
  ClipboardList, Users, Headphones, FolderOpen, Brain
} from "lucide-react";

const steps = [
  { num: "1", title: "Connect to Notion", desc: "Authorize your workspace securely." },
  { num: "2", title: "Select Databases", desc: "Choose which databases Outlook can send emails to." },
  { num: "3", title: "Send Emails Instantly", desc: "Send emails to Notion with one click." },
];

const features = [
  { icon: Shield, title: "Secure Notion authentication" },
  { icon: Database, title: "Database mapping from email data" },
  { icon: Eye, title: "Email preview before sending" },
  { icon: Paperclip, title: "Attachment support" },
  { icon: RefreshCw, title: "Auto-sync email fields" },
  { icon: Layers, title: "Multiple database support" },
  { icon: PanelRight, title: "Outlook sidebar integration" },
];

const flowSteps = [
  "Connect workspace",
  "Choose databases",
  "Map database properties",
  "Setup complete",
  "Preview emails",
  "Send to Notion from Outlook sidebar",
];

const useCases = [
  { icon: ClipboardList, title: "Task Management", desc: "Convert emails into actionable tasks." },
  { icon: Users, title: "CRM Email Tracking", desc: "Log client emails directly in your CRM." },
  { icon: Headphones, title: "Support Ticket Logging", desc: "Create support tickets from emails." },
  { icon: FolderOpen, title: "Project Documentation", desc: "Archive project-related emails." },
  { icon: Brain, title: "Knowledge Capture", desc: "Save important emails as knowledge base entries." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-surface-subtle">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_80%_50%/0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              <Zap size={14} className="text-primary" /> Outlook Add-in
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1]">
              Send Emails from Outlook to Notion{" "}
              <span className="gradient-text">in One Click</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed">
              Turn emails into organized Notion database entries instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="gradient-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-primary/25"
              >
                Connect to Notion <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl shadow-elevated overflow-hidden border border-border">
              <img src={heroMockup} alt="Outlook to Notion workflow preview" className="w-full" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Three simple steps</h2>
          </div>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-shadow hover:shadow-elevated">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground font-bold text-lg">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-surface-subtle py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary mb-2">Features</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Everything you need</h2>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <f.icon size={20} />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug pt-2">{f.title}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Product Flow */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary mb-2">Product Flow</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">From setup to sending</h2>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-2xl">
          {flowSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-foreground font-medium text-sm">{step}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="ml-[15px] h-5 w-px bg-border" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="bg-surface-subtle py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary mb-2">Use Cases</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Built for your workflow</h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-elevated">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <uc.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="rounded-3xl gradient-primary p-12 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl mb-4">
              Start sending emails to Notion today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Connect your Outlook account and start organizing emails in Notion in minutes.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-all hover:shadow-xl"
            >
              Connect to Notion <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
