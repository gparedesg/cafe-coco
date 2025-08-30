'use client'

import { Map, Marker } from '@vis.gl/react-google-maps'

const CAFE_LOCATION = {
  lat: 40.74752125618898, // Exact coordinates from Google Maps
  lng: -73.94551427976226
}

interface CafeMapProps {
  className?: string
}

export default function CafeMap({ className }: CafeMapProps) {
  return (
    <div className={className}>
      <Map
        defaultCenter={CAFE_LOCATION}
        defaultZoom={16}
        gestureHandling="cooperative"
        disableDefaultUI={false}
        style={{ width: '100%', height: '100%' }}
        mapId="cafe-coco-map"
      >
        <Marker
          position={CAFE_LOCATION}
          title="Café Coco"
        />
      </Map>
    </div>
  )
}