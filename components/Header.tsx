import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center mb-8">
          <div className="bg-white rounded-3xl p-4 shadow-2xl w-[90%] max-w-[980px]">
            <Image src="/banner-image.jpg" width={980} height={400} alt="preview" className="w-full rounded-2xl object-cover block" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Australia&apos;s Best Doctor Career Companion
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 mb-6">
              {/* Empowering Your Journey to a Doctor Career in Australia */}
              Discover the best Pathways and Direction across Specialties and Regions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto max-w-2xl">
              <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-3 flex-1 min-w-[220px]">
                <Search className="mr-3 text-emerald-100" />
                <input
                  aria-label="Search"
                  placeholder="Search med schools, specialties, training"
                  className="bg-transparent placeholder-emerald-200 outline-none w-full text-white"
                />
              </div>

              <Link href='#specialties' className="mt-2 sm:mt-0 inline-block bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold">
                Explore Specialties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
