import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
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
          <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Can't find what you need? <a href="mailto:support@outlooktonotion.com" className="text-primary hover:underline">Contact support</a>.
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
