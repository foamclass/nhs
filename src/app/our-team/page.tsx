"use client";

import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DoctorProfileDialog } from "@/components/common/doctor-profile-dialog";

// Define and export the type for use in other components
export type DoctorProfile = {
  name: string;
  role?: string; // Optional for non-chairmen
  specialty: string;
  title: string;
  experience: string;
  education: string;
  languages: string;
  bio: string;
  location: string;
  timings: string;
  contact: {
    phone: string;
    email: string;
  };
  consultationType: string;
  proceduresPerformed: string;
  insuranceAccepted: string;
  imageUrl: string;
  aiHint: string;
};

const chairman: DoctorProfile = {
  name: "Prof. Dr. Muhammad Daud Khan",
  role: "Chairman",
  specialty: "Ophthalmology",
  title: "Chairman, Consultant Ophthalmologist",
  experience: "30+ years",
  education: "FRCS, FRCO, FCPS, Fellow: American Academy of Ophthalmology, Pakistan Academy of Medical Sciences, Bangladesh CPS",
  languages: "English, Urdu, Pashto",
  bio: "Prof. Dr. Muhammad Daud Khan is a renowned ophthalmologist and the visionary Chairman of Noble Health Services.",
  location: "NHS Hospital, Peshawar Ring Road",
  timings: "Mon–Fri, 9AM–2PM",
  contact: { phone: "---", email: "---" },
  consultationType: "In-person, Telehealth",
  proceduresPerformed: "Cataract Surgery, Glaucoma Management, Retinal Surgery",
  insuranceAccepted: "Sehat Card, NHS Health Plan",
  imageUrl: "/doctors_profiles/Dr Daud Khan.jpg",
  aiHint: "male doctor portrait"
};

const ceo: DoctorProfile = {
  name: "Prof. Dr. Faiz ur Rahman",
  role: "Chief Executive Officer (CEO)",
  specialty: "Medicine, Diabetology",
  title: "CEO, Consultant Physician & Diabetologist",
  experience: "22+ years",
  education: "FCPS, Prof (Retd) KMC, Supervisor CPSP",
  languages: "English, Urdu",
  bio: "Dr. Faiz-ur-Rahman is the CEO of Noble Health Services and a leading consultant in internal medicine and diabetes care.",
  location: "NHS Diabetes Center, Peshawar",
  timings: "Tue–Sat, 9AM–1PM",
  contact: { phone: "---", email: "---" },
  consultationType: "In-person, Online",
  proceduresPerformed: "Diabetes Management, Endocrine Disorders, Hypertension Treatment",
  insuranceAccepted: "Sehat Card, Private Insurers",
  imageUrl: "/doctors_profiles/Dr faiz ur rehman.jpg",
  aiHint: "doctor portrait"
};

