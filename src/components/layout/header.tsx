"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, BriefcaseMedical, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLabels: { [key: string]: string } = {
    home: "Home",
    about: "About",
    about_us: "About Us",
    our_team: "Our Team",
    project_overview: "Project Overview",
    opportunities: "Opportunities",
    investment_opportunities: "Investment Opportunities",
    progress_updates: "Progress Updates",
    resources: "Resources",
    knowledge_center: "Knowledge Center",
    doctor_voices: "Doctor Voices",
    contact: "Contact",
    invest_button: "Interested in Investing?"
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              <BriefcaseMedical className="h-8 w-8" />
              <span className="font-headline">NHS</span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => {
                if (link.subLinks) {
                  const isParentActive = link.subLinks.some(sub => pathname === sub.href);
                  return (
                    <DropdownMenu key={link.key}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className={cn(
                          "text-foreground hover:bg-primary/10 flex items-center gap-1",
                          isParentActive && "font-semibold text-primary bg-primary/5",
                          "[&[data-state=open]>svg]:rotate-180"
                        )}>
                          {navLabels[link.key]}
                          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {link.subLinks.map((subLink) => (
                          <DropdownMenuItem key={subLink.href} asChild>
                            <Link href={subLink.href!}>{navLabels[subLink.key]}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className={cn(
                      "text-foreground hover:bg-primary/10",
                      pathname === link.href && "font-semibold text-primary bg-primary/5"
                    )}
                  >
                    <Link href={link.href!}>{navLabels[link.key]}</Link>
                  </Button>
                );
              })}
            </nav>
          </div>
          
          <div className="hidden items-center gap-2 md:flex">
            <ThemeSwitcher />
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm hover:shadow-md transition-all">
              <Link href="/contact?reason=investment_inquiry">{navLabels['invest_button']}</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-background shadow-xl md:hidden animate-in fade-in-20 slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => {
              if (link.subLinks) {
                return (
                  <Accordion key={link.key} type="single" collapsible className="w-full">
                    <AccordionItem value={link.key} className="border-b-0">
                      <AccordionTrigger className="w-full justify-between text-lg py-3 font-medium hover:no-underline hover:bg-primary/10 rounded-md px-3">
                        {navLabels[link.key]}
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="flex flex-col gap-1 pt-2 pl-7">
                          {link.subLinks.map((subLink) => (
                            <Button
                              key={subLink.href}
                              variant="ghost"
                              asChild
                              className={cn(
                                "w-full justify-start text-base py-2",
                                pathname === subLink.href && "font-semibold text-primary bg-primary/10"
                              )}
                            >
                              <Link href={subLink.href!}>{navLabels[subLink.key]}</Link>
                            </Button>
                          ))}
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  className={cn(
                    "w-full justify-start text-lg py-3",
                    pathname === link.href && "font-semibold text-primary bg-primary/10"
                  )}
                >
                  <Link href={link.href!}>{navLabels[link.key]}</Link>
                </Button>
              );
            })}
            <div className="flex items-center justify-start gap-2 pt-4 mt-2 border-t border-border">
              <ThemeSwitcher />
            </div>
            <Button asChild className="mt-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3">
              <Link href="/contact?reason=investment_inquiry">{navLabels['invest_button']}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
