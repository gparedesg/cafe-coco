import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
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
            We&apos;d love to see you at Café Coco
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-coffee-800 mb-8">
                Find Us
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Address</h3>
                    <p className="text-coffee-600 text-lg">
                      21-52 44th Dr<br />
                      Long Island City<br />
                      City, State 12345
                    </p>
                    <p className="text-coffee-500 mt-2">
                      Located right next to Court Square in Long Island City, <br /> 
                      with a 1-minute walk to the E, M, G, and 7 trains
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Phone</h3>
                    <p className="text-coffee-600 text-lg">(555) 123-COCO</p>
                    <p className="text-coffee-500 mt-2">
                      Call us for reservations, catering, or any questions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Email</h3>
                    <p className="text-coffee-600 text-lg">hello@cocoespressobar.com</p>
                    <p className="text-coffee-500 mt-2">
                      For inquiries, feedback, or partnership opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">Hours</h3>
                    <div className="space-y-2 text-coffee-600">
                      <div className="flex justify-between items-center">
                        <span>Monday - Friday</span>
                        <span className="font-medium">6:30 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Saturday</span>
                        <span className="font-medium">7:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sunday</span>
                        <span className="font-medium">7:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                    <p className="text-coffee-500 mt-2">
                      Extended hours during the holiday season
                    </p>
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

      <section className="py-16 bg-cream-50">
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
            <p className="text-xl text-cream-200 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re planning an event, have dietary restrictions, or just want to chat about coffee, 
              we&apos;re here to help. Don&apos;t hesitate to reach out!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-forest-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-cream-100 mb-2">Call Us</h3>
                <p className="text-cream-300 text-sm">Quick questions or immediate assistance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-cream-100 mb-2">Send a Message</h3>
                <p className="text-cream-300 text-sm">Detailed inquiries or feedback</p>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-cream-100 mb-2">Visit In Person</h3>
                <p className="text-cream-300 text-sm">Nothing beats a face-to-face conversation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}