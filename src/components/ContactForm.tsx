'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Sorry, there was an error sending your message. Please try again or email us directly at hello@cafe-coco.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-serif font-semibold text-coffee-800 mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-coffee-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-coffee-700 focus:ring-4 focus:ring-coffee-300 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}