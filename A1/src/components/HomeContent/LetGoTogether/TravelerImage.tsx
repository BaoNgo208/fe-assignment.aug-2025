const TravelerImage = () => {
  return (
    <div className="absolute -right-20 bottom-[-50px] ">
      {/* background circle */}
      <div className="w-[280px] h-[280px] rounded-full bg-[#E9F6F9] flex items-center justify-center">
        <img
          src="/about-slide-img.png.png"
          alt="Traveler with luggage"
          className="w-[180px] h-[450px] object-contain relative -bottom-10"
        />
      </div>
    </div>
  );
};

export default TravelerImage;
