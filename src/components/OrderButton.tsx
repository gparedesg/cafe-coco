'use client'

import { gtagReportConversion } from '@/lib/gtag'

interface OrderButtonProps {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function OrderButton({ 
  text = "Order Online", 
  size = 'md',
  className = ''
}: OrderButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-coffee-300 bg-coffee-600 hover:bg-coffee-700 text-white"
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const handleClick = () => {
    // Track the conversion first
    gtagReportConversion()
    
    // Then open the Toast POS link
    window.open('https://order.toasttab.com/online/cafe-coco', '_blank', 'noopener,noreferrer')
  }

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      aria-label="Order online through Toast POS"
    >
      {text}
    </button>
  )
}