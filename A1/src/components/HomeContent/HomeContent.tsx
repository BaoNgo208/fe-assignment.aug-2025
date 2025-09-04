import TourCategories from "./TourCategories/TourCategories";
import SearchBar from "./TourCategories/SearchBar";
import TopDestination from "./TopDestination/TopDestination";
import LetGoTogether from "./LetGoTogether/LetGoTogether";
import BestRecommededPlaces from "./BestRecommendedPlaces/BestRecommededPlaces";
import RecentGallery from "./RecentGallery/RecentGallery";
import TourGuide from "./TourGuide/TourGuide";
import Testimonial from "./Testimonial/Testimonial";
import Articles from "./Articles/Articles";

const HomeContent = () => {
  return (
    <div>
      <SearchBar />
      <TourCategories />
      <TopDestination />
      <LetGoTogether />
      <BestRecommededPlaces />
      <RecentGallery />
      <TourGuide />
      <Testimonial />
      <Articles />
    </div>
  );
};

export default HomeContent;
