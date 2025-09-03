import { Book, User, Target } from "lucide-react";
import StepCard from "./StepCard";

const steps = [
  {
    id: 1,
    title: "Medical School",
    description: "Complete your medical degree (MD/MBBS) at an accredited Australian medical school. Focus on core rotations and begin exploring specialties.",
    duration: "4–6 years",
    icon: Book,
    // Add medical school page
    href: "/"
  },
  {
    id: 2,
    title: "Internship (PGY1)",
    description: "Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA.",
    duration: "1 year",
    icon: User,
    // Add internship page
    href: "/"
  },
  {
    id: 3,
    title: "Specialty Training",
    description: "Residency, applications, and 3–6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college.",
    duration: "3–7 years (including residency and applications)",
    icon: Target,
    // Specialty training page
    href: "/specialty-training"
  },
];



const StepsSection = () => {
  return (
    <>
      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            {steps.map((step) => (
              <StepCard
                key={step.id}
                title={step.title}
                description={step.description}
                duration={step.duration}
                icon={step.icon}
                href={step.href}
              />
            ))}
          </div>
        </div>
      </section>
    </>
)};

export default StepsSection;
