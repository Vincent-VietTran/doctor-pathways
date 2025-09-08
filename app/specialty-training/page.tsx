import Link from "next/link";
import { Scissors, Heart, Microscope, Stethoscope } from "lucide-react";
import SpecialtiesSection from "@/components/specialties-section";
import Navbar from '@/components/navbar/navbar'

const categories = [
  { title: "Surgical Specialties", description: "9 surgical specialties including General Surgery, Orthopaedics, Neurosurgery, and more", count: 9, icon: Scissors },
  { title: "Medical Specialties", description: "Physician specialties including Cardiology, Emergency Medicine, and others", count: 6, icon: Heart },
  { title: "Diagnostic Specialties", description: "Radiology, Pathology and other diagnostic focused specialties", count: 2, icon: Microscope },
  { title: "Primary Care", description: "General Practice and community-based medical care", count: 1, icon: Stethoscope },
];

export default function SpecialtiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-[#064E3B] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Specialty Training</h1>
          <p className="text-white/90 mt-2">Choose your specialty training pathway. Each category contains detailed information about application processes, requirements, and career pathways.</p>
        </div>
      </div>

      {/* Specialties Section */}
      <SpecialtiesSection />
    </main>
  );
}
