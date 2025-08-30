import { MapPin, Clock, Phone } from 'lucide-react'

interface LocationCardProps {
  className?: string
}

export default function LocationCard({ className = '' }: LocationCardProps) {
  const hours = [
    { day: 'Monday - Friday', time: '6:30 AM - 6:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 7:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 5:00 PM' }
  ]

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">Visit Us</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-coffee-800">21-52 44th Dr</p>
            <p className="text-coffee-600">Long Island City, NY 11101</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-coffee-800">(555) 123-COCO</p>
            <p className="text-coffee-600">Call for reservations</p>
          </div>
        </div>

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