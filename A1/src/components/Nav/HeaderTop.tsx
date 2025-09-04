import clockIcon from "../../assets/Icon.png";
import mapIcon from "../../assets/Vector.png";

const HeaderTop = () => {
  return (
    <div className="w-full h-[47px] flex justify-between px-[72px] py-[9.5px] sm:px-[32px]  border-y-1 border-gray-200">
      <div className="flex items-center gap-[46px] sm:gap-[12px] text-sm font-semibold ">
        <div className="flex items-center gap-2 h-[17px]">
          <img src={mapIcon}></img>
          <span className="font-inter">45 New Eskaton Road, Austria</span>
        </div>

        <div className="h-4 w-px bg-gray-400" />

        <div className="flex items-center gap-2 h-[17px]">
          <img src={clockIcon}></img>
          <span className="font-inter">
            Sun to Friday: 8.00 am - 7.00 pm, Austria
          </span>
        </div>
      </div>

      <div className="flex text-sm font-inter gap-6 items-center ">
        <button className="flex items-center  h-[34px] border  border-gray-300 rounded-2xl p-3 text-sm hover:bg-gray-100">
          <span className="">Language</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-black"
            viewBox="0 0 20 20"
          >
            <path d="M5 7l5 6 5-6H5z" />
          </svg>
        </button>
        <span className="font-semibold">Faq</span>
        <div className="h-4 w-px bg-gray-400" />

        <span className="font-semibold">Support</span>
        <div className="h-4 w-px bg-gray-400" />

        <span className="font-semibold">Sign in/ Register</span>
      </div>
    </div>
  );
};

export default HeaderTop;
