import { MapPin, Clock } from 'lucide-react'

interface LocationCardProps {
  className?: string
}

export default function LocationCard({ className = '' }: LocationCardProps) {
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday - Friday', time: '7:30 AM - 5:30 PM' },
    { day: 'Saturday - Sunday', time: '8:30 AM - 5:30 PM' }
  ]

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">Visit Us</h3>

      <div className="space-y-6">
        <a
          href="https://maps.app.goo.gl/ywry8BaKg47WuEWMA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
        >
          <MapPin className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-coffee-800">21-52 44th Dr</p>
            <p className="text-coffee-600">Long Island City, NY 11101</p>
          </div>
        </a>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
          <div className="space-y-2">
            <p className="font-medium text-coffee-800 mb-2">Hours</p>
            {hours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-coffee-600">{schedule.day}</span>
                <span className="text-coffee-800 font-medium">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}