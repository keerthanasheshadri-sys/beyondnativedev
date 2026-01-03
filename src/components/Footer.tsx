import { Leaf, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Beyond Native Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-serif text-2xl font-bold">
                Beyond Native
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Bringing India's finest organic products to the world with pride, 
              dignity for farmers, and transparency in trade.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-primary-foreground/10 hover:bg-accent p-2 rounded-lg transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Quality", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@beyondnative.in" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  hello@beyondnative.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Beyond Native. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <Leaf className="h-4 w-4 text-accent" />
            <span>Sustainably sourced from India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
