import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ParkingDetails from "./assets/parkingDetails";

// Locuri de parcare (adică adresele cu coordonatele lor)
const parkingLocations = [
  { 
    id: 1, 
    latitude: 46.7707, 
    longitude: 23.5912, 
    address: "Strada București 57", 
    owner: "Darius Nicolae", 
    photos: ["parking_lots_photos/traffic01.jpg", "parking_lots_photos/traffic02.jpg", "parking_lots_photos/traffic10.jpg"],
    rating: 4.7, 
    hours: "08:00 - 22:00", 
    price: 2 
  }, 
  { 
    id: 2, 
    latitude: 46.7741, 
    longitude: 23.5895, 
    address: "Strada Lalelelor 4-12", 
    owner: "Flaviu Muresanu", 
    photos: ["parking_lots_photos/traffic07.jpg", "parking_lots_photos/traffic05.jpg"],
    rating: 4.5, 
    hours: "06:00 - 20:00", 
    price: 3.5
  },
  { 
    id: 3, 
    latitude: 46.7664, 
    longitude: 23.6082, 
    address: "Strada Augustin Bunea 14", 
    owner: "Diana Macovei", 
    photos: ["parking_lots_photos/traffic08.jpg", "parking_lots_photos/traffic03.jpg", "parking_lots_photos/traffic04.jpg"],
    rating: 4.8, 
    hours: "00:00 - 24:00", 
    price: 3 
  },
  { 
    id: 4, 
    latitude: 46.7720, 
    longitude: 23.6200, 
    address: "Strada Augustin Bunea 1", 
    owner: "Maria Pintilia", 
    photos: ["parking_lots_photos/traffic06.jpg", "parking_lots_photos/traffic02.jpg", "parking_lots_photos/traffic07.jpg"],
    rating: 4.3, 
    hours: "07:00 - 19:00", 
    price: 4
  },
  { 
    id: 5, 
    latitude: 46.7755, 
    longitude: 23.6170, 
    address: "Strada Cezar Baltag 20", 
    owner: "Cirt Marius", 
    photos: ["parking_lots_photos/traffic09.jpg", "parking_lots_photos/traffic05.jpg", "parking_lots_photos/traffic10.jpg"],
    rating: 4.6, 
    hours: "05:00 - 23:00", 
    price: 3 
  },
];

const MapElement = () => {
  const [location, setLocation] = useState(null);
  const [selectedParking, setSelectedParking] = useState(null);
  const [isMapPressed, setIsMapPressed] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        () => {
          setLocation({ latitude: 46.7719, longitude: 23.6236 }); // Default to Cluj-Napoca if geolocation fails
        }
      );
    } else {
      setLocation({ latitude: 46.7719, longitude: 23.6236 }); // Default to Cluj-Napoca if geolocation is not supported
    }
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  const generateLocation = (lat, log) => {
    return [lat + Math.floor(Math.random() * 6) / 10000, log + Math.floor(Math.random() * 6) / 10000];
  }

  const handleParkingClick = (parking) => {
    setSelectedParking(parking);
    setIsMapPressed(false); // Deschide detaliile parcării
  };

  const handleMapClick = (e) => {
    // // Verificăm dacă clicul este în jumătatea superioară a ecranului
    // const screenHeight = window.innerHeight;
    // if (e.clientY < screenHeight / 2) {
    //   setIsMapPressed(true); // Închide meniul
    // }
  };

  return (
    <div className="flex-1 w-full flex flex-col relative z-1" onClick={handleMapClick}>
      <MapContainer
        key={location ? `${location.latitude}-${location.longitude}` : "loading"}
        center={[location.latitude, location.longitude]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {parkingLocations.map((parking) => (
          <Circle
            key={parking.id}
            center={generateLocation(parking.latitude, parking.longitude)}
            radius={150}
            color="blue"
            eventHandlers={{
              click: () => handleParkingClick(parking), // Când se face clic pe parcare, deschide detaliile
            }}
            fillOpacity={0.3}
          />
        ))}
      </MapContainer>

      {/* Afișează detaliile doar dacă meniul nu este închis */}
      {selectedParking && <ParkingDetails parking={selectedParking} />}
    </div>
  );
};

export default MapElement;
