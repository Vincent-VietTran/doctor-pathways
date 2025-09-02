import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400" />
          <input
            type="text"
            placeholder="Search specialties..."
            className="w-full pl-10 pr-4 py-3 rounded-full text-white-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Hero title inside header */}
        <div className="mt-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Doctor Pathways</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Empowering Your Journey to a Doctor Career in Australia
          </p>
        </div>
      </div>
    </header>
  )
}
