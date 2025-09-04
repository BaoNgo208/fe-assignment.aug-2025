import Gallery from "./Gallery";

const data = [
  { number: "12", label: "Years Experience", dotPosition: "top" },
  { number: "97%", label: "Retention Rate", dotPosition: "right" },
  { number: "8k", label: "Tour Completed", dotPosition: "top" },
  { number: "19k", label: "Happy Travellers", dotPosition: "right" },
];

const RecentGallery = () => {
  return (
    <section className="w-[80%] mx-auto h-[500px] mt-80 space-y-0">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[35px] ">
          Make Your Tour More Pleasure
        </h4>
        <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-5 font-manrope">
          Recent Gallery
        </h2>
      </div>

      <Gallery />
      <div className="w-full mx-auto flex justify-center gap-10 mt-40">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex items-center justify-center w-60 h-60  rounded-full border-2 border-sky-200 
          ${idx % 2 === 0 ? "translate-y-8" : "-translate-y-8"} ${
              item.dotPosition === "top" && "mt-15"
            }`}
          >
            {/* vòng tròn trong */}
            <div className="flex flex-col items-center justify-center w-52 gap-y-3 h-52 rounded-full bg-[#E9F6F9] shadow-md">
              <span className="sm:text-3xl text-[48px] font-bold font-manrope">
                {item.number}
              </span>
              <span className="sm:text-sm text-[24px] font-medium text-[#0D0D0C] text-center px-2 font-manrope">
                {item.label}
              </span>
            </div>

            {item.dotPosition === "top" && (
              <span className="absolute top-42 left-1/2 translate-x-23 flex items-center justify-center z-0">
                {/* Outer Circle */}
                <span className="w-5 h-5 bg-[#1CA8CB]/20 rounded-full flex items-center justify-center">
                  {/* Inner Circle */}
                  <span className="w-2 h-2 bg-[#1CA8CB] rounded-full z-20"></span>
                </span>
              </span>
            )}

            {item.dotPosition === "right" && (
              <span className="absolute top-1/2 right-7 -translate-y-25 flex items-center justify-center z-0">
                {/* Outer Circle */}
                <span className="w-5 h-5 bg-[#1CA8CB]/20 rounded-full flex items-center justify-center z-0">
                  {/* Inner Circle */}
                  <span className="w-2 h-2 bg-sky-400 rounded-full z-20"></span>
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentGallery;
