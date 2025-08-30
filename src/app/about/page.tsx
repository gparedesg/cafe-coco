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

  const team = [
    {
      name: "Sofia Martinez",
      role: "Head Roaster",
      bio: "With 15 years in specialty coffee, Sofia brings her passion for exceptional beans and sustainable practices to every cup."
    },
    {
      name: "Marcus Chen",
      role: "Head Pastry Chef",
      bio: "Trained in French patisserie, Marcus creates our beloved croissants and pastries fresh each morning with traditional techniques."
    },
    {
      name: "Jack Thompson",
      role: "Community Manager",
      bio: "Jack ensures every customer feels welcomed and coordinates our community events and local partnerships."
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-coffee-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Story
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
                  What started as a dream to create the perfect neighborhood coffee experience 
                  has grown into a beloved community hub in Long Island City. Our journey began 
                  when Jacob Sebag, a passionate coffee lover, decided to open a space where 
                  exceptional coffee meets warm hospitality.
                </p>
                <p>
                  Every morning, we wake up excited to serve our community. From our signature 
                  pistachio croissants (which have become legendary among locals) to our carefully 
                  curated coffee selection, we believe that great food and drink have the power 
                  to bring people together and brighten their day.
                </p>
                <p>
                  We&apos;re not just serving coffee – we&apos;re crafting experiences, building relationships, 
                  and creating moments of joy that carry our guests through their busy days.
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

      <section className="py-20 bg-cream-200">
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
              Meet Our Team
            </h2>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              The passionate people behind every cup, pastry, and smile at Café Coco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <Image
                    src={`/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-forest-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-coffee-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
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
                <p className="text-cream-200">
                  We work directly with coffee farmers in Ethiopia, Guatemala, and Colombia, 
                  ensuring fair prices and sustainable farming practices. Our small-batch roasting 
                  process highlights the unique characteristics of each origin.
                </p>
                <p className="text-cream-200">
                  From the moment the green beans arrive at our roastery to the final pour in 
                  your cup, every step is carefully monitored to deliver the perfect balance of 
                  flavor, aroma, and satisfaction that our customers have come to expect.
                </p>
              </div>
              
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-cream-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cream-100 mb-1">Fresh Daily</h4>
                  <p className="text-cream-200">All pastries made fresh each morning before we open</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-cream-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cream-100 mb-1">Community First</h4>
                  <p className="text-cream-200">Supporting local events and partnering with nearby businesses</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Leaf className="w-6 h-6 text-cream-300 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cream-100 mb-1">Eco-Conscious</h4>
                  <p className="text-cream-200">Compostable cups, recycling programs, and minimal waste practices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <OrderButton size="lg" text="Experience Our Coffee" className="bg-cream-600 text-coffee-800 hover:bg-cream-500" />
            <p className="mt-4 text-cream-300">
              Visit us today and taste the difference that passion and quality make
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}