import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SpecialtyCardProps {
  icon: LucideIcon
  title: string
  count: string
  color: string
  href?: string
}

export default function SpecialtyCard({ icon: Icon, title, count, color, href }: SpecialtyCardProps) {
  const destination = href ?? '/' // default destination for cards

  return (
    <Link href={destination} className="block">
      <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer">
        <div className={`rounded-full p-4 w-fit mx-auto mb-4 ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{count}</p>
      </div>
    </Link>
  )
}
