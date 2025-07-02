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
  education: "MBBS, FCPS (Ophthalmology) – Khyber Medical College",
  languages: "English, Urdu, Pashto",
  bio: "Prof. Dr. Muhammad Daud Khan is a renowned ophthalmologist and the visionary Chairman of Noble Health Services. With decades of experience in eye surgery and visual healthcare, he has contributed significantly to the development of medical education and advanced healthcare services in Pakistan. He has held several leadership positions in national medical institutions and continues to inspire clinical excellence, research, and ethical practices. His focus is not only on restoring sight but also on enhancing the quality of life for patients through comprehensive eye care.",
  location: "NHS Hospital, Peshawar Ring Road",
  timings: "Mon–Fri, 9AM–2PM",
  contact: { phone: "+92-300-1234567", email: "dr.daud@nhs.pk" },
  consultationType: "In-person, Telehealth",
  proceduresPerformed: "Cataract Surgery, Glaucoma Management, Retinal Surgery",
  insuranceAccepted: "Sehat Card, NHS Health Plan",
  imageUrl: "https://placehold.co/150x150.png?text=Dr.+Daud",
  aiHint: "male doctor portrait"
};

const ceo: DoctorProfile = {
  name: "Dr. Faiz-ur-Rahman",
  role: "Chief Executive Officer (CEO)",
  specialty: "Medicine / Diabetes",
  title: "CEO, Consultant Physician & Diabetologist",
  experience: "22+ years",
  education: "MBBS, FCPS (Medicine) – Dow University",
  languages: "English, Urdu",
  bio: "Dr. Faiz-ur-Rahman is the CEO of Noble Health Services and a leading consultant in internal medicine and diabetes care. With over two decades of experience, he is dedicated to advancing patient-centered healthcare and innovative diabetes management in Pakistan. His leadership is marked by a commitment to clinical excellence, compassionate care, and continuous improvement in medical services.",
  location: "NHS Diabetes Center, Peshawar",
  timings: "Tue–Sat, 9AM–1PM",
  contact: { phone: "+92-345-4433221", email: "dr.faiz@nhs.pk" },
  consultationType: "In-person, Online",
  proceduresPerformed: "Diabetes Management, Endocrine Disorders, Hypertension Treatment",
  insuranceAccepted: "Sehat Card, Private Insurers",
  imageUrl: "https://placehold.co/150x150.png?text=Dr.+Faiz",
  aiHint: "doctor portrait"
};

