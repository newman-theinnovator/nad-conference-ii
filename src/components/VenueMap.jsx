import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const center = {
  lat: 6.298288,
  lng: 5.609797
};

const VenueMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [infoOpen, setInfoOpen] = useState(true); // Set to true for auto-open; false for on-click only

  const handleMarkerClick = () => {
    setInfoOpen(true);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
  };

  return (
    <section className="py-20 bg-white" id="venue">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-secondary">Conference Venue</h2>
        <p className="text-gray-600">CATHELEA CONVENTION AND SUITES, Benin City</p>
      </div>

      <div className="w-full h-[450px] relative bg-gray-200">
        {apiKey ? (
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
              <Marker
                position={center}
                title="Cathelea Convention and Suites"  // Simple hover tooltip
                onClick={handleMarkerClick}  // Opens InfoWindow on click
              />
              {infoOpen && (
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoClose}
                >
                  <div className="p-2">
                    <h3 className="font-bold text-secondary">Cathelea Convention and Suites</h3>
                    <p className="text-sm text-gray-600">2 Aiyanyo Omoigui Street, off 2nd Ugbor Road, GRA, Benin City, Edo State</p>
                    <a
                      href="https://maps.app.goo.gl/KnyRZ3FA7V7TvKpk6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-sm hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </InfoWindow>
              )}
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
          <h3 className="font-bold text-secondary mb-2">Getting Here</h3>
          <p className="text-sm text-gray-600 mb-4">
            Located in the G.R.A, easily accessible from Benin Airport (BNI).
          </p>
          <a
            href="https://maps.app.goo.gl/KnyRZ3FA7V7TvKpk6"
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