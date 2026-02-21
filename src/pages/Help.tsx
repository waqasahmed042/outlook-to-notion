import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ChevronDown, Link, Database, Send, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    icon: Link,
    title: "Connect to Notion",
    description:
      "Open the Outlook to Notion add-in from your Outlook toolbar. Click \"Connect to Notion\" and authorize access to your Notion workspace. This securely links your Notion account so the add-in can write to your databases.",
  },
  {
    icon: Database,
    title: "Select a Database",
    description:
      "Once connected, choose the Notion database you'd like to send emails to. The add-in will display all available databases in your workspace. Select one and optionally configure how email fields map to database properties.",
  },
  {
    icon: Send,
    title: "Send Email to Notion",
    description:
      "Open any email in Outlook, click the Outlook to Notion button, review the preview, and hit \"Send to Notion.\" Your email content will be saved as a new entry in your selected Notion database.",
  },
];

const faqs = [
  {
    q: "The add-in doesn't appear in my Outlook toolbar",
    a:
      "Make sure you've installed the add-in from the Microsoft AppSource store. Restart Outlook after installation. If the issue persists, check that your Outlook version supports add-ins (Outlook 2016 or later, or Outlook on the web).",
  },
  {
    q: "I can't connect to my Notion workspace",
    a:
      "Ensure you're logged into the correct Notion account. Try revoking and re-authorizing the connection. Check that your browser isn't blocking pop-ups during the authorization flow.",
  },
  {
    q: "My databases aren't showing up",
    a:
      "When authorizing Notion, make sure you grant access to the specific pages and databases you want to use. You can update permissions in Notion under Settings → Connections → Outlook to Notion.",
  },
  {
    q: "Email content isn't transferring correctly",
    a:
      "Verify that your database has the required properties (e.g., Title, Rich Text). The add-in maps email fields to database properties — ensure your property types are compatible.",
  },
  {
    q: "The add-in is loading slowly or timing out",
    a:
      "Check your internet connection. If the issue persists, try clearing your Outlook cache or reinstalling the add-in. For Outlook on the web, try clearing browser cache and cookies.",
  },
  {
    q: "How do I install the Outlook add-in?",
    a: "You can install Outlook to Notion directly from the Microsoft AppSource marketplace or from the Add-ins menu within Outlook. Follow the on-screen instructions to authorize your Notion workspace.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is transmitted using industry-standard encryption. We do not store your emails — they are processed only to send to your Notion workspace.",
  },
  {
    q: "Can I send emails to multiple Notion databases?",
    a: "Yes! During setup, you can select and configure multiple databases. When sending an email, simply choose which database to send it to.",
  },
  {
    q: "What email fields are synced to Notion?",
    a: "Subject, sender, recipients, date, body content, and attachments can all be mapped to your Notion database properties.",
  },
  {
    q: "Do I need a paid Notion plan?",
    a: "No. Outlook to Notion works with both free and paid Notion plans as long as you can create databases and authorize integrations.",
  },
  {
    q: "How do I disconnect my workspace?",
    a: "You can revoke access from your Notion integration settings at any time. This will immediately disconnect the add-in from your workspace.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground"
      >
        {q}
        <ChevronDown size={16} className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Help = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold text-primary mb-2">Help & Support</p>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-2">Getting Started</h2>
            <p className="text-muted-foreground mb-8">Follow these three steps to start using Outlook to Notion.</p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                      <step.icon className="w-4 h-4 text-primary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Can't find what you need? <a href="mailto:YUVALGAKMAN@Optimosmartwork.onmicrosoft.com" className="text-primary hover:underline">Contact support</a>.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            {faqs.map((faq, i) => (
              <FaqItem key={i} {...faq} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Help;
