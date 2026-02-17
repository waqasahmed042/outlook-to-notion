import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

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
                    <span className="text-muted-foreground">Response within 24 hours</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-3">
              <FadeIn delay={0.1}>
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <input
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        required
                        type="email"
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <input
                      required
                      maxLength={200}
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-primary inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
