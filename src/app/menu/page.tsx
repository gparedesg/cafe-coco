'use client'

import Image from 'next/image'
import OrderButton from '@/components/OrderButton'
import { menuCategories, MenuItem } from '@/lib/menu-data'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type MenuCategory = {
  id: string
  name: string
  description?: string
  items: MenuItem[]
  imageSrc?: string
}

function CategoryDigestCard({ category, isExpanded, onToggle }: {
  category: MenuCategory
  isExpanded: boolean
  onToggle: () => void
}) {
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
      <div className="relative bg-white border border-yellow-300 rounded-3xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-60" />
            <div className="relative h-56 sm:h-64 lg:h-full min-h-[300px]">
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

            {/* Sample items as chips - only show when not expanded */}
            {!isExpanded && sample.length > 0 && (
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

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={onToggle}
                className="inline-flex items-center gap-2 px-6 py-3 bg-coffee-700 text-white rounded-full hover:bg-coffee-800 transition-all duration-200 hover:scale-105 font-medium"
              >
                {isExpanded ? (
                  <>
                    Hide Full Menu
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View Full Menu
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded menu items with animation */}
        <div
          className={`border-t border-yellow-300 bg-yellow-50/30 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl p-6 border border-yellow-200 hover:border-yellow-400 transition-all duration-200 hover:shadow-md ${
                    isExpanded ? 'animate-fade-in-up' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-coffee-900">
                          {item.name}
                        </h3>
                        {item.isPopular && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-forest-100 text-forest-800 border border-forest-300">
                            Popular
                          </span>
                        )}
                        {item.isVegan && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                            Vegan
                          </span>
                        )}
                        {item.isGlutenFree && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-300">
                            GF
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-coffee-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-coffee-900">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MenuPage() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [scrollY, setScrollY] = useState(0)

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero */}
      <div className="relative bg-coffee-800 text-white py-32 overflow-hidden h-[500px] md:h-[600px]" id="top-order">
        {/* Background Image with Parallax */}
        <div
          className="absolute w-full"
          style={{
            top: '-20%',
            bottom: '-30%',
            transform: `translateY(-${scrollY * 0.4}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image
            src="/menu/hero.jpg"
            alt="Café Coco Menu - Fresh breakfast and brunch"
            fill
            priority
            className="object-cover object-center"
            style={{ objectFit: 'cover' }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 via-coffee-800/60 to-coffee-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">Menu</h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            <p>Browse our full menu by category. </p>
            <p>Click any category to see all items and prices.</p>
          </div>
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
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white border border-yellow-500 text-coffee-800 hover:bg-yellow-100 transition-all duration-200 hover:scale-105"
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
            Fresh, locally-sourced ingredients prepared daily. Click &ldquo;View Full Menu&rdquo; on any category to see all items with prices and descriptions.
          </p>
        </div>
      </div>

      {/* Category digest grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {menuCategories.map((category: MenuCategory) => (
          <CategoryDigestCard
            key={category.id}
            category={category}
            isExpanded={expandedCategories.has(category.id)}
            onToggle={() => toggleCategory(category.id)}
          />
        ))}

        {/* Footer CTA */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-12 text-center border border-yellow-300">
          <h3 className="text-3xl font-serif font-bold text-coffee-800 mb-6">Ready to Order?</h3>
          <p className="text-lg text-coffee-600 mb-8 max-w-2xl mx-auto">
            Place your order online through Toast for pickup or delivery.
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
