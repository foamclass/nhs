
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { LANGUAGES } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";

const defaultLocale = 'en';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
    }
    const cookieLocale = getCookie('NEXT_LOCALE');
    if (cookieLocale && LANGUAGES.find(lang => lang.code === cookieLocale)) {
        setSelectedLocale(cookieLocale);
    } else {
        setSelectedLocale(defaultLocale);
    }
  }, [pathname]);

  const handleLanguageChange = (newLocale: string) => {
    // The pathname from `usePathname` is the path *without* the locale prefix.
    const newPath = newLocale === defaultLocale 
      ? pathname 
      : `/${newLocale}${pathname === '/' ? '' : pathname}`;
      
    router.push(newPath);
  };

  const currentLanguageLabel = LANGUAGES.find(lang => lang.code === selectedLocale)?.label || "Language";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:bg-primary/10">
          <Globe className="h-5 w-5" />
          <span className="hidden sm:inline">{currentLanguageLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-background shadow-xl border-border">
        <DropdownMenuRadioGroup
          value={selectedLocale}
          onValueChange={handleLanguageChange}
        >
          {LANGUAGES.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="flex items-center justify-between cursor-pointer hover:bg-primary/10"
            >
              <span>{lang.label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
