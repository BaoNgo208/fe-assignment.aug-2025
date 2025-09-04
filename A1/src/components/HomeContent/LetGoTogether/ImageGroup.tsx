const ImageGroup = () => {
  return (
    <div className=" flex flex-row gap-4 items-center justify-center">
      <div className="h-[26rem] overflow-hidden">
        <img
          src="/about_1_1.jpg.png"
          alt="Trip 1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className=" h-[13rem] overflow-hidden">
          <img
            src="/about_1_2.jpg.png"
            alt="Trip 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[13rem] overflow-hidden">
          <img
            src="/about_1_3.jpg.png"
            alt="Trip 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGroup;
