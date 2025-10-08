import { Metadata } from 'next'
import Image from 'next/image'
import OrderButton from '@/components/OrderButton'
import { Coffee, Heart, Users, Award, Leaf, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Café Coco | Our Story & Mission',
  description: 'Learn about Café Coco\'s story, our commitment to quality coffee, sustainable sourcing, and community. Meet our team and discover our mission.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Quality First",
      description: "We source our beans directly from sustainable farms and roast them locally to ensure every cup meets our high standards."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Heart",
      description: "More than a coffee shop, we're a gathering place where neighbors become friends and every visit feels like coming home."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Practices",
      description: "We're committed to environmental responsibility through ethical sourcing, minimal waste, and eco-friendly packaging."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Artisan Craftsmanship",
      description: "Every pastry, tartine, and beverage is crafted by skilled artisans who take pride in their work and attention to detail."
    }
  ]

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
                Welcome to Café Coco
              </h2>
              <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
                <p>
                  Café Coco was born from a simple yet heartfelt idea: to create a space where people could gather, connect, and share the little joys of life. From the beginning, the vision was clear—bring together the comforting aroma of coffee, the delight of artisan baked goods, and the relaxed joy of brunch at any time of day.
                </p>
                <p>
                  At Café Coco, coffee isn’t just a drink — it’s a ritual, a reason to pause and savor the moment. Our baristas are passionate about every pour, every blend, and every detail that turns a cup into an experience. Alongside that, we partner with artisan bakers who craft breads, pastries, and sweets with the same dedication, bringing their creations fresh to our café each day.
                </p>
                <p>
                  But what truly sets Café Coco apart is the spirit of community. It’s not just a café — it’s a place where friendships spark over lattes, where neighbors gather at long tables, and where the sound of children’s laughter blends with the hum of conversation. Whether you’re starting your morning with a croissant, catching up with a friend over brunch, or enjoying an afternoon cappuccino, Café Coco is a place to feel at home.
                </p>
                <p>
                  At its heart, Café Coco is about more than food and coffee — it’s about belonging. It’s about the laughter that fills the air, the conversations that flow freely, and the friendships that form across tables. Café Coco was established so that every visit feels like more than just a stop — it feels like a connection, a celebration, and a community.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-hero.jpg"
                alt="Jacob Sebag roasting coffee beans at Café Coco"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing our beans to serving our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-forest-600 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-coffee-800">
                    {value.title}
                  </h3>
                </div>
                <p className="text-coffee-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              About Jacob "Coco" Sebag
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-coffee-600 leading-relaxed">
              <p>
                Jacob "Coco" Sebag is a true renaissance man — a gourmet, a creative, and a host at heart. Long before Café Coco came to life, Jacob's passion for food and hospitality was already part of his story. In the 1980s, he owned and operated Le Triomphe, a celebrated French restaurant in Long Island City known for its classic dishes, fine wines, and spirited neighborhood charm.
              </p>
              <p>
                In the decades since, Jacob built a distinguished career as a New York attorney, known for his intellect, integrity, and keen sense of human connection — qualities that also define his approach to hospitality. Beyond the courtroom, he's an artist of many forms: he has appeared in several films, including Sidney Pollack's final movie, <em>The Interpreter</em>, where he portrayed the French Ambassador.
              </p>
              <p>
                For those who know him best, Café Coco feels inevitable. Jacob's lifelong love of coffee, bread, and sweets, combined with his joy in gathering people around good conversation and beautiful food, made this next chapter only a matter of time.
              </p>
              <p>
                Café Coco is his newest creation — a place where community, creativity, and indulgence meet. It's where Jacob's worlds come together: the elegance of a French café, the warmth of a host who treats every guest like family, and the perfectionism of a man who believes that even a croissant should have soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-coffee-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Our Coffee Journey
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-yellow-200">
                  We work directly with coffee farmers in Ethiopia, Guatemala, and Colombia, 
                  ensuring fair prices and sustainable farming practices. Our small-batch roasting 
                  process highlights the unique characteristics of each origin.
                </p>
                <p className="text-yellow-200">
                  From the moment the green beans arrive at our roastery to the final pour in 
                  your cup, every step is carefully monitored to deliver the perfect balance of 
                  flavor, aroma, and satisfaction that our customers have come to expect.
                </p>
              </div>
              
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-100 mb-1">Fresh Daily</h4>
                  <p className="text-yellow-200">All pastries made fresh each morning before we open</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-100 mb-1">Community First</h4>
                  <p className="text-yellow-200">Supporting local events and partnering with nearby businesses</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Leaf className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-100 mb-1">Eco-Conscious</h4>
                  <p className="text-yellow-200">Compostable cups, recycling programs, and minimal waste practices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <OrderButton size="lg" text="Experience Our Coffee" className="bg-yellow-600 text-coffee-800 hover:bg-yellow-500" />
            <p className="mt-4 text-yellow-300">
              Visit us today and taste the difference that passion and quality make
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}