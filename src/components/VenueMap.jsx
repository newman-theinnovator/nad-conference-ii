import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const center = {
  lat: 6.334986,
  lng: 5.603746
};

const VenueMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''; // Handle missing key gracefully in dev if needed

  return (
    <section className="py-20 bg-white" id="venue">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h3 className="text-3xl font-bold mb-4 text-secondary">Conference Venue</h3>
        <p className="text-gray-600">CATHELEA CONVENTION AND SUITES, Benin City</p>
      </div>

      <div className="w-full h-[450px] relative bg-gray-200">
        {apiKey ? (
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p className="font-bold mb-2">Google Map</p>
              <p>API Key required to view map.</p>
            </div>
          </div>
        )}

        {/* Directions Overlay Card */}
        <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-2xl max-w-sm hidden md:block border-l-4 border-primary">
          <h4 className="font-bold text-secondary mb-2">Getting Here</h4>
          <p className="text-sm text-gray-600 mb-4">
            Located in the G.R.A, easily accessible from Benin Airport (BNI).
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold text-sm hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;