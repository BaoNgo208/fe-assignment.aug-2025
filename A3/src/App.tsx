import { useState, useRef, useEffect } from "react";
import locationsData from "../location.json";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import { Location } from "./components/Map";
import LocationList from "./components/LocationList";

const locations: Location[] = locationsData;

export default function LocationListWithMap() {
  const [selected, setSelected] = useState<Location | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState("");
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [open, setOpen] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (open && selected && itemRefs.current[selected.id]) {
      itemRefs.current[selected.id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selected, open]);

  function normalizeString(str: string) {
    return str
      .normalize("NFD") // tách dấu ra
      .replace(/[\u0300-\u036f]/g, "") // bỏ hết dấu
      .replace(/đ/g, "d") // thay đ -> d
      .replace(/Đ/g, "d") // thay Đ -> d
      .toLowerCase();
  }

  const filteredLocations = locations.filter(
    (loc) =>
      normalizeString(loc.name).includes(normalizeString(search)) ||
      normalizeString(loc.description).includes(normalizeString(search))
  );
  const sortedLocations = [...filteredLocations].sort((a, b) =>
    sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    <div className="relative h-screen">
      <Map
        sortedLocations={sortedLocations}
        visibleCount={visibleCount}
        selected={selected}
        setSelected={setSelected}
      />

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-[1000] 
               bg-white shadow-lg rounded-full p-3 border 
               hover:bg-gray-100 transition"
          title="Mở danh sách"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      <LocationList
        open={open}
        setOpen={setOpen}
        sortedLocations={sortedLocations}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        selected={selected}
        setSelected={setSelected}
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  );
}
