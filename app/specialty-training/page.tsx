import Link from "next/link";
import { Scissors, Heart, Microscope, Stethoscope } from "lucide-react";

const categories = [
  { title: "Surgical Specialties", description: "9 surgical specialties including General Surgery, Orthopaedics, Neurosurgery, and more", count: 9, icon: Scissors },
  { title: "Medical Specialties", description: "Physician specialties including Cardiology, Emergency Medicine, and others", count: 6, icon: Heart },
  { title: "Diagnostic Specialties", description: "Radiology, Pathology and other diagnostic focused specialties", count: 2, icon: Microscope },
  { title: "Primary Care", description: "General Practice and community-based medical care", count: 1, icon: Stethoscope },
];

export default function SpecialtiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-sky-600 to-teal-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Specialty Training</h1>
          <p className="text-white/90 mt-2">Choose your specialty training pathway. Each category contains detailed information about application processes, requirements, and career pathways.</p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            <div className="text-center">
              <strong className="block">Residency & Applications</strong>
              <span className="text-sm text-gray-600">1-3+ years building CV and applying</span>
            </div>
            <div className="text-center">
              <strong className="block">Training Duration</strong>
              <span className="text-sm text-gray-600">3-7 years depending on specialty</span>
            </div>
            <div className="text-center">
              <strong className="block">College Exams</strong>
              <span className="text-sm text-gray-600">Written and clinical examinations</span>
            </div>
            <div className="text-center">
              <strong className="block">Fellowship</strong>
              <span className="text-sm text-gray-600">Become a specialist consultant</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Choose Your Specialty Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((c) => (
            <Link key={c.title} href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
                <div className="rounded-full p-4 w-fit mx-auto mb-4 bg-slate-100 text-sky-600">
                  <c.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-center mb-4">{c.description}</p>
                <div className="text-center text-sky-600 font-medium">{c.count} specialties →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to Begin?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">Each specialty category contains detailed information about application requirements, selection criteria, training pathways, and career outcomes to help you make informed decisions.</p>
        </div>
      </section>
    </main>
  );
}
