import { Card, CardContent } from "@/components/ui/card";
import { Book, User, Target } from "lucide-react";
import StepCard from "./StepCard";

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



const StepsSection = () => {
  return (
    <>
      {/* Steps Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-8">
                  <StepCard
                    icon={Book}
                    title="Medical School"
                    duration="4–6 years"
                    description="Complete your medical degree (MD/MBBS) at an accredited Australian medical school. Focus on core rotations and begin exploring specialties."
                  />
      
                  {/* Connector */}
                  <div className="w-1 h-16 bg-green-700 rounded-full"></div>
      
                  <StepCard
                    icon={User}
                    title="Internship (PGY1)"
                    duration="1 year"
                    description="Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA."
                  />
      
                  {/* Connector */}
                  <div className="w-1 h-16 bg-green-700 rounded-full"></div>
      
                  <StepCard
                    icon={Target}
                    title="Specialty Training"
                    duration="3–7 years (including residency and applications)"
                    description="Residency, applications, and 3–6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college."
                  />
                </div>
              </div>
            </section>
    </>
)};

export default StepsSection;
