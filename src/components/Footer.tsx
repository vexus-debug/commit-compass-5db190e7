import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/tlec-logo.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="TLEC" className="h-12 w-auto rounded" />
            <div>
              <p className="font-heading font-semibold text-lg">TLEC (Re)Hab</p>
              <p className="text-sm opacity-80">Foundation for the Blind</p>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Helping those who cannot see enough to function in society. Combining professional eye care with long-term rehabilitation since 2015.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/eye-clinic", label: "The Lens Eye Clinic" },
              { to: "/blog", label: "Blog" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>1 & 2 Amba Drive, Off Christ Chapel Ave, Eleme Junction, Port Harcourt, Rivers State</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+234 803 310 8139</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>tlecrehab@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com/TLECrehabnig" },
              { icon: Twitter, href: "https://twitter.com/tlecrehab" },
              { icon: Instagram, href: "https://instagram.com/tlec_rehab" },
              { icon: Youtube, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} The Lens (re)Habilitation Foundation for the Blind. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