const specialists: DoctorProfile[] = [
  {
    name: "Prof. Dr. Ata Ur Rahman",
    specialty: "Urologist, Transplant Surgeon",
    title: "Consultant Urologist & Transplant Surgeon",
    experience: "25+ years",
    education: "MBBS, FCPS (Surgery), FRCS, FCPS (Urology), FEBU",
    languages: "English, Urdu",
    bio: "Specializes in urinary tract and male reproductive issues, with expertise in kidney transplants.",
    location: "NHS Urology & Transplant Center, Peshawar",
    timings: "Mon–Thu, 10AM–1PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person, Surgical",
    proceduresPerformed: "Kidney Transplant, TURP",
    insuranceAccepted: "Sehat Card, Specialized Plans",
    imageUrl: "/doctors_profiles/Dr Ata ur rehman.jpg",
    aiHint: "urologist portrait"
  },
  {
    name: "Prof. Dr. Muhammad Ayaz Khan",
    specialty: "Spine Surgeon",
    title: "Consultant Orthopedic & Spine Surgeon",
    experience: "20+ years",
    education: "MBBS, FCPS (Ortho), Fellow (Spine - POA, UK), Ilizarov (Russia)",
    languages: "English, Urdu",
    bio: "Treats musculoskeletal injuries and disorders, specializing in spinal surgeries and bone-related conditions.",
    location: "NHS Orthopedic & Spine Center, Peshawar",
    timings: "Tue–Sat, 11AM–4PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person, Surgical",
    proceduresPerformed: "Spine Surgery, Joint Replacement",
    insuranceAccepted: "Sehat Card, Private Insurers",
    imageUrl: "/doctors_profiles/Dr Muhammad Ayaz.jpg",
    aiHint: "surgeon portrait"
  },
  {
    name: "Prof. Dr. Rifayatullah",
    specialty: "Pediatrics",
    title: "Consultant Pediatrician",
    experience: "18+ years",
    education: "MBBS, FCPS",
    languages: "English, Urdu, Pashto",
    bio: "Provides preventive and acute medical care for children, ensuring healthy growth and development.",
    location: "NHS Pediatric Wing, Peshawar",
    timings: "Mon–Sat, 10AM–5PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "Well-child visits, Immunizations",
    insuranceAccepted: "Sehat Card, State Life",
    imageUrl: "/doctors_profiles/Dr Rifayat Ullah Afridi.jpg",
    aiHint: "pediatrician portrait"
  },
  {
    name: "Prof. Dr. Mazhar Khan",
    specialty: "Urology",
    title: "Consultant Urologist",
    experience: "20+ years",
    education: "FRCS, Diploma Urology, CHP, CHR",
    languages: "English, Urdu",
    bio: "Specialist in urology and kidney health.",
    location: "NHS Urology Center, Peshawar",
    timings: "Mon–Fri, 10AM–2PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "Urology procedures",
    insuranceAccepted: "Sehat Card",
    imageUrl: "/doctors_profiles/Dr Mazr Khan.webp",
    aiHint: "urologist portrait"
  },
  {
    name: "Prof. Dr. Masood Ur Rehman",
    specialty: "General Medicine",
    title: "Consultant Physician",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in general medicine.",
    location: "NHS General Medicine Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "General Medicine",
    insuranceAccepted: "Sehat Card",
    imageUrl: "/doctors_profiles/placeholder.png",
    aiHint: "doctor portrait"
  },
  {
    name: "Prof. Dr. Mohammad Zarin Khan",
    specialty: "General & Bariatric Surgery",
    title: "Consultant Surgeon",
    experience: "-",
    education: "FCPS, MRCS, FAMS",
    languages: "English, Urdu",
    bio: "Performs general and bariatric surgeries.",
    location: "NHS Surgical Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Surgical, In-person Consultation",
    proceduresPerformed: "Bariatric Surgery",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr muhammad Zarin.jpg",
    aiHint: "surgeon portrait"
  },
  {
    name: "Prof. Dr. Javed Ahmad",
    specialty: "Radiology",
    title: "Consultant Radiologist",
    experience: "-",
    education: "MBBS, Diplomat French Board, Fellow (MRI, US), Ex-Loma Linda, Consultant KFSHRC Riyadh",
    languages: "English, Urdu",
    bio: "Expert in radiology and imaging.",
    location: "NHS Radiology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Radiology",
    proceduresPerformed: "MRI, Ultrasound",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Javed.jpg",
    aiHint: "radiologist portrait"
  },
  {
    name: "Prof. Dr. Ahmad Rafiq",
    specialty: "Chemical Pathology",
    title: "Consultant Pathologist",
    experience: "20+ years",
    education: "MBBS, DCP, MPhil, CHPE, CHR, PhD Scholar",
    languages: "English, Urdu",
    bio: "Analyzes bodily fluids for disease diagnosis using biochemical lab techniques.",
    location: "NHS Laboratories, Peshawar",
    timings: "Mon–Sat, 9AM–5PM",
    contact: { phone: "---", email: "---" },
    consultationType: "Lab Reporting",
    proceduresPerformed: "Biochemical Analysis",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Ahmad Rafiq.jpg",
    aiHint: "pathologist portrait"
  },
  {
    name: "Prof. Dr. Jawad Alamgir",
    specialty: "Neurology",
    title: "Consultant Neurologist",
    experience: "-",
    education: "MBBS, FCPS, MRCP (UK), FRCP (Glasgow)",
    languages: "English, Urdu",
    bio: "Expert in neurology.",
    location: "NHS Neurology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Neurology",
    proceduresPerformed: "Neurological Care",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/placeholder.png",
    aiHint: "neurologist portrait"
  },
  {
    name: "Dr. Mushtaq Ahmed",
    specialty: "General & Bariatric Surgery",
    title: "Consultant Surgeon",
    experience: "15+ years",
    education: "MBBS, FCPS, Fellowship (Advanced Lap & Bariatric), Director at AMC",
    languages: "English, Urdu",
    bio: "Performs advanced laparoscopic and bariatric surgeries.",
    location: "NHS Surgical Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Surgical, In-person Consultation",
    proceduresPerformed: "Laparoscopic Cholecystectomy, Hernia Repair, Bariatric Surgery",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Mushtaq Ahmad.jpg",
    aiHint: "surgeon portrait"
  },
  {
    name: "Prof. Dr. Nasir Saeed",
    specialty: "Ophthalmology",
    title: "Consultant Ophthalmologist",
    experience: "20+ years",
    education: "MBBS, DO, FCPS, FICO, Glaucoma Fellow",
    languages: "English, Urdu",
    bio: "Expert in medical and surgical care of the eyes and visual system.",
    location: "NHS Eye Center, Peshawar",
    timings: "Mon–Sat, 10AM–3PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "Cataract Surgery, Laser Vision Correction, Glaucoma Treatment",
    insuranceAccepted: "Sehat Card, Allied Insurance",
    imageUrl: "/doctors_profiles/Dr Nasir Saeed.jpg",
    aiHint: "doctor portrait"
  },
  {
    name: "Dr. Mohammad Ali Afridi",
    specialty: "Psychiatry",
    title: "Consultant Psychiatrist",
    experience: "-",
    education: "MBBS, DCP, Consultant (UK)",
    languages: "English, Urdu",
    bio: "Expert in psychiatry.",
    location: "NHS Psychiatry Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Psychiatry",
    proceduresPerformed: "Mental Health Care",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Muhammad Ali.jpg",
    aiHint: "psychiatrist portrait"
  },
  {
    name: "Dr. Mohammad Ashraf Khan",
    specialty: "ENT (Otology & Rhinoplasty)",
    title: "Consultant ENT Surgeon",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in ENT, Otology & Rhinoplasty.",
    location: "NHS ENT Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "ENT",
    proceduresPerformed: "ENT Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Ashraf Khan.jpg",
    aiHint: "ent surgeon portrait"
  },
  {
    name: "Dr. Shafqat Orakzai",
    specialty: "Gastroenterology & Geriatrics",
    title: "Consultant Gastroenterologist & Geriatrician",
    experience: "-",
    education: "MBBS, MRCP (UK/Ireland), Dip. Geriatrics, MSc Medical Informatics",
    languages: "English, Urdu",
    bio: "Expert in gastroenterology and geriatrics.",
    location: "NHS Gastroenterology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Gastroenterology, Geriatrics",
    proceduresPerformed: "Gastroenterology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Shafqat orakzai.png",
    aiHint: "gastroenterologist portrait"
  },
  {
    name: "Dr. Hidayat Ullah",
    specialty: "ENT",
    title: "Consultant ENT Surgeon",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in ENT.",
    location: "NHS ENT Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "ENT",
    proceduresPerformed: "ENT Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "",
    aiHint: "ent surgeon portrait"
  },
  {
    name: "Dr. Inam Ullah",
    specialty: "Hematology",
    title: "Consultant Hematologist",
    experience: "-",
    education: "MCPS, MPhil, Prof. PIMC",
    languages: "English, Urdu",
    bio: "Expert in hematology.",
    location: "NHS Hematology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Hematology",
    proceduresPerformed: "Hematology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Inam.jpg",
    aiHint: "hematologist portrait"
  },
  {
    name: "Dr. Liaquat Ali",
    specialty: "Pathology",
    title: "Consultant Pathologist",
    experience: "-",
    education: "MPhil",
    languages: "English, Urdu",
    bio: "Expert in pathology.",
    location: "NHS Pathology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Pathology",
    proceduresPerformed: "Pathology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "",
    aiHint: "pathologist portrait"
  },
  {
    name: "Dr. Ajmal Hussain",
    specialty: "ENT",
    title: "Consultant ENT Surgeon",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in ENT.",
    location: "NHS ENT Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "ENT",
    proceduresPerformed: "ENT Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "",
    aiHint: "ent surgeon portrait"
  },
  {
    name: "Dr. Sadeeq Ur Rehman",
    specialty: "Internal Medicine",
    title: "Consultant Physician",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in internal medicine.",
    location: "NHS Internal Medicine Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Internal Medicine",
    proceduresPerformed: "Internal Medicine Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Sadeeq Ur rehman.png",
    aiHint: "physician portrait"
  },
  {
    name: "Dr. Muhammad Aqeel Khan",
    specialty: "Pediatrics",
    title: "Consultant Pediatrician",
    experience: "-",
    education: "FCPS, FRCPCH",
    languages: "English, Urdu",
    bio: "Expert in pediatrics.",
    location: "NHS Pediatrics Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Pediatrics",
    proceduresPerformed: "Pediatric Care",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/placeholder.png",
    aiHint: "pediatrician portrait"
  },
  {
    name: "Dr. Roaid Khan",
    specialty: "Endocrinology",
    title: "Consultant Physician & Diabetologist",
    experience: "12+ years",
    education: "MBBS, FRCP, CCST (UK)",
    languages: "English, Urdu",
    bio: "Expert in diagnosing and managing diabetes, focusing on long-term metabolic and lifestyle care.",
    location: "NHS Diabetes Center, Peshawar",
    timings: "Mon–Fri, 10AM–3PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "Insulin Therapy Management, Diabetic Foot Care",
    insuranceAccepted: "Sehat Card, NHS Health Plan",
    imageUrl: "/doctors_profiles/Dr Roaid khan.jpg",
    aiHint: "doctor portrait"
  },
  {
    name: "Dr. Naeem Khan",
    specialty: "Pulmonology",
    title: "Consultant Pulmonologist",
    experience: "-",
    education: "MBBS, MCPS, MPH",
    languages: "English, Urdu",
    bio: "Expert in pulmonology.",
    location: "NHS Pulmonology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Pulmonology",
    proceduresPerformed: "Pulmonology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Naeem.jpg",
    aiHint: "pulmonologist portrait"
  },
  {
    name: "Dr. Syed Naqeeb Shah",
    specialty: "Orthopedics (Emergency)",
    title: "Consultant Orthopedic Surgeon",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in emergency orthopedics.",
    location: "NHS Orthopedics Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Orthopedics",
    proceduresPerformed: "Orthopedic Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "",
    aiHint: "orthopedic surgeon portrait"
  },
  {
    name: "Dr. Ijaz Mohammad Khan",
    specialty: "Gastroenterology",
    title: "Consultant Gastroenterologist",
    experience: "-",
    education: "Diplomate: ABG (USA), ABIM (USA), HOD HMC",
    languages: "English, Urdu",
    bio: "Expert in gastroenterology.",
    location: "NHS Gastroenterology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Gastroenterology",
    proceduresPerformed: "Gastroenterology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Muhammad Ijaz.jpg",
    aiHint: "gastroenterologist portrait"
  },
  {
    name: "Dr. Bushra Rauf",
    specialty: "Gynecology & Obstetrics",
    title: "Consultant OB/GYN",
    experience: "18+ years",
    education: "FCPS, MRCOG, MHPE",
    languages: "English, Urdu",
    bio: "Provides medical and surgical care for women, especially related to childbirth and reproductive health.",
    location: "NHS Women's Health Center, Peshawar",
    timings: "Mon–Sat, 10AM–4PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "C-Section, Hysterectomy, Antenatal Care",
    insuranceAccepted: "Sehat Card, NHS Health Plan",
    imageUrl: "/doctors_profiles/Dr Bushra rauf.jpg",
    aiHint: "female doctor portrait"
  },
  {
    name: "Dr. Shahid Habib",
    specialty: "Neurophysiology",
    title: "Consultant Neurophysiologist",
    experience: "15+ years",
    education: "FCPS, Prof. of Physiology, Consultant KSU Riyadh",
    languages: "English, Urdu",
    bio: "Specialist in neurophysiology and physiology.",
    location: "NHS Neurophysiology Center, Peshawar",
    timings: "Mon–Fri, 10AM–2PM",
    contact: { phone: "---", email: "---" },
    consultationType: "In-person",
    proceduresPerformed: "Neurophysiology procedures",
    insuranceAccepted: "Sehat Card",
    imageUrl: "/doctors_profiles/Dr shahid habib.jpg",
    aiHint: "neurophysiologist portrait"
  },
  {
    name: "Dr. Faqeer Muhammad (Late)",
    specialty: "Rheumatology",
    title: "Consultant Rheumatologist",
    experience: "-",
    education: "-",
    languages: "English, Urdu",
    bio: "Expert in rheumatology.",
    location: "NHS Rheumatology Department, Peshawar",
    timings: "By Appointment",
    contact: { phone: "---", email: "---" },
    consultationType: "Rheumatology",
    proceduresPerformed: "Rheumatology Procedures",
    insuranceAccepted: "All Major Insurers",
    imageUrl: "/doctors_profiles/Dr Faqeer Ahmad.jpg",
    aiHint: "rheumatologist portrait"
  }
];


