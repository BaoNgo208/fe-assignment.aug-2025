import mapIcon from "../../../assets/Vector2.png";
import bike from "../../../assets/bike.png";
import clock from "../../../assets/clock.png";
import dollar from "../../../assets/dollar.png";

const SearchBar = () => {
  return (
    <form
      className="flex items-center w-[68.75%] mx-auto h-[110px] sm:h-[70px] 
                   rounded-xl bg-white relative px-6 sm:px-4 z-5 -mt-10 font-inter
                   border border-[#1CA8CB]"
    >
      <div className="px-2 flex flex-1 items-center gap-x-2">
        <img src={mapIcon} className="w-4 h-4 object-contain" alt="map icon" />
        <label className="text-[16px] sm:text-[12px] block  text-gray-500">
          Destination
        </label>
        <svg
          className="w-3 h-3 ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="h-4 w-px bg-gray-200" />

      <div className="px-2 flex flex-1 items-center gap-x-2">
        <img src={bike} className="w-4 h-4 object-contain" alt="map icon" />
        <label className="text-[16px] sm:text-[12px] block text-gray-500">
          Activity
        </label>
        <svg
          className="w-3 h-3 ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="h-4 w-px bg-gray-200" />

      <div className="px-2 flex flex-1 items-center gap-x-2">
        <img src={clock} className="w-4 h-4 object-contain" alt="map icon" />
        <label className="text-[16px] sm:text-[12px] block text-gray-500">
          0 Days - 6 Days
        </label>
        <svg
          className="w-3 h-3 ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="h-4 w-px bg-gray-200" />

      <div className="px-2 flex flex-1 items-center gap-x-2">
        <img src={dollar} className="w-4 h-4 object-contain" alt="map icon" />
        <label className="text-[16px] sm:text-[12px] block text-gray-500">
          $200 - $580
        </label>
        <svg
          className="w-3 h-3 ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="h-4 w-px bg-gray-200" />

      <div className="flex flex-1 justify-center ">
        {/* Search Button */}
        <button
          type="submit"
          className="bg-[#1CA8CB] w-[70%]  text-white px-6 py-3 rounded-3xl ml-4 font-medium text-[16px] sm:text-[11px]"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
