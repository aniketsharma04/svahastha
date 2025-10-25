import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pottery-texture">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-semibold">Svahastha</h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Where clay meets calm. Discover mindfulness through the art of pottery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}


          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/svahastha?igsh=MWQwa3dwczRzdXJtOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BayoAcvSG/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © {new Date().getFullYear()} Svahastha – The Pottery Studio. Crafted with mindfulness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
