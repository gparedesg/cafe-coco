import { Metadata } from 'next'
import Image from 'next/image'
import OrderButton from '@/components/OrderButton'

export const metadata: Metadata = {
  title: 'About Us - Café Coco | Our Story & Mission',
  description: 'Learn about Café Coco\'s story, our commitment to quality coffee, sustainable sourcing, and community. Meet our team and discover our mission.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-coffee-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The Story of Café Coco
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Crafting exceptional coffee experiences
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-coffee-800 mb-6">
                Why LIC?
              </h2>
              <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
                <p>
                  We chose Long Island City for our first Café Coco because it blends creativity, community, and warmth in a way few neighborhoods do. It&apos;s where artists, entrepreneurs, and families cross paths—and where people still take the time to connect. Jacob &quot;Coco&quot; Sebag has worked in LIC since 1983, so opening here feels like coming full circle. We wanted to create something personal and inviting: the smell of fresh bread, the smooth taste of great coffee, the sweetness of a pistachio croissant. LIC&apos;s mix of artistry and authenticity makes it the perfect place for Café Coco to call home.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-hero.jpg"
                alt="Jacob Sebag at Café Coco"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif font-bold text-coffee-800 mb-6">
                Our Design Story
              </h2>
              <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
                <p>
                  Café Coco was designed to feel warm, open, and welcoming from the moment you walk in. The white brick walls bring light and texture, while concrete grey tones nod to the city we love—modern, a little industrial, but never cold. Our sunflower yellow adds the warmth we&apos;re known for, a small burst of color that feels cheerful and alive.
                </p>
                <p>
                  Nothing here is overdone. The design is simple, with details that feel personal and lasting. It&apos;s a space built for connection—a place where the smell of coffee, the sound of conversation, and the comfort of beautiful surroundings come together naturally.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-coffee-800 mb-6">
                The Heart of Our Menu
              </h2>
              <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
                <p>
                  The French spirit runs through everything we serve. From the buttery layers of our croissants to the balance of sweetness and texture in every pastry, the menu reflects Coco&apos;s lifelong love of French cafés and simple, beautiful food. Our croissants are made with French imported &quot;Isigny Sainte-Mere&quot; butter and &quot;Moulins Bourgeois&quot; flour imported from France—and you&apos;ll taste the difference in every bite.
                </p>
                <p>
                  The pain au chocolat holds a special place in our story—it&apos;s an homage to the snack Coco&apos;s mother made for him each afternoon when he came home from school. We hope the children of Long Island City grow up enjoying it just as much.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              {`About Jacob "Coco" Sebag`}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <Image
                  src="/cafe_coco.svg"
                  alt="Cafe Coco Logo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
                  <p>
                    {`Jacob "Coco" Sebag is a true renaissance man — a gourmet, a creative, and a host at heart. Long before Café Coco came to life, Jacob's passion for food and hospitality was already part of his story. In the 1980s, he owned and operated Le Triomphe, a celebrated French restaurant in Long Island City known for its classic dishes, fine wines, and spirited neighborhood charm.`}
                  </p>
                  <p>
                    {`In the decades since, Jacob built a distinguished career as a New York attorney, known for his intellect, integrity, and keen sense of human connection — qualities that also define his approach to hospitality. Beyond the courtroom, he's an artist of many forms: he has appeared in several films, including Sidney Pollack's final movie, The Interpreter, where he portrayed the French Ambassador.`}
                  </p>
                  <p>
                    {`For those who know him best, Café Coco feels inevitable. Jacob's lifelong love of coffee, bread, and sweets, combined with his joy in gathering people around good conversation and beautiful food, made this next chapter only a matter of time.`}
                  </p>
                  <p>
                    {`Café Coco is his newest creation — a place where community, creativity, and indulgence meet. It's where Jacob's worlds come together: the elegance of a French café, the warmth of a host who treats every guest like family, and the perfectionism of a man who believes that even a croissant should have soul.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-coffee-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              Our Partners
            </h2>
            <div className="space-y-6 text-lg text-yellow-200 leading-relaxed">
              <p>
                At Café Coco, we partner with professionals who share our love for quality and care. Our pastries and breads come from La Bicyclette Bakery, where every loaf and croissant is baked using time-honored French methods and the finest ingredients including butter and flour imported from France.
              </p>
              <p>
                Our coffee is roasted in Brooklyn by Stone Street Coffee in small batches, ensuring exceptional freshness and flavor. The blend served at Café Coco is crafted exclusively for us—a smooth, balanced roast that pairs perfectly with a buttery croissant or a quiet morning moment.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <OrderButton size="lg" text="Experience Café Coco" className="bg-yellow-600 text-coffee-800 hover:bg-yellow-500" />
            <p className="mt-4 text-yellow-300">
              Visit us today and taste the difference
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
