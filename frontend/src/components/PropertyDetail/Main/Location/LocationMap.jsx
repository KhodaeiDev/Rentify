import { latLng } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function LocationMap() {
  return (
    <MapContainer
      center={[latLng]}
      zoom={14}
      className="h-64 w-full rounded-xl"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      >
        <Marker position={[latLng]} />
      </TileLayer>
    </MapContainer>
  );
}
