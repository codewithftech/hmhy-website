import logo from "@/assets/hmhy-logo.png";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 items-start">
          {/* Left Column - Logo and Company Info */}
          <div className="md:col-span-6">
            <Link to="/">
              <img 
                src={logo} 
                alt="HMHY Logo" 
                className="h-16 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity" 
              />
            </Link>
            <p className="text-lg text-white/70 mb-4 whitespace-nowrap">
              Smarte og bærekraftige leveringer i Norge
            </p>
            <div className="text-sm text-white/60 space-y-2 mb-6">
              <p>Oslo, Norge</p>
              <p>Org.nr: 123 456 789</p>
              <p>
                <a href="mailto:info@hmhy.no" className="hover:text-white transition-colors">
                  info@hmhy.no
                </a>
              </p>
              <p>
                <a href="tel:+4712345678" className="hover:text-white transition-colors">
                  +47 123 45 678
                </a>
              </p>
            </div>
            
            {/* Navigation Links */}
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                <li>
                  <a href="/personvern" className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    Personvern
                  </a>
                </li>
                <li>
                  <a href="/vilkar" className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    Vilkår
                  </a>
                </li>
                <li>
                  <a href="/gdpr" className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    GDPR
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Column - App Store Buttons */}
          <div className="md:col-span-6 flex flex-col gap-4 md:items-end mt-20 md:mt-24">
            <a 
              href="#" 
              className="inline-block w-full md:w-auto"
              aria-label="Last ned på App Store"
            >
              <div className="bg-white text-black px-6 py-3 rounded-full hover:opacity-80 transition-opacity flex items-center gap-2 justify-center w-full md:w-[240px]">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="font-medium">Last ned for iOS</span>
              </div>
            </a>
            <a 
              href="#" 
              className="inline-block w-full md:w-auto"
              aria-label="Last ned på Google Play"
            >
              <div className="bg-white text-black px-6 py-3 rounded-full hover:opacity-80 transition-opacity flex items-center gap-2 justify-center w-full md:w-[240px]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="font-medium">Last ned for Android</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/60">
            © {currentYear} HMHY. Alle rettigheter reservert.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
