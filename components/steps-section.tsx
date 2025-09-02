import { Card, CardContent } from "@/components/ui/card";
import { Book, User, Target } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Medical School",
    description: "Complete your medical degree (MD/MBBS) at an accredited Australian medical school. Focus on core rotations and begin exploring specialties.",
    duration: "4–6 years",
    icon: Book,
  },
  {
    id: 2,
    title: "Internship (PGY1)",
    description: "Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA.",
    duration: "1 year",
    icon: User,
  },
  {
    id: 3,
    title: "Specialty Training",
    description: "Residency, applications, and 3–6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college.",
    duration: "3–7 years (including residency and applications)",
    icon: Target,
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;

  return (
    <div className="relative">
      <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              {step.id}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 mb-3">{step.description}</p>
          <p className="text-sm font-medium text-blue-600">Duration: {step.duration}</p>
        </CardContent>
      </Card>
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-blue-300 transform -translate-y-1/2 ml-4"></div>
      )}
    </div>
  );
};

const StepsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Medical Career Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow the structured path from medical school to becoming a specialist in Australia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
