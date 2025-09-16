import { Compass, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-xl">
                <Compass className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Disha</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered internship recommendation engine for the PM Internship Scheme.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link to="/form" className="block text-sm text-muted-foreground hover:text-foreground">
                Find Internships
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/team" className="block text-sm text-muted-foreground hover:text-foreground">
                Our Team
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Disha. Built for Smart India Hackathon 2025 - Team SIH2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;