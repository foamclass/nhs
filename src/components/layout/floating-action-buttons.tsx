"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react"; // MessageSquare can represent WhatsApp
import Link from "next/link";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        asChild
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg w-14 h-14"
        aria-label="Chat on WhatsApp"
      >
        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"> {/* Replace with actual WhatsApp number */}
          <MessageSquare className="h-7 w-7" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-14 h-14"
        aria-label="Send an Email"
      >
        <Link href="/contact?reason=quick_inquiry">
          <Mail className="h-7 w-7" />
        </Link>
      </Button>
    </div>
  );
}
