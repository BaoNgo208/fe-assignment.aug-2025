interface PopularDestinationCardProps {
  image: string;
  title: string;
}

const PopularDestinationCard: React.FC<PopularDestinationCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="relative h-[380px] w-[260px] rounded-2xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="flex justify-between absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="">
          <h3 className="text-white font-semibold text-[24px] sm:text-[16px] font-manrope">
            {title}
          </h3>
          <p className="text-gray-200 text-[16px] sm:text-[13px] font-inter">
            22 Listing
          </p>
        </div>

        <button className="mt-2  text-white border border-white  px-6 py-1 rounded-2xl text-[16px] sm:text-[13px] hover:bg-white">
          View All →
        </button>
      </div>
    </div>
  );
};

export default PopularDestinationCard;
