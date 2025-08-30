import Hero from '@/components/Hero'
import MenuItemCard from '@/components/MenuItemCard'
import LocationCard from '@/components/LocationCard'
import OrderButton from '@/components/OrderButton'
import { featuredItems } from '@/lib/menu-data'

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="featured-menu" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Our Signature Favorites
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              Discover the flavors that keep our community coming back. Each item is crafted with care using premium, locally-sourced ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                name={item.name}
                description={item.description}
                isPopular={item.isPopular}
                imageSrc={`/menu/${item.id}.jpg`}
              />
            ))}
          </div>
          
          <div className="text-center">
            <OrderButton size="lg" text="View Full Menu & Order" />
            <p className="mt-4 text-coffee-600">
              Browse our complete menu and place your order for pickup or delivery
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Welcome to Café Coco
            </h2>
            <p className="text-xl text-coffee-600 max-w-4xl mx-auto leading-relaxed">
              More than just a coffee shop, we&apos;re your neighborhood gathering place. Every morning, we craft exceptional experiences through carefully sourced beans, house-made pastries, and genuine hospitality. From our signature pistachio croissants to our nourishing acai bowls, every item on our menu tells a story of quality and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">
                Visit Us Today
              </h3>
              <p className="text-coffee-600 mb-8 leading-relaxed">
                Located in the heart of Long Island City, we&apos;re open early for your morning ritual and stay open late for afternoon meetings or evening treats. Whether you&apos;re grabbing a quick espresso or settling in with a book, you&apos;ll always find a warm welcome at Coco.
              </p>
              <OrderButton size="md" />
            </div>
            
            <LocationCard />
          </div>
        </div>
      </section>
    </>
  )
}
