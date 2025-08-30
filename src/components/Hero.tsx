import Image from 'next/image'
import OrderButton from './OrderButton'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-cafe.jpg"
          alt="Café Coco interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-cream-300">Café Coco</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
          Where every cup tells a story of exceptional coffee, fresh pastries, and warm hospitality
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <OrderButton size="lg" className="shadow-2xl" />
          <a 
            href="#featured-menu"
            className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-coffee-800 rounded-lg transition-all duration-200"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  )
}