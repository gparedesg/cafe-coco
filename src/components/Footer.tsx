import Link from 'next/link'
import { Instagram, Facebook, Twitter, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

const date = new Date();

export default function Footer() {
  return (
    <footer className="bg-coffee-800 text-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/cafe_coco.svg" alt="Cafe Coco" width={180} height={80} className="h-16 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5)' }} />
              <span className="font-bold text-xl uppercase text-yellow-100">
                Café Coco
              </span>
            </div>
            <p className="text-yellow-100 mb-4 max-w-md">
              Your neighborhood coffee destination, crafting exceptional experiences 
              one cup at a time with our locally sourced coffee blend and artisan breads and pastries.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/cocoespressobar"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-yellow-300 text-coffee-800 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200"
                aria-label="Visit our Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/cocoespressobar"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-yellow-300 text-coffee-800 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200"
                aria-label="Visit our Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/cocoespressobar"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-yellow-300 text-coffee-800 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200"
                aria-label="Visit our Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-yellow-200 hover:text-yellow-100 transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-yellow-200 hover:text-yellow-100 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-yellow-200 hover:text-yellow-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-100 mb-4">Visit Us</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/ywry8BaKg47WuEWMA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:opacity-80 transition-opacity"
              >
                <MapPin className="w-4 h-4 text-yellow-300 mt-1 flex-shrink-0" />
                <div className="text-yellow-200 text-sm">
                  <p>21-52 44th Dr</p>
                  <p>Long Island City, NY 11101</p>
                </div>
              </a>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-yellow-300 mt-1 flex-shrink-0" />
                <div className="text-yellow-200 text-sm">
                  <p>Monday: Closed</p>
                  <p>Tuesday - Sunday: 7:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-yellow-300 text-sm">
          <p>&copy; { date.getFullYear() } Café Coco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}