export default function OurTeamPage() {
    const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(null);

  return (
    <>
      <PageHeader
        title="Meet Our Dedicated Team"
        subtitle="The driving force behind Noble Health Services – experienced professionals committed to excellence in healthcare and education."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Leadership
            </h2>
          </ScrollFadeIn>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <ScrollFadeIn className="flex-1">
              <div className="bg-card p-8 rounded-xl shadow-2xl flex flex-col items-center">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex items-center justify-center border-4 border-primary shadow-md shrink-0">
                  <Image
                    src={ceo.imageUrl}
                    alt={ceo.name}
                    width={150}
                    height={150}
                    className="object-cover"
                    data-ai-hint={ceo.aiHint}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-headline text-3xl font-semibold text-primary">{ceo.name}</h3>
                  <p className="text-accent font-bold text-lg mb-1">{ceo.role}</p>
                  <p className="text-muted-foreground font-medium mb-3">{ceo.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{ceo.bio}</p>
                  <Button variant="outline" className="mt-4" onClick={() => setSelectedDoctor(ceo)}>View Profile</Button>
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn className="flex-1">
              <div className="bg-card p-8 rounded-xl shadow-2xl flex flex-col items-center">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex items-center justify-center border-4 border-primary shadow-md shrink-0">
                  <Image
                    src={chairman.imageUrl}
                    alt={chairman.name}
                    width={150}
                    height={150}
                    className="object-cover"
                    data-ai-hint={chairman.aiHint}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-headline text-3xl font-semibold text-primary">{chairman.name}</h3>
                  <p className="text-accent font-bold text-lg mb-1">{chairman.role}</p>
                  <p className="text-muted-foreground font-medium mb-3">{chairman.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{chairman.bio}</p>
                  <Button variant="outline" className="mt-4" onClick={() => setSelectedDoctor(chairman)}>View Profile</Button>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Specialists
            </h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
            {specialists.map((doctor, index) => (
              <ScrollFadeIn key={doctor.name} className="bg-card p-6 rounded-xl shadow-lg flex flex-col" delay={`${(index % 4) * 100}ms`}>
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center shadow-md shrink-0 mb-4">
                    <Image
                      src={doctor.imageUrl && doctor.imageUrl.trim() !== "" ? doctor.imageUrl : "/doctors_profiles/placeholder.png"}
                      alt={doctor.name}
                      width={100}
                      height={100}
                      className="object-cover"
                      data-ai-hint={doctor.aiHint}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-headline text-xl font-semibold text-primary">{doctor.name}</h3>
                    <p className="text-accent font-medium mb-2">{doctor.specialty}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">{doctor.bio}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setSelectedDoctor(doctor)}>View Profile</Button>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
       <DoctorProfileDialog
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedDoctor(null);
          }
        }}
      />
    </>
  );
}



