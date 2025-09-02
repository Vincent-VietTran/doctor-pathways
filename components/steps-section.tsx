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
    <div className="w-full">
      <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 border-0">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-100">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                <span className="text-sm text-gray-500">{step.duration}</span>
              </div>
              <p className="text-gray-600 mt-3 leading-relaxed">{step.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* short centered connector between cards (shown except after last) */}
      {index < steps.length - 1 && (
        <div className="flex justify-center">
          <div className="w-1.5 h-14 bg-blue-200 rounded mt-8 mb-8"></div>
        </div>
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

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div className="px-4" key={step.id}>
                <div className="max-w-[720px] mx-auto">
                  <StepCard step={step} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
