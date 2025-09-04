import { galleries } from "../../../data/Gallery";

const Gallery = () => {
  return (
    <div className="grid grid-cols-5 gap-4 h-[400px]">
      {/* Cột 1: 1 ảnh giữa */}
      <div className="flex items-center">
        <img
          src={galleries[0]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
      </div>

      {/* Cột 2: 2 ảnh */}
      <div className="flex flex-col gap-4">
        <img
          src={galleries[1]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
        <img
          src={galleries[2]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
      </div>

      {/* Cột 3: 1 ảnh full chiều cao */}
      <div>
        <img
          src={galleries[3]}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Cột 4: 2 ảnh */}
      <div className="flex flex-col gap-4">
        <img
          src={galleries[4]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
        <img
          src={galleries[5]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
      </div>

      {/* Cột 5: 1 ảnh giữa */}
      <div className="flex items-center">
        <img
          src={galleries[6]}
          className="w-full h-[180px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Gallery;
