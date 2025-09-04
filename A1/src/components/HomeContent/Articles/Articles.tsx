import { articles } from "../../../data/Articles";

const Articles = () => {
  return (
    <section
      className="bg-[url('/Articles/ArticleBackground.png')]
                   bg-no-repeat bg-cover bg-left-bottom 
                   w-full h-[800px] mt-90 px-50 py-30 space-y-10"
    >
      <div className="flex justify-between items-center">
        <div className="">
          <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[35px] ">
            About Us Restaurant
          </h4>
          <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-5 font-manrope">
            News & Articles From Tourm
          </h2>
        </div>

        <button className="rounded-3xl border border-[#113D48] text-[#113D48] text-[16px] sm:text-[14px] px-5 py-4 font-inter">
          see more articles →
        </button>
      </div>
      <div className="w-full h-[400px] flex gap-x-3">
        {articles.map((article, index) => (
          <div key={index} className="flex-1 h-[90%] ">
            <img
              src={article.image}
              alt=""
              className="w-full  rounded-2xl object-cover"
            />

            <div className="flex gap-x-2 items-center font-inter text-[#6E7070] text-[14px] sm:text-[12px] mt-5">
              <p className="">{article.date}</p>
              <div className="h-4 w-px bg-gray-400" />
              <p className="">3 Min Read</p>
            </div>

            <h1 className="mt-3 font-manrope font-semibold text-[24px] sm:text-[16px] text-[#113D48]">
              {article.title}
            </h1>

            <button className="rounded-3xl mt-5 border border-[#113D48] text-[#113D48] text-[16px] sm:text-[14px] px-5 py-2 font-inter">
              Read now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
