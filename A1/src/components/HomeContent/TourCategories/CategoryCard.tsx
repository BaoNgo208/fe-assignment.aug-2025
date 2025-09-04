interface CategoryCardProps {
  image: string;
  title: string;
  rotateClass?: string; // nhận thêm
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  rotateClass,
}) => {
  return (
    <div className="h-full w-[200px] overflow-hidden flex-shrink-0 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
      <h3
        className={`mt-2 text-[#113D48] text-[24px] sm:text-[15px] font-semibold font-manrope ${rotateClass}`}
      >
        {title}
      </h3>
      <p className={`text-sm text-gray-500 ${rotateClass}`}>See More</p>
    </div>
  );
};

export default CategoryCard;
