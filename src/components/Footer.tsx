import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";


const Footer = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <footer className="bg-card border-t-4 border-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 font-body text-xl">
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-foreground/50">|</span>
            <Link to="/terms" className="text-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-foreground/50">|</span>
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://reddit.com/r/clulo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 transition-transform"
              aria-label="Visit Clulo on Reddit"
            >
              <Gamepad2 size={48} strokeWidth={3} />
            </a>
          </div>
          
          <div className="pt-6 border-t-4 border-foreground/20">
            <p className="font-body text-xl text-foreground/70">
              © 2025 Clulo. Made with ❤️ for Reddit Communities.
            </p>
          </div>
        </div>
      </div>
      
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </footer>
  );
};

export default Footer;
