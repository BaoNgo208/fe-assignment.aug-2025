import { JSX } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="w-full px-25 py-20 space-y-20">
        <div className="w-full flex justify-between font-manrope text-[#113D48] text-[40px] sm:text-[28px]">
          <h1 className="w-[40%]">Get Updated The Latest Newsletter</h1>
          <div className="flex items-center gap-x-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-[320px] h-[45px] px-7 py-4 border border-gray-400 rounded-full focus:outline-none font-inter text-[14px] sm:text-[12px]"
            />

            <button className="font-inter text-white text-sm flex items-center gap-x-1 px-7 py-4  text-[13px] rounded-3xl bg-[#113D48]">
              Subscribe Now
              <img src="/subcribe.png" className="w-5 h-5"></img>
            </button>
          </div>
        </div>

        <div className="w-full flex">
          <div className="flex-1 ">
            <img src="/logo.svg.png" alt="Logo" className="object-contain " />

            <p className="text-[#666666] text-[15px] w-[100%]  mt-7">
              Rapidiously myocardinate cross-platform intellectual capital
              model. Appropriately create interactive infrastructures
            </p>

            <div className="flex gap-2 mt-5">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9F6F9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
              >
                {FaFacebookF({ size: 14 }) as JSX.Element}
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9F6F9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
              >
                {FaTwitter({ size: 14 }) as JSX.Element}
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9F6F9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
              >
                {FaLinkedinIn({ size: 14 }) as JSX.Element}
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9F6F9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
              >
                {FaWhatsapp({ size: 14 }) as JSX.Element}
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9F6F9] text-[#1CA9C9] hover:bg-[#1CA9C9] hover:text-white transition"
              >
                {FaInstagram({ size: 14 }) as JSX.Element}
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-[#113D48] font-manrope font-semibold text-[24px] sm:text-[20px] mb-4">
              Quick Links
            </h1>
            <ul className="space-y-5 text-[14px]">
              <li className="flex items-center gap-2 text-gray-600 hover:text-[#1CA9C9] cursor-pointer ">
                {FaChevronRight({ size: 12 }) as JSX.Element}
                <a href="#" className="text-[#888C97] font-inter">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-[#1CA9C9] cursor-pointer">
                {FaChevronRight({ size: 12 }) as JSX.Element}

                <a href="#" className="text-[#888C97] font-inter">
                  About Us
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-[#1CA9C9] cursor-pointer">
                {FaChevronRight({ size: 12 }) as JSX.Element}

                <a href="#" className="text-[#888C97] font-inter">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-[#1CA9C9] cursor-pointer">
                {FaChevronRight({ size: 12 }) as JSX.Element}

                <a href="#" className="text-[#888C97] font-inter">
                  Tour Guide
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-[#1CA9C9] cursor-pointer">
                {FaChevronRight({ size: 12 }) as JSX.Element}

                <a href="#" className="text-[#888C97] font-inter">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-[#113D48] font-manrope font-semibold text-[24px] sm:text-[20px] mb-4">
              Get In Touch
            </h1>

            <ul className="space-y-4 text-[14px] w-[90%]">
              <li className="flex items-start gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#E6F8FB] flex items-center justify-center text-[#1CA9C9]">
                  {FaPhoneAlt({ size: 14 }) as JSX.Element}
                </div>
                <div className="flex flex-col ">
                  <span>+01 234 567 890</span>
                  <span>+09 999 999 999</span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-[#6E7070] font-inter">
                <div className="w-10 h-10 rounded-full bg-[#E6F8FB] flex items-center justify-center text-[#1CA9C9]">
                  {MdEmail({ size: 14 }) as JSX.Element}
                </div>
                <div className="flex flex-col">
                  <span>mailinfo00@tours.com</span>
                  <span>support24@tours.com</span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#E6F8FB] flex items-center justify-center text-[#1CA9C9]">
                  {FaMapMarkerAlt({ size: 14 }) as JSX.Element}
                </div>
                <span>789 Inner Lane, Holy park, California, USA</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 ">
            <h1 className="text-[#113D48] font-manrope font-semibold text-[24px] sm:text-[20px] mb-4">
              Instagram Post
            </h1>

            <div className="grid grid-cols-3 gap-y-3  ">
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_1.jpg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_2.jpg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_3.jpg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_4.jpg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_5.jpg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="w-[80px] h-[80px] bg-[url('/instagram_posts/gallery_1_6.jpg.png')] bg-cover bg-center rounded-lg"></div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-[70px] bg-[url('/footer/FooterBottomBackground.png')] bg-[-320px_center] flex items-center ">
        <p className="text-white text-sm px-25">
          © 2025 YourCompany. All rights reserved.
        </p>

        <p className="text-white text-sm  ml-125">We accept</p>
        <img src="/footer/cards.png.png" alt="" className="ml-5" />
      </div>
    </div>
  );
};

export default Footer;
