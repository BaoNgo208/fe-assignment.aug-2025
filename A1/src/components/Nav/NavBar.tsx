import HeaderTop from "./HeaderTop";
import MainNav from "./MainNav";

const NavBar = () => {
  return (
    <header className="w-full sticky bg-white top-0 z-50">
      <HeaderTop />
      <MainNav />
    </header>
  );
};

export default NavBar;
