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
  { href: "https://www.instagram.com/cfs9_gym_madhapur/", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/cfs9gym", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/@cfs9gym", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span
                className="text-2xl font-bold tracking-wider text-white"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                CFS9
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 text-center sm:text-left max-w-sm">
              Central Fitness Station — Premium gym with world-class equipment and
              expert coaches. Transform your body, transform your life.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
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
                <span>Jaswitha Construction, Madhava Hills Estates, Kondapur, Hyderabad 500084</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+918886564999" className="hover:text-primary transition-colors">
                    +91 88865 64999
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
                <span>Pardha's Picasa, Durgam Cheruvu Road, Kavuri Hills, Madhapur, Hyderabad 500018</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919052288888" className="hover:text-primary transition-colors">
                    +91 90522 88888
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:cfs9gym@gmail.com" className="hover:text-primary transition-colors">
                  cfs9gym@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Jubilee Hills Branch */}
          <div>
            <h3
              className="text-white text-lg font-bold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              JUBILEE HILLS
              <span className="ml-2 text-xs text-primary font-normal tracking-normal">Coming Soon</span>
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Jubilee Hills, Hyderabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918886564999" className="hover:text-primary transition-colors">
                  +91 88865 64999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:cfs9gym@gmail.com" className="hover:text-primary transition-colors">
                  cfs9gym@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted text-xs max-w-xs sm:max-w-none">
            © {new Date().getFullYear()} CFS9 — Central Fitness Station. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-muted">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs text-muted/90 text-center sm:text-right">
            Designed by <span className="text-primary font-semibold tracking-wide">Proxy Media</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
