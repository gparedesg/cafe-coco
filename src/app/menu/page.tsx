import { Metadata } from 'next'
import MenuItemCard from '@/components/MenuItemCard'
import OrderButton from '@/components/OrderButton'
import { menuCategories } from '@/lib/menu-data'

export const metadata: Metadata = {
  title: 'Menu - Café Coco | Fresh Pastries, Tartines & More',
  description: 'Explore our full menu of artisan coffee, fresh pastries, tartines, egg dishes, smoothies, and nourish bowls. Order online for pickup or delivery.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-coffee-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover our carefully curated selection of coffee, pastries, and wholesome dishes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <OrderButton size="lg" text="Order Online Now" />
            <p className="text-cream-300">
              View full menu with prices and place your order
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-coffee-600 max-w-4xl mx-auto leading-relaxed">
            Our menu features fresh, locally-sourced ingredients prepared daily with care. 
            This overview showcases our most popular items. For complete pricing and to place an order, 
            click the &ldquo;Order Online&rdquo; button to access our full menu through Toast POS.
          </p>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, categoryIndex) => (
            <section key={category.id} className="scroll-mt-20" id={category.id}>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    isPopular={item.isPopular}
                    imageSrc={`/menu/${item.id}.jpg`}
                    className="h-full"
                  />
                ))}
              </div>

              {categoryIndex < menuCategories.length - 1 && (
                <div className="mt-16 text-center">
                  <OrderButton size="md" text="Order These Items" />
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-lg p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-coffee-800 mb-6">
            Ready to Order?
          </h3>
          <p className="text-lg text-coffee-600 mb-8 max-w-2xl mx-auto">
            View our complete menu with current pricing and place your order for pickup or delivery. 
            All items are prepared fresh to order using premium ingredients.
          </p>
          <OrderButton size="lg" text="Order Online Through Toast" />
          
          <div className="mt-8 pt-8 border-t border-coffee-200">
            <p className="text-coffee-600 mb-4">
              <strong>Pickup:</strong> Ready in 10-15 minutes
            </p>
            <p className="text-coffee-600">
              <strong>Delivery:</strong> Available through Toast within 3 miles
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}