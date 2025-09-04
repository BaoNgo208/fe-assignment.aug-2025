import logo from "../../assets/logo.png";
import bgWave from "../../assets/Mask Group.png";

const MainNav = () => {
  const menuItems = [
    { name: "Home", dropdown: ["Submenu 1", "Submenu 2"] },
    { name: "About Us" },
    { name: "Destinations", dropdown: ["Europe", "Asia"] },
    { name: "Services" },
    { name: "Trip", dropdown: ["Adventure", "Luxury"] },
    { name: "Pages", dropdown: ["About", "Contact"] },
    { name: "Blog", dropdown: ["Latest", "Categories"] },
    { name: "Contact Us" },
  ];

  return (
    <div className="w-full h-[92px] flex items-center ">
      <div
        className="h-full w-[364px] flex items-center px-[72px] sm:px-[32px]"
        style={{ backgroundImage: `url(${bgWave})` }}
      >
        <img src={logo} alt="logo" className="relative z-10 h-[40px]" />
      </div>

      <div className="max-w-7xl ">
        <div className="flex h-full justify-center items-center  gap-[46px] sm:gap-8 text-[16px] font-inter sm:text-sm">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="relative group">
                <button className="flex items-center justify-center  space-x-1 hover:text-blue-500">
                  <span>{item.name}</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 w-40 rounded-lg">
                  {item.dropdown.map((subItem, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={index} href="#" className="hover:text-blue-500">
                {item.name}
              </a>
            )
          )}
        </div>
      </div>

      <div className="h-full flex items-center ml-auto px-[72px] sm:px-[32px]">
        <button className="font-inter text-white text-sm  p-7 sm:p-4 rounded-3xl bg-[#113D48]">
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default MainNav;
