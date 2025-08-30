import Image from 'next/image'

interface MenuItemCardProps {
  name: string
  description: string
  isPopular?: boolean
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export default function MenuItemCard({
  name,
  description,
  isPopular = false,
  imageSrc = '/placeholder-food.jpg',
  imageAlt,
  className = ''
}: MenuItemCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt || name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        {isPopular && (
          <div className="absolute top-3 right-3 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-coffee-800 mb-2">
          {name}
        </h3>
        <p className="text-coffee-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}