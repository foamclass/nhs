
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, BriefcaseMedical } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Banner */}
        <div className="mb-12 rounded-lg bg-primary p-8 text-primary-foreground shadow-xl md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-headline text-3xl font-bold">Stay Updated</h3>
              <p className="mt-2 text-lg opacity-90">
                Subscribe to our newsletter for the latest project updates, investment insights, and health news.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/30 focus:bg-primary-foreground/20"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground sm:w-auto shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                <BriefcaseMedical className="h-8 w-8" />
                <span className="font-headline">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm">
              Pioneering healthcare and education in Peshawar for a healthier tomorrow.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/project-overview" className="hover:text-primary transition-colors">Project Overview</Link></li>
              <li><Link href="/investment-opportunities" className="hover:text-primary transition-colors">Invest Now</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/knowledge-center" className="hover:text-primary transition-colors">Knowledge Center</Link></li>
              <li><Link href="/doctor-voices" className="hover:text-primary transition-colors">Doctor Voices</Link></li>
              <li><Link href="/progress-updates#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/brochure.pdf" className="hover:text-primary transition-colors">Investor Brochure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline text-lg font-semibold">Contact Info</h4>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>Ring Road, Peshawar, KPK, Pakistan</p>
              <p>Email: <a href="mailto:info@noblehealthservices.com" className="hover:text-primary transition-colors">info@noblehealthservices.com</a></p>
              <p>Phone: <a href="tel:+921234567890" className="hover:text-primary transition-colors">+92 123 4567890</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-primary transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
