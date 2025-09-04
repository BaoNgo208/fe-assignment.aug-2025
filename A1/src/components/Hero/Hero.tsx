import bg from "../../assets/Background.png";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-start z-0"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-left pl-[300px] text-white px-4">
        <p className="font-montez text-[40px]  italic mb-3">
          Get unforgettable pleasure with us
        </p>
        <h1 className="text-[80px] md:text-6xl font-bold leading-tight mb-6 font-manrope">
          <span className="block">Explore beauty of</span>
          <span className="block">the whole world</span>
        </h1>

        <div className="flex items-center justify-start font-inter gap-4">
          <button className="bg-[#1CA8CB] hover:bg-cyan-600 text-white py-3 px-6 rounded-full transition flex items-center gap-2">
            <span>Explore Tours</span>
            <img src={arrow} alt="arrow" className="w-5 h-5" />
          </button>

          <button className="border border-white hover:bg-white hover:text-black py-3 px-6 rounded-full transition flex items-center gap-2">
            <span>Our Services</span>
            <img src={arrow} alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
