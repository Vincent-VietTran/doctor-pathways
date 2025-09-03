import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface StepCardProps {
  icon: LucideIcon
  title: string
  duration: string
  description: string
  delay?: number
  href?: string
}

export default function StepCard({ icon: Icon, title, duration, description, href }: StepCardProps) {
  const destination = href ?? '/'
  return (
    <Link href={destination} className="block">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full hover:scale-105 transition-transform hover:cursor-pointer">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 rounded-full p-3 mr-4">
            <Icon className="w-8 h-8 text-[#064E3B]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
