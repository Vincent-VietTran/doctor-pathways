import { Book, User, Target, Scissors, Heart, Microscope, Stethoscope } from 'lucide-react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/navbar'
import StepsSection from '@/components/steps-section'
import SpecialtiesSection from '@/components/specialties-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <Header />

      {/* Steps Section */}
      <StepsSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      <Footer />
    </div>
  )
}
