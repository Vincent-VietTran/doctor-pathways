import { Book, User, Target, Scissors, Heart, Microscope, Stethoscope, Search } from 'lucide-react'
import Header from '../components/Header'
import SpecialtyCard from '../components/SpecialtyCard'
import StepCard from '@/components/StepCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />

      {/* Hero (updated to match provided snippet) */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                World&apos;s Best Advanced Cross-Border Care
              </h1>
              <p className="text-base sm:text-lg text-emerald-100 mb-6 max-w-2xl">
                Find the best pathways and clear direction across specialties and countries.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 max-w-2xl">
                <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-3 flex-1">
                  <Search className="mr-3 text-emerald-100" />
                  <input
                    aria-label="Search"
                    placeholder="Search specialties, hospitals, countries"
                    className="bg-transparent placeholder-emerald-200 outline-none w-full text-white"
                  />
                </div>

                <button className="mt-2 sm:mt-0 inline-block bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold">
                  Explore Specialties
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-4 shadow-2xl max-w-md mx-auto">
                <img src="/banner-image.jpg" alt="preview" className="w-full rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header />

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
            <div className="w-1 h-16 bg-blue-300 rounded-full"></div>

            <StepCard
              icon={User}
              title="Internship (PGY1)"
              duration="1 year"
              description="Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA."
            />

            {/* Connector */}
            <div className="w-1 h-16 bg-blue-300 rounded-full"></div>

            <StepCard
              icon={Target}
              title="Specialty Training"
              duration="3–7 years (including residency and applications)"
              description="Residency, applications, and 3–6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college."
            />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Explore Specialties?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover detailed information about application processes, requirements, and pathways for each specialty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SpecialtyCard
              icon={Scissors}
              title="Surgical Specialties"
              count="9 specialties"
              color="red"
            />

            <SpecialtyCard
              icon={Heart}
              title="Medical Specialties"
              count="6 specialties"
              color="blue"
            />

            <SpecialtyCard
              icon={Microscope}
              title="Diagnostic Specialties"
              count="2 specialties"
              color="green"
            />

            <SpecialtyCard
              icon={Stethoscope}
              title="Primary Care"
              count="1 specialty"
              color="purple"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
