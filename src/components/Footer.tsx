import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/coaching", label: "Coaching" },
  { href: "/founder", label: "Founder" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/branches", label: "Branches" },
];

const socialLinks = [
  { href: "https://instagram.com/cfs9gym", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/cfs9gym", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/@cfs9gym", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span
                className="text-2xl font-bold tracking-wider text-white"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                CFS9
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Central Fitness Station — Premium gym with world-class equipment and
              expert coaches. Transform your body, transform your life.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white text-lg font-bold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kondapur Branch */}
          <div>
            <h3
              className="text-white text-lg font-bold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              KONDAPUR
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Kondapur Main Road, Near Botanical Garden, Hyderabad 500084</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Mon–Sat: 5 AM – 10 PM</span>
              </li>
            </ul>
          </div>

          {/* Madhapur Branch */}
          <div>
            <h3
              className="text-white text-lg font-bold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              MADHAPUR
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Hi-Tech City Main Road, Near Cyber Towers, Madhapur 500081</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543211" className="hover:text-primary transition-colors">
                  +91 98765 43211
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@cfs9gym.com" className="hover:text-primary transition-colors">
                  info@cfs9gym.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} CFS9 — Central Fitness Station. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
