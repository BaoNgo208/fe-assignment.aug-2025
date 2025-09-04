import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import * as L from "leaflet";

export interface Location {
  id: string;
  name: string;
  description: string;
  rating: number;
  location: { lat: number; lng: number };
}

interface MapProps {
  sortedLocations: Location[];
  visibleCount: number;
  selected: Location | null;
  setSelected: (loc: Location) => void;
}

function FlyToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.flyTo([lat, lng], 15, { duration: 1.5 });
  return null;
}

const Map = ({
  sortedLocations,
  visibleCount,
  selected,
  setSelected,
}: MapProps) => {
  return (
    <MapContainer
      center={[16.047079, 108.20623]}
      zoom={14}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
      />
      {sortedLocations.slice(0, visibleCount).map((loc) => {
        const isSelected = selected?.id === loc.id;
        return (
          <Marker
            key={loc.id}
            position={[loc.location.lat, loc.location.lng]}
            icon={L.icon({
              iconUrl: isSelected
                ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
                : "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
              shadowUrl:
                "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
            eventHandlers={{
              click: () => setSelected(loc),
            }}
          >
            {isSelected && (
              <Popup autoClose={true} closeOnClick={true}>
                <b>{loc.name}</b>
                <p>{loc.description}</p>
                <br />⭐ {loc.rating}
              </Popup>
            )}
          </Marker>
        );
      })}

      {selected && (
        <FlyToLocation
          lat={selected.location.lat}
          lng={selected.location.lng}
        />
      )}
    </MapContainer>
  );
};

export default Map;
