import Hero from '@/components/Hero'
import MenuItemCard from '@/components/MenuItemCard'
import LocationCard from '@/components/LocationCard'
import OrderButton from '@/components/OrderButton'
import { featuredItems } from '@/lib/menu-data'

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="featured-menu" className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Our Signature Favorites
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              Crafted with care. Sourced with love. Shared with you.
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

      {/* Coffee Events */}
      <section
        id="coffee-events"
        className="relative py-24 overflow-hidden"
      >
        {/* soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-yellow-50 to-yellow-200 pointer-events-none" />
        {/* subtle decorative ring */}
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full border border-coffee-100/60 blur-[1px] opacity-40" />
        <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full border border-coffee-100/60 blur-[1px] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coffee-50 text-coffee-700 border border-coffee-100 mb-6">
                <span className="h-2 w-2 rounded-full bg-coffee-500 animate-pulse" />
                <span className="text-sm tracking-wide font-medium">Community & Culture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 leading-tight">
                Coffee Events
              </h2>

              <p className="mt-6 text-lg md:text-xl text-coffee-700 leading-relaxed">
                At Café Coco, the energy doesn’t stop when the coffee’s poured — it begins.
                Our <span className="font-semibold">Coffee Raves</span> bring together music,
                movement, and community, all fueled by specialty brews and bold flavors. Think high-energy
                beats, vibrant conversation, and the perfect buzz that only coffee can deliver. Whether
                you come to dance, connect, or simply sip something extraordinary, our Coffee Raves are
                where caffeine meets culture.
              </p>

              <p className="mt-4 text-coffee-700">
                Stay connected and join the buzz — sign up to receive dates and details for upcoming
                Coffee Raves and other special community events.
              </p>

              {/* Signup bar */}
              <form
                action="https://cafe-coco.us12.list-manage.com/subscribe/post?u=adb595f2af4e4340a48fc7fb5&id=6154f437d2"
                method="POST"
                target="_blank"
                className="mt-8 flex w-full max-w-xl rounded-2xl bg-white/90 backdrop-blur border border-yellow-300 shadow-sm overflow-hidden"
                aria-label="Sign up for Coffee Raves updates"
              >
                <input
                  type="email"
                  name="EMAIL"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 text-coffee-900 placeholder:text-coffee-400 focus:outline-none"
                  aria-label="Email address"
                />
                {/* Hidden bot prevention field */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_adb595f2af4e4340a48fc7fb5_6154f437d2" tabIndex={-1} defaultValue="" />
                </div>
                <button
                  type="submit"
                  className="shrink-0 px-5 sm:px-6 py-3.5 bg-coffee-700 text-yellow-50 font-medium hover:bg-coffee-800 transition-colors"
                >
                  Sign Up
                </button>
              </form>

            </div>

            {/* Event card / visual */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-coffee-200 via-yellow-200 to-yellow-100 blur-xl opacity-70" />
                <div className="relative rounded-3xl bg-white border border-yellow-300 shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-serif font-semibold text-coffee-900">
                        Coffee Rave — Next Drop
                      </h3>
                      <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-yellow-100 text-coffee-700 border border-yellow-300">
                        Coming Soon
                      </span>
                    </div>

                    <p className="mt-3 text-coffee-700">
                      Music · Specialty Brews · Night Market Vibes
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="rounded-xl border border-yellow-300 p-4">
                        <div className="text-sm text-coffee-600">When</div>
                        <div className="mt-1 font-medium text-coffee-900">TBA</div>
                      </div>
                      <div className="rounded-xl border border-yellow-300 p-4">
                        <div className="text-sm text-coffee-600">Where</div>
                        <div className="mt-1 font-medium text-coffee-900">Long Island City</div>
                      </div>
                      <div className="rounded-xl border border-yellow-300 p-4">
                        <div className="text-sm text-coffee-600">Vibe</div>
                        <div className="mt-1 font-medium text-coffee-900">High-Energy</div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-yellow-50 border border-yellow-200 p-4">
                      <p className="text-sm text-coffee-700">
                        Be first in line for dates and early access drops. We’ll email you as soon as the next
                        Coffee Rave is announced.
                      </p>
                    </div>

                    <div className="mt-6">
                      <a
                        href="https://cafe-coco.us12.list-manage.com/subscribe?u=adb595f2af4e4340a48fc7fb5&id=6154f437d2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3.5 rounded-xl bg-coffee-700 text-yellow-50 font-medium hover:bg-coffee-800 transition-colors text-center"
                      >
                        Get Notified
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-coffee-500">
                By signing up, you agree to receive event updates from Café Coco. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-forest-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Endless Brunch, All Day
            </h2>
            <p className="text-lg text-coffee-600 max-w-4xl mx-auto leading-relaxed mt-6">
              Brunch isn&apos;t just a meal at Café Coco—it&apos;s a state of mind. We believe in slowing down, savoring good food, and turning everyday moments into something special. Whether it&apos;s your first coffee of the morning or a late afternoon Babka French Toast, our all-day brunch menu is built for comfort and joy at any hour.
            </p>
            <p className="text-lg text-coffee-600 max-w-4xl mx-auto leading-relaxed mt-6">
              From our nourishing Kale Salad topped with Sunnyside Eggs in a Potato Nest to our Croissant, Smoked Salmon and Poached Egg covered in Hollandaise sauce, every dish is made to feel like a small indulgence. Because good company, great coffee, and something delicious on your plate should never be limited to weekends.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">
                Taste The Difference
              </h3>
              <p className="text-coffee-600 mb-8 leading-relaxed">
                Cafe Coco brings all-day brunch and serious coffee to Long Island City. <br />
                Paris flavor, New York attitude.
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
