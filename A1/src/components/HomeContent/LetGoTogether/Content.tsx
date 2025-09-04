import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="px-6 py-3 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition-colors w-fit">
      {children}
    </button>
  );
};

type FeatureItemProps = {
  image: string;
  title: string;
  description: string;
};

const FeatureItem = ({ image, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-3 ">
      <div className="w-15 h-15 flex items-center justify-center  rounded-full overflow-hidden">
        <img src={image} alt={title} className="object-contain" />
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-[#113D48] font-manrope">{title}</h4>
        <p className="text-[#6E7070] font-manrope text-sm">{description}</p>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-[42%] justify-center flex flex-col gap-6 max-w-lg">
      <div>
        <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[30px] ">
          Let’s Go Together
        </h4>
        <h2 className="text-[#113D48] text-[48px] sm:text-[33px] font-bold font-manrope leading-snug">
          Plan Your Trip <br /> With us
        </h2>
        <p className="text-[#6E7070] sm:text-[15px] lg:[text-10px] font-inter mt-3 text-justify">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don’t look even slightly.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-[80%]">
        <FeatureItem
          image="/Background (1).png"
          title="Exclusive Trip"
          description="There are many variations of passages of available but the majority."
        />
        <FeatureItem
          image="/Background (2).png"
          title="Professional Guide"
          description="There are many variations of passages of available but the majority."
        />
      </div>

      {/* Button */}
      <Button>Learn More →</Button>
    </div>
  );
};

export default Content;
