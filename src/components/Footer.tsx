import Link from 'next/link'
import { Instagram, Facebook, Twitter, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

const date = new Date();

export default function Footer() {
  return (
    <footer className="bg-coffee-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/cafe_coco_logo_no_text.png" alt="Cafe Coco Logo" width={60} height={60} />
              <span className="font-bold text-xl uppercase">
                Café Coco
              </span>
            </div>
            <p className="text-cream-200 mb-4 max-w-md">
              Your neighborhood coffee destination, crafting exceptional experiences 
              one cup at a time with locally sourced beans and house-made pastries.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/cocoespressobar"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/cocoespressobar"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/cocoespressobar"
                target="_blank"
                className="text-cream-300 hover:text-cream-100 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-cream-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-cream-200 hover:text-cream-100 transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-cream-200 hover:text-cream-100 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-cream-200 hover:text-cream-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cream-100 mb-4">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cream-300 mt-1 flex-shrink-0" />
                <div className="text-cream-200 text-sm">
                  <p>21-52 44th Dr</p>
                  <p>Long Island City, NY 11101</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-cream-300 mt-1 flex-shrink-0" />
                <div className="text-cream-200 text-sm">
                  <p>Mon-Fri: 6:30 AM - 6:00 PM</p>
                  <p>Weekends: 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-cream-300 text-sm">
          <p>&copy; { date.getFullYear() } Café Coco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}