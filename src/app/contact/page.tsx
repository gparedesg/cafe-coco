import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import GoogleMapsProvider from '@/components/GoogleMapsProvider'
import CafeMap from '@/components/CafeMap'

export const metadata: Metadata = {
  title: 'Contact Us - Café Coco | Location, Hours & Get In Touch',
  description: 'Visit Café Coco at 21-52 44th Dr, in Long Island City. Find our hours, contact information, and get directions. Send us a message!',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-coffee-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Visit Us Today
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            The Art of Coffee & Connection
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-coffee-800 mb-8">
                Contact Us
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Address</h3>
                    <p className="text-coffee-600 text-lg">
                      21-52 44th Drive<br />
                      Long Island City NY 11101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Email</h3>
                    <a href="mailto:hello@cafe-coco.com" className="text-coffee-600 text-lg hover:text-forest-600 transition-colors">
                      hello@cafe-coco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div className="w-xs">
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Hours</h3>
                    <div className="space-y-2 text-coffee-600">
                      <div className="flex justify-between items-center">
                        <span>Monday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Tuesday - Sunday</span>
                        <span className="font-medium">7:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://instagram.com/cocoespressobar"
                    target="_blank"
                    className="text-coffee-600 hover:text-forest-600 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://facebook.com/cocoespressobar"
                    target="_blank"
                    className="text-coffee-600 hover:text-forest-600 transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://twitter.com/cocoespressobar"
                    target="_blank"
                    className="text-coffee-600 hover:text-forest-600 transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
                <p className="text-coffee-500 mt-4">
                  Stay updated with our daily specials, new menu items, and community events
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-coffee-800 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-coffee-600">
              We&apos;re conveniently located in the heart of Long Island City
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <GoogleMapsProvider>
                <CafeMap className="w-full h-full rounded-2xl" />
              </GoogleMapsProvider>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-coffee-800 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Questions or Special Requests?
            </h2>
            <p className="text-xl text-yellow-200 mb-8 mx-auto">
              Planning an event? Have questions? <br />
              Please contact us via email or stop by Cafe Coco ...we look forward to hearing from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
              <a
                href="mailto:hello@cafe-coco.com"
                className="text-center hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="bg-forest-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-forest-500">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-yellow-100 mb-2">Send a Message</h3>
                <p className="text-yellow-300 text-sm">Detailed inquiries or feedback</p>
              </a>

              <a
                href="https://maps.app.goo.gl/ywry8BaKg47WuEWMA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="bg-forest-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-forest-500">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-yellow-100 mb-2">Visit In Person</h3>
                <p className="text-yellow-300 text-sm">Nothing beats a face-to-face conversation</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}