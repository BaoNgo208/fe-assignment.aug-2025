import { JSX } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
interface TourGuides {
  card: any;
}

const Card: React.FC<TourGuides> = ({ card }) => {
  return (
    <div className="w-[250px]  flex flex-col items-center">
      <div className="w-full flex justify-center items-end relative">
        <div className="w-[140px] h-[140px]">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full rounded-full object-cover border-4 border-white "
          />
        </div>
      </div>

      <div className="w-full  rounded-2xl shadow-md bg-white flex flex-col items-center gap-2 px-4 pt-16 pb-6 -mt-12">
        <div className="w-[90%] mx-auto bg-[#E9F6F9] rounded-xl px-10 py-3 flex flex-col items-center justify-center gap-y-5">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold font-inter font-manrope text-[18px] text-[#0D0D0C]">
              {card.name}
            </h2>
            <p className="text-sm text-[#0D0D0C]">Tourist Guide</p>
          </div>

          <div className="flex gap-1 mt-3 items-center justify-center">
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full border border-[#1CA9C9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
            >
              {FaFacebookF({ size: 12 }) as JSX.Element}
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full border border-[#1CA9C9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
            >
              {FaTwitter({ size: 12 }) as JSX.Element}
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full border border-[#1CA9C9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
            >
              {FaInstagram({ size: 12 }) as JSX.Element}
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full border border-[#1CA9C9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
            >
              {FaYoutube({ size: 12 }) as JSX.Element}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
