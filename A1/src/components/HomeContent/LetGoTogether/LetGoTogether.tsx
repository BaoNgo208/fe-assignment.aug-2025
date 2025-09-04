import Content from "./Content";
import ImageGroup from "./ImageGroup";
import TravelerImage from "./TravelerImage";

const LetGoTogether = () => {
  return (
    <section className="w-[85%] mx-auto px-6 md:px-16 relative bg-white flex flex-col md:flex-row items-center  gap-10">
      <ImageGroup />
      <Content />
      <TravelerImage />
    </section>
  );
};

export default LetGoTogether;
