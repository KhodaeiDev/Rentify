import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function LocationMap({ lat, lng }) {
  const center = [Number(lat), Number(lng)];

  return (
    <MapContainer
      center={center}
      zoom={14}
      className="h-64 w-full rounded-xl"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} />
    </MapContainer>
  );
}
