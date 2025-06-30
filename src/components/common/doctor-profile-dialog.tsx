"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { DoctorProfile } from "@/app/our-team/page";
import Image from "next/image";
import { Clock, GraduationCap, Languages, MapPin, Phone, ShieldCheck, Star, Stethoscope, Calendar, Mail } from "lucide-react";

interface DoctorProfileDialogProps {
  doctor: DoctorProfile | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const DetailItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | undefined }) => {
    if (!value) return null;
    return (
        <div className="flex items-start gap-3">
            <Icon className="h-5 w-5 text-accent mt-1 shrink-0" />
            <div>
                <p className="font-semibold text-primary">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
            </div>
        </div>
    );
};


export function DoctorProfileDialog({ doctor, isOpen, onOpenChange }: DoctorProfileDialogProps) {
  if (!doctor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-0">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Image
              src={doctor.imageUrl}
              alt={doctor.name}
              width={120}
              height={120}
              className="rounded-full object-cover shadow-lg border-4 border-primary shrink-0"
              data-ai-hint={doctor.aiHint}
            />
            <div>
              <DialogTitle className="text-3xl font-bold text-primary">{doctor.name}</DialogTitle>
              <p className="text-lg font-medium text-accent">{doctor.title}</p>
              <DialogDescription className="mt-2">
                <Badge variant="secondary">{doctor.specialty}</Badge>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          <div className="md:col-span-2">
            <h4 className="font-headline text-lg font-semibold text-primary mb-3 border-b pb-2">Biography</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
          </div>
          
          <DetailItem icon={Calendar} label="Experience" value={doctor.experience} />
          <DetailItem icon={GraduationCap} label="Education" value={doctor.education} />
          <DetailItem icon={Languages} label="Languages" value={doctor.languages} />
          <DetailItem icon={MapPin} label="Location" value={doctor.location} />
          <DetailItem icon={Clock} label="Timings" value={doctor.timings} />
          <DetailItem icon={Stethoscope} label="Consultation Type" value={doctor.consultationType} />
          
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
            <div>
                <p className="font-semibold text-primary">Phone</p>
                <a href={`tel:${doctor.contact.phone}`} className="text-sm text-muted-foreground hover:text-primary">{doctor.contact.phone}</a>
            </div>
          </div>
           <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
            <div>
                <p className="font-semibold text-primary">Email</p>
                <a href={`mailto:${doctor.contact.email}`} className="text-sm text-muted-foreground hover:text-primary">{doctor.contact.email}</a>
            </div>
          </div>
          
          <DetailItem icon={Stethoscope} label="Procedures Performed" value={doctor.proceduresPerformed} />
          <DetailItem icon={ShieldCheck} label="Insurance Accepted" value={doctor.insuranceAccepted} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

    