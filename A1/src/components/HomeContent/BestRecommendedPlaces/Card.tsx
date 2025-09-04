interface RecommededDestinations {
  card: any;
}

const Card: React.FC<RecommededDestinations> = ({ card }) => {
  return (
    <div className="w-[250px] h-[360px] rounded-2xl overflow-hidden shadow-md bg-white">
      <div className="h-[55%]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h2 className="font-medium font-manrope text-[18px] sm:text-[14px] text-[#0D0D0C]">
          {card.title}
        </h2>

        <p className="font-inter text-[16px] sm:text-[13px] text-[#6E7070] flex items-center gap-0">
          <img src="/address.png" className="w-3 h-3" />
          {card.address}
        </p>

        <p className="text-lg font-medium font-inter text-[#0D0D0C]">
          ${card.price}
          <span className="text-sm  text-[#6E7070] font-inter">/Person</span>
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex justify-center items-center gap-x-2">
            <img src="/duration.png" className="w-3 h-3 object-cover" />
            <span className="font-inter text-[16px] sm:text-[13px] text-[#113D48] ">
              {card.duration} Days
            </span>
          </div>

          <button className="px-3 py-2 rounded-2xl border border-gray-300 text-[16px] sm:text-[13px] hover:bg-gray-100 transition font-inter font-medium text-[#113D48]">
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
