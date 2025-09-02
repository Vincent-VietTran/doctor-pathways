import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent bg-gradient-to-br from-blue-50 to blue-100">
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-center gap-y-8 px-6 py-12 lg:py-0">
        {/* Top bar */}
        <div className="text-center">
          <p className="text-blue-600 font-medium mb-2">
            Your guide to medical specialty training in Australia
          </p>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search specialties..."
              className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Main Title Section */}
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Doctor Pathways
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Navigate your journey from medical school to specialty training in Australia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