const specialists: DoctorProfile[] = [
    { name: "Dr. Nasir Saeed", specialty: "Ophthalmology", title: "Consultant Ophthalmologist", experience: "20+ years", education: "MBBS, DOMS – Peshawar Medical College", languages: "English, Urdu", bio: "Expert in medical and surgical care of the eyes and visual system.", location: "NHS Eye Center, Peshawar", timings: "Mon–Sat, 10AM–3PM", contact: { phone: "+92-300-7654321", email: "dr.nasir@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Cataract Surgery, Laser Vision Correction, Glaucoma Treatment", insuranceAccepted: "Sehat Card, Allied Insurance", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Nasir", aiHint: "doctor portrait" },
    { name: "Dr. Muhammad Aqeel Khan", specialty: "Pediatric Medicine", title: "Consultant Pediatrician", experience: "15+ years", education: "MBBS, FCPS (Pediatrics) – Quaid-e-Azam Medical College", languages: "English, Urdu", bio: "Focuses on medical care for infants, children, and adolescents, treating both common and complex childhood illnesses.", location: "NHS Pediatric Wing, Peshawar", timings: "Mon–Fri, 11AM–4PM", contact: { phone: "+92-331-1122334", email: "dr.aqeel@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Vaccination, Acute Illness Management, Developmental Screening", insuranceAccepted: "NHS Health Plan, Sehat Sahulat", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Aqeel", aiHint: "pediatrician portrait" },
    { name: "Dr. Rifayat Ullah Afridi", specialty: "Pediatric Medicine", title: "Consultant Pediatrician", experience: "18+ years", education: "MBBS, FCPS (Pediatrics)", languages: "English, Urdu, Pashto", bio: "Provides preventive and acute medical care for children, ensuring healthy growth and development.", location: "NHS Pediatric Wing, Peshawar", timings: "Mon–Sat, 10AM–5PM", contact: { phone: "+92-301-8765432", email: "dr.rifayat@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Well-child visits, Immunizations", insuranceAccepted: "Sehat Card, State Life", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Rifayat", aiHint: "pediatrician portrait" },
    { name: "Dr. Javed Ahmad", specialty: "Diagnostic Radiology", title: "Consultant Radiologist", experience: "25+ years", education: "MBBS, FCPS (Radiology)", languages: "English, Urdu", bio: "Uses medical imaging (X-rays, CT, MRI) to diagnose and guide treatment of various conditions.", location: "NHS Diagnostic Imaging, Peshawar", timings: "Mon–Fri, 9AM–5PM", contact: { phone: "+92-302-1234567", email: "dr.javed@nhs.pk" }, consultationType: "Reporting & Consultation", proceduresPerformed: "MRI, CT Scan, Ultrasound, X-Ray", insuranceAccepted: "All Major Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Javed", aiHint: "radiologist portrait" },
    { name: "Dr. Muhammad Ayaz Khan", specialty: "Orthopedic & Spine Surgery", title: "Consultant Orthopedic & Spine Surgeon", experience: "20+ years", education: "MBBS, FCPS (Ortho)", languages: "English, Urdu", bio: "Treats musculoskeletal injuries and disorders, specializing in spinal surgeries and bone-related conditions.", location: "NHS Orthopedic & Spine Center, Peshawar", timings: "Tue–Sat, 11AM–4PM", contact: { phone: "+92-303-9876543", email: "dr.ayaz@nhs.pk" }, consultationType: "In-person, Surgical", proceduresPerformed: "Spine Surgery, Joint Replacement", insuranceAccepted: "Sehat Card, Private Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Ayaz", aiHint: "surgeon portrait" },
    { name: "Dr. Roaid Khan", specialty: "Medicine / Diabetes", title: "Consultant Physician & Diabetologist", experience: "12+ years", education: "MBBS, FCPS (Medicine)", languages: "English, Urdu", bio: "Expert in diagnosing and managing diabetes, focusing on long-term metabolic and lifestyle care.", location: "NHS Diabetes Center, Peshawar", timings: "Mon–Fri, 10AM–3PM", contact: { phone: "+92-304-5556677", email: "dr.roaid@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Insulin Therapy Management, Diabetic Foot Care", insuranceAccepted: "Sehat Card, NHS Health Plan", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Roaid", aiHint: "doctor portrait" },
    { name: "Dr. Naeem Khan", specialty: "Public Health Specialist", title: "Public Health Consultant", experience: "18+ years", education: "MBBS, MPH", languages: "English, Urdu", bio: "Works on improving community health, disease prevention, and health policy development.", location: "NHS Community Health Dept, Peshawar", timings: "By Appointment", contact: { phone: "+92-305-1122334", email: "dr.naeem@nhs.pk" }, consultationType: "Policy & Consultation", proceduresPerformed: "Health Campaigns, Research", insuranceAccepted: "N/A", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Naeem", aiHint: "public health specialist" },
    { name: "Dr. Ijaz Mohammad Khan", specialty: "Gastroenterology", title: "Consultant Gastroenterologist", experience: "16+ years", education: "MBBS, FCPS (Gastro)", languages: "English, Urdu", bio: "Specializes in disorders of the digestive system, including the stomach, intestines, liver, and pancreas.", location: "NHS Gastroenterology Clinic, Peshawar", timings: "Mon, Wed, Fri, 10AM–2PM", contact: { phone: "+92-306-9988776", email: "dr.ijaz@nhs.pk" }, consultationType: "In-person, Endoscopy", proceduresPerformed: "Endoscopy, Colonoscopy", insuranceAccepted: "Sehat Card, Private Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Ijaz", aiHint: "gastroenterologist portrait" },
    { name: "Dr. Syed Naqeeb Shah", specialty: "Orthopedics (Accident/Emergency)", title: "Consultant Orthopedic Surgeon (A&E)", experience: "14+ years", education: "MBBS, FCPS (Ortho)", languages: "English, Urdu", bio: "Expert in managing trauma, fractures, and emergency orthopedic care.", location: "NHS Emergency Department, Peshawar", timings: "24/7 On-Call", contact: { phone: "+92-307-1122333", email: "dr.naqeeb@nhs.pk" }, consultationType: "Emergency", proceduresPerformed: "Trauma Surgery, Fracture Fixation", insuranceAccepted: "All Major Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Naqeeb", aiHint: "emergency doctor" },
    { name: "Dr. Ata Ur Rahman", specialty: "Urology & Renal Transplantation", title: "Consultant Urologist & Transplant Surgeon", experience: "25+ years", education: "MBBS, FCPS (Urology)", languages: "English, Urdu", bio: "Specializes in urinary tract and male reproductive issues, with expertise in kidney transplants.", location: "NHS Urology & Transplant Center, Peshawar", timings: "Mon–Thu, 10AM–1PM", contact: { phone: "+92-308-4433221", email: "dr.ata@nhs.pk" }, consultationType: "In-person, Surgical", proceduresPerformed: "Kidney Transplant, TURP", insuranceAccepted: "Sehat Card, Specialized Plans", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Ata", aiHint: "urologist portrait" },
    { name: "Dr. Ahmad Rafiq", specialty: "Chemical Pathology", title: "Consultant Pathologist", experience: "20+ years", education: "MBBS, FCPS (Chemical Pathology)", languages: "English, Urdu", bio: "Analyzes bodily fluids for disease diagnosis using biochemical lab techniques.", location: "NHS Laboratories, Peshawar", timings: "Mon–Sat, 9AM–5PM", contact: { phone: "+92-309-8765123", email: "dr.rafiq@nhs.pk" }, consultationType: "Lab Reporting", proceduresPerformed: "Biochemical Analysis", insuranceAccepted: "All Major Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Rafiq", aiHint: "pathologist portrait" },
    { name: "Dr. Bushra Rauf", specialty: "Obstetrics & Gynecology", title: "Consultant OB/GYN", experience: "18+ years", education: "MBBS, FCPS (O&G)", languages: "English, Urdu", bio: "Provides medical and surgical care for women, especially related to childbirth and reproductive health.", location: "NHS Women's Health Center, Peshawar", timings: "Mon–Sat, 10AM–4PM", contact: { phone: "+92-310-1212121", email: "dr.bushra@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "C-Section, Hysterectomy, Antenatal Care", insuranceAccepted: "Sehat Card, NHS Health Plan", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Bushra", aiHint: "female doctor portrait" },
    { name: "Dr. Muhammad Ali Afridi", specialty: "Psychiatry", title: "Consultant Psychiatrist", experience: "15+ years", education: "MBBS, FCPS (Psychiatry)", languages: "English, Urdu", bio: "Specializes in diagnosing, treating, and preventing mental health disorders.", location: "NHS Mental Wellness Clinic, Peshawar", timings: "Tue–Fri, 1PM–5PM", contact: { phone: "+92-311-6543210", email: "dr.ali.afridi@nhs.pk" }, consultationType: "In-person, Telehealth", proceduresPerformed: "Counseling, Psychotherapy, Medication Management", insuranceAccepted: "Sehat Card, Private Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Ali", aiHint: "psychiatrist portrait" },
    { name: "Dr. Mohammad Ashraf Khan", specialty: "ENT (Consultant ENT Surgeon)", title: "Consultant ENT Surgeon", experience: "25+ years", education: "MBBS, FCPS (ENT)", languages: "English, Urdu", bio: "Expert in conditions of the ear, nose, and throat, including surgical interventions.", location: "NHS ENT Clinic, Peshawar", timings: "Mon–Fri, 11AM–3PM", contact: { phone: "+92-312-1239876", email: "dr.ashraf@nhs.pk" }, consultationType: "In-person, Surgical", proceduresPerformed: "Tonsillectomy, Septoplasty, FESS", insuranceAccepted: "Sehat Card, Allied Insurance", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Ashraf", aiHint: "ent surgeon" },
    { name: "Dr. Samina Altaf", specialty: "Cardiology", title: "Consultant Cardiologist", experience: "17+ years", education: "MBBS, FCPS (Cardiology)", languages: "English, Urdu, Punjabi", bio: "Specializes in interventional cardiology, focusing on coronary artery disease, heart failure, and arrhythmias.", location: "NHS Heart & Vascular Institute, Peshawar", timings: "Mon, Wed, Fri, 9AM–1PM", contact: { phone: "+92-313-5566778", email: "dr.samina.a@nhs.pk" }, consultationType: "In-person, Telehealth", proceduresPerformed: "Angioplasty, Stenting, Echocardiography", insuranceAccepted: "Sehat Card, NHS Health Plan", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Samina", aiHint: "female doctor portrait" },
    { name: "Dr. Farooq Shah", specialty: "Dermatology", title: "Consultant Dermatologist", experience: "12+ years", education: "MBBS, MCPS (Dermatology)", languages: "English, Urdu", bio: "Expert in treating skin, hair, and nail conditions, with a focus on cosmetic dermatology and skin cancer screening.", location: "NHS Dermatology Clinic, Peshawar", timings: "Tue, Thu, Sat, 11AM–4PM", contact: { phone: "+92-314-1122335", email: "dr.farooq.s@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Laser Therapy, Biopsy, Acne Treatment", insuranceAccepted: "Private Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Farooq", aiHint: "doctor portrait" },
    { name: "Dr. Imran Malik", specialty: "Neurology", title: "Consultant Neurologist", experience: "19+ years", education: "MBBS, FCPS (Neurology)", languages: "English, Urdu", bio: "Specializes in diagnosing and treating disorders of the nervous system, including stroke, epilepsy, and multiple sclerosis.", location: "NHS Neurology Center, Peshawar", timings: "Mon–Fri, 10AM–2PM", contact: { phone: "+92-315-9876543", email: "dr.imran.m@nhs.pk" }, consultationType: "In-person, EEG/EMG Reporting", proceduresPerformed: "EEG, EMG, Lumbar Puncture", insuranceAccepted: "Sehat Card, Allied Insurance", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Imran", aiHint: "neurologist portrait" },
    { name: "Dr. Sadia Khan", specialty: "Oncology", title: "Consultant Medical Oncologist", experience: "16+ years", education: "MBBS, FCPS (Medical Oncology)", languages: "English, Urdu, Pashto", bio: "Dedicated to providing compassionate cancer care, including chemotherapy, targeted therapy, and immunotherapy.", location: "NHS Cancer Center, Peshawar", timings: "Mon–Thu, 9AM–3PM", contact: { phone: "+92-316-4433221", email: "dr.sadia.k@nhs.pk" }, consultationType: "In-person", proceduresPerformed: "Chemotherapy Administration, Bone Marrow Biopsy", insuranceAccepted: "Sehat Card, Specialized Plans", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Sadia", aiHint: "female oncologist portrait" },
    { name: "Dr. Haris Jadoon", specialty: "General Surgery", title: "Consultant General Surgeon", experience: "21+ years", education: "MBBS, FCPS (General Surgery)", languages: "English, Urdu", bio: "Performs a wide range of surgical procedures, with expertise in laparoscopic and gastrointestinal surgeries.", location: "NHS Surgical Department, Peshawar", timings: "By Appointment", contact: { phone: "+92-317-1239876", email: "dr.haris.j@nhs.pk" }, consultationType: "Surgical, In-person Consultation", proceduresPerformed: "Laparoscopic Cholecystectomy, Hernia Repair, Appendectomy", insuranceAccepted: "All Major Insurers", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Haris", aiHint: "surgeon portrait" },
    { name: "Dr. Anam Tariq", specialty: "Anesthesiology", title: "Consultant Anesthesiologist", experience: "14+ years", education: "MBBS, FCPS (Anesthesiology)", languages: "English, Urdu", bio: "Ensures patient safety and comfort during surgical procedures by administering anesthesia and monitoring vital signs.", location: "NHS Operating Theatres, Peshawar", timings: "On-Call", contact: { phone: "+92-318-9876543", email: "dr.anam.t@nhs.pk" }, consultationType: "Pre-operative assessment", proceduresPerformed: "General Anesthesia, Regional Anesthesia, Pain Management", insuranceAccepted: "N/A", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Anam", aiHint: "female doctor portrait" },
    { name: "Dr. Bilal Ahmed", specialty: "Nephrology", title: "Consultant Nephrologist", experience: "15+ years", education: "MBBS, FCPS (Nephrology)", languages: "English, Urdu", bio: "Specializes in kidney diseases, including chronic kidney disease, dialysis, and hypertension management.", location: "NHS Nephrology & Dialysis Unit, Peshawar", timings: "Tue, Thu, 10AM–3PM", contact: { phone: "+92-319-5556677", email: "dr.bilal.a@nhs.pk" }, consultationType: "In-person, Dialysis Management", proceduresPerformed: "Hemodialysis, Peritoneal Dialysis, Kidney Biopsy", insuranceAccepted: "Sehat Card, NHS Health Plan", imageUrl: "https://placehold.co/100x100.png?text=Dr.+Bilal", aiHint: "nephrologist portrait" }
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
                <Image
                  src={ceo.imageUrl}
                  alt={ceo.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover shadow-md shrink-0 border-4 border-primary"
                  data-ai-hint={ceo.aiHint}
                />
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
                <Image
                  src={chairman.imageUrl}
                  alt={chairman.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover shadow-md shrink-0 border-4 border-primary"
                  data-ai-hint={chairman.aiHint}
                />
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
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover shadow-md shrink-0 mb-4"
                    data-ai-hint={doctor.aiHint}
                  />
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



