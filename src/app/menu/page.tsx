import { Metadata } from 'next'
import Image from 'next/image'
import OrderButton from '@/components/OrderButton'
import { menuCategories } from '@/lib/menu-data'

export const metadata: Metadata = {
  title: 'Menu - Café Coco | Pastries, Tartines, Smoothies & More',
  description:
    'A quick overview of our menu by category. See highlights at a glance, then order the full menu through Toast.',
}

type MenuItem = {
  id: string
  name: string
  description?: string
  isPopular?: boolean
}

type MenuCategory = {
  id: string
  name: string
  description?: string
  items: MenuItem[]
  imageSrc?: string
}

function CategoryDigestCard({ category }: { category: MenuCategory }) {
  const popular = category.items.filter(i => i.isPopular)
  const sample = (popular.length ? popular : category.items).slice(0, 3)

  // Use the first item's image for the category visual
  const firstItem = category.items?.[0]
  const img = firstItem ? `/menu/${firstItem.id}.jpg` : '/placeholder-food.jpg'
  const alt = firstItem
    ? `${firstItem.name} — ${category.name} at Café Coco`
    : `${category.name} — Café Coco`

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-yellow-300 rounded-3xl shadow-sm overflow-hidden">
        {/* Visual */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-60" />
          <div className="relative h-56 sm:h-64 lg:h-full">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-coffee-700 border border-yellow-300 text-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-coffee-500" />
            {category.items.length} items
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900">
            {category.name}
          </h2>

          {category.description && (
            <p className="mt-4 text-coffee-700 leading-relaxed">
              {category.description}
            </p>
          )}

          {/* Sample items as chips */}
          {sample.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {sample.map(item => (
                <span
                  key={item.id}
                  className="px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-300 text-coffee-800 text-sm"
                >
                  {item.name}
                </span>
              ))}
              {category.items.length > sample.length && (
                <span className="px-3 py-1.5 rounded-full bg-white border border-yellow-300 text-coffee-700 text-sm">
                  + more
                </span>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <OrderButton size="md" text="Order from this Category" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero */}
      <div className="bg-coffee-800 text-white py-20" id="top-order">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Menu</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            A quick overview of our categories. Tap into Toast for full details when you’re ready to order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <OrderButton size="lg" text="Order Online Now" />
          </div>
        </div>
      </div>

      {/* Sticky chip nav */}
      <div className="bg-yellow-200 sticky top-0 z-20 border-y border-yellow-500 bg-yellow-50/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Menu categories"
            className="flex gap-2 overflow-x-auto py-3 no-scrollbar"
          >
            {menuCategories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white border border-yellow-500 text-coffee-800 hover:bg-yellow-100 transition"
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Intro copy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-lg text-coffee-700 max-w-4xl mx-auto leading-relaxed">
            Fresh, locally-sourced ingredients prepared daily. This digest highlights what we’re known for in
            each category. For complete pricing and to place an order, use the buttons above to open Toast.
          </p>
        </div>
      </div>

      {/* Category digest grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {menuCategories.map((category: MenuCategory) => (
          <CategoryDigestCard key={category.id} category={category} />
        ))}

        {/* Footer CTA */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-12 text-center border border-yellow-300">
          <h3 className="text-3xl font-serif font-bold text-coffee-800 mb-6">Ready to Order?</h3>
          <p className="text-lg text-coffee-600 mb-8 max-w-2xl mx-auto">
            Open our complete Toast menu with live pricing, modifiers, and availability.
          </p>
          <OrderButton size="lg" text="Order Online Through Toast" />
          <div className="mt-8 pt-8 border-t border-yellow-300">
            <p className="text-coffee-600 mb-2">
              <strong>Pickup:</strong> Usually ready in 10–15 minutes
            </p>
            <p className="text-coffee-600">
              <strong>Delivery:</strong> Available within 3 miles
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
