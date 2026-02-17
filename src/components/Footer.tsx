import { Link } from "react-router-dom";
import outlook_to_notion from "../assets/outlook-to-notion.png";

const Footer = () => (
  <footer className="border-t border-border bg-surface-subtle">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-semibold text-foreground mb-3">
            <img src={outlook_to_notion} alt="Outlook to Notion" className="h-8 w-8" />
            Outlook to Notion
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Turn emails into organized Notion database entries instantly.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3 text-sm">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help & Support</Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3 text-sm">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy & Security</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3 text-sm">Contact</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Form</Link>
            <a href="mailto:YUVALGAKMAN@Optimosmartwork.onmicrosoft.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              YUVALGAKMAN@Optimosmartwork.onmicrosoft.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Outlook to Notion. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
