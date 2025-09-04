import { Location } from "./Map";

interface LocationListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  sortedLocations: Location[];
  visibleCount: number;
  setVisibleCount: (fn: (prev: number) => number) => void;
  selected: Location | null;
  setSelected: (loc: Location) => void;
  search: string;
  setSearch: (val: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (val: "asc" | "desc") => void;
}

const LocationList = ({
  open,
  setOpen,
  sortedLocations,
  visibleCount,
  setVisibleCount,
  selected,
  setSelected,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
}: LocationListProps) => {
  if (!open) return null;

  return (
    <div className="absolute top-0 left-0 w-1/3 h-full overflow-y-auto p-4 border-r border-gray-200 bg-white z-[999]">
      <div className="flex items-center gap-x-2 mb-3">
        <input
          type="text"
          placeholder="Tìm theo tên hoặc địa chỉ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded p-1 text-sm"
        />
        <select
          className="border rounded p-1 text-sm"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="desc">Rating cao → thấp</option>
          <option value="asc">Rating thấp → cao</option>
        </select>
        <button
          onClick={() => setOpen(false)}
          className="border rounded px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
        >
          ✕
        </button>
      </div>

      {sortedLocations.slice(0, visibleCount).map((loc) => (
        <div
          key={loc.id}
          className={`p-3 mb-2 rounded cursor-pointer ${
            selected?.id === loc.id ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
          onClick={() => setSelected(loc)}
        >
          <div className="font-semibold">{loc.name}</div>
          <div className="text-sm text-gray-600">{loc.description}</div>
          <div className="text-yellow-500">⭐ {loc.rating}</div>
        </div>
      ))}

      {visibleCount < sortedLocations.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="w-full border rounded p-2 text-sm bg-gray-100 hover:bg-gray-200"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default LocationList;
