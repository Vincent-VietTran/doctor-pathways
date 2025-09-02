import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Microscope, Stethoscope } from "lucide-react";

const specialties = [
  {
    title: "Surgical Specialties",
    count: "9 specialties",
    icon: Scissors,
    description: "Orthopaedics, General Surgery, Neurosurgery, and more",
  },
  {
    title: "Medical Specialties",
    count: "6 specialties",
    icon: Heart,
    description: "Cardiology, Neurology, Gastroenterology, and more",
  },
  {
    title: "Diagnostic Specialties",
    count: "2 specialties",
    icon: Microscope,
    description: "Radiology and Pathology",
  },
  {
    title: "Primary Care",
    count: "1 specialty",
    icon: Stethoscope,
    description: "General Practice/Family Medicine",
  },
];

const SpecialtyCard = ({ specialty }: { specialty: typeof specialties[0] }) => {
  const Icon = specialty.icon;

  return (
    <div>
      <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
          <p className="text-sm font-medium text-blue-600 mb-2">{specialty.count}</p>
          <p className="text-gray-600 text-sm">{specialty.description}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.title} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
