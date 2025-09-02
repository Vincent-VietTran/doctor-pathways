import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Microscope, Stethoscope } from "lucide-react";

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

const SpecialtyCard = ({ specialty }: { specialty: typeof specialties[0] }) => {
  const Icon = specialty.icon;

  return (
    <div>
      <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-102 cursor-pointer">
        <CardContent className="p-8 text-center">
          <div className={`w-16 h-16 ${specialty.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 ${specialty.ring}`}>
              <Icon className={`${specialty.color} w-6 h-6`} />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
          <p className="text-sm text-gray-500 mb-1">{specialty.count}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Explore Specialties?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover detailed information about application processes, requirements, and pathways for each specialty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.title} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
