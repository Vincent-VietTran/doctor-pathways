import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Microscope, Stethoscope } from "lucide-react";
import SpecialtyCard from "./SpecialtyCard";

const specialties = [
  {
    title: "Surgical Specialties",
    count: "9 specialties",
    icon: Scissors,
    bg: "bg-red-50",
    ring: "border-red-100",
    color: "text-red-600",
  },
  {
    title: "Medical Specialties",
    count: "6 specialties",
    icon: Heart,
    bg: "bg-blue-50",
    ring: "border-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Diagnostic Specialties",
    count: "2 specialties",
    icon: Microscope,
    bg: "bg-green-50",
    ring: "border-green-100",
    color: "text-green-600",
  },
  {
    title: "Primary Care",
    count: "1 specialty",
    icon: Stethoscope,
    bg: "bg-purple-50",
    ring: "border-purple-100",
    color: "text-purple-600",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Explore Specialties?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover detailed information about application processes, requirements, and pathways for each specialty.
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {specialties.map((s) => (
                  <SpecialtyCard
                    key={s.title}
                    title={s.title}
                    count={s.count}
                    icon={s.icon}
                    color={s.color}
                  />
                ))}
              </div>
            </div>
          </section>
  );
};

export default SpecialtiesSection;
