import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold text-primary mb-2">About</p>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-6">About Outlook to Notion</h1>
          <div className="prose prose-sm text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Outlook to Notion is a productivity-focused add-in that bridges the gap between your email inbox and your Notion workspace. We believe that important information shouldn't stay buried in your inbox.
            </p>
            <p>
              Our mission is simple: make it effortless to capture, organize, and act on email content within Notion. Whether you're managing tasks, tracking CRM interactions, or building a knowledge base, Outlook to Notion helps you stay organized without leaving your inbox.
            </p>
            <p>
              Built with security and simplicity in mind, the add-in integrates seamlessly into the Outlook sidebar. Connect your Notion workspace, select your databases, and start sending emails with a single click.
            </p>
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

export default About;
