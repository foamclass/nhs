"use client";

import { useState, useTransition } from "react";
import PageHeader from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MapPin, Send } from "lucide-react";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { submitInquiry } from "@/actions/contact-actions";


export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
      try {
        const result = await submitInquiry(formData);
        if (result.success) {
          toast({ title: "Success!", description: result.message });
          (event.target as HTMLFormElement).reset();
        } else {
          toast({ title: "Error", description: result.message || "Failed to submit inquiry.", variant: "destructive" });
        }
      } catch (error) {
        toast({ title: "Error", description: "An unexpected error occurred.", variant: "destructive" });
      }
    });
  };


  return (
    <>
      <PageHeader
        title="Contact & Inquiry"
        subtitle="We're here to answer your questions and discuss partnership opportunities. Reach out to us today."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollFadeIn className="bg-card p-8 rounded-xl shadow-xl space-y-6" delay="0ms">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required disabled={isPending} className="bg-background"/>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required disabled={isPending} className="bg-background"/>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+92 300 1234567" disabled={isPending} className="bg-background"/>
                </div>
                <div>
                  <Label htmlFor="investorType">Investor Type</Label>
                  <Select name="investorType" disabled={isPending}>
                    <SelectTrigger id="investorType" className="bg-background">
                      <SelectValue placeholder="Select investor type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Investor</SelectItem>
                      <SelectItem value="institutional">Institutional Investor</SelectItem>
                      <SelectItem value="philanthropist">Philanthropist</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message or inquiry..." rows={5} required disabled={isPending} className="bg-background"/>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" name="newsletter" disabled={isPending} />
                  <Label htmlFor="newsletter" className="text-sm font-normal text-muted-foreground">
                    Subscribe to our newsletter for updates.
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                  Send Inquiry
                </Button>
              </form>
            </ScrollFadeIn>

            <ScrollFadeIn className="space-y-8" delay="200ms">
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-accent" /> Direct Contact Information
                </h3>
                <p className="text-muted-foreground">Noble Health Services Project Office</p>
                <p className="text-muted-foreground">Ring Road, Peshawar, KPK, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary flex items-center gap-2"><Mail className="h-5 w-5 text-accent"/> Email Us</h4>
                <a href="mailto:info@noblehealthservices.com" className="text-muted-foreground hover:text-primary">info@noblehealthservices.com</a><br/>
                <a href="mailto:invest@noblehealthservices.com" className="text-muted-foreground hover:text-primary">invest@noblehealthservices.com</a>
              </div>
              <div>
                <h4 className="font-semibold text-primary flex items-center gap-2"><Phone className="h-5 w-5 text-accent"/> Call Us</h4>
                <a href="tel:+921234567890" className="text-muted-foreground hover:text-primary">+92 123 4567890</a> (Investor Relations)<br/>
                <a href="tel:+921234567891" className="text-muted-foreground hover:text-primary">+92 123 4567891</a> (General Inquiries)
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (PKT)</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (PKT)</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
               <div className="mt-8">
                 <h3 className="font-headline text-xl font-semibold text-primary mb-3">Find us on Map</h3>
                 <div className="aspect-video rounded-lg overflow-hidden shadow-md border">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.95862530477!2d71.52232531521727!3d34.01510098062191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b82dad5555%3A0x95A0A5527E0F45A2!2sPeshawar%20Ring%20Rd%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694000000000!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Project Location Map"
                    ></iframe>
                 </div>
               </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
