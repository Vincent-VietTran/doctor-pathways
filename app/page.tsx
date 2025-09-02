import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import SpecialtiesSection from "@/components/specialties-section";
import StepsSection from "@/components/steps-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StepsSection />
      <SpecialtiesSection />
      <Footer />
    </>
  );
}
