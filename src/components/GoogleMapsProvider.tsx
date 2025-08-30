'use client'

import { APIProvider } from '@vis.gl/react-google-maps'

interface GoogleMapsProviderProps {
  children: React.ReactNode
}

export default function GoogleMapsProvider({ children }: GoogleMapsProviderProps) {
  const apiKey = "AIzaSyAAHyfyzrT8dpnjYqc2waFullvbcKK_9b0"

  if (!apiKey) {
    console.error('Google Maps API key is missing')
    return <div>Map unavailable</div>
  }

  return (
    <APIProvider apiKey={apiKey}>
      {children}
    </APIProvider>
  )
}