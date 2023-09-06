import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hadleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-gray-300">
      <div>
        <p className="font-bold hover:text-[#FFD369]">
          <Link to="home" smooth={true} duration={500}>
            RYBAŘENÍ S KUBÁKEM
          </Link>
        </p>
        {/* <img src={Logo} alt="Logo image" style={{ width: "50px" }} /> */}
      </div>

      {/* {menu} */}

      <ul className="hidden md:flex">
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="home" smooth={true} duration={500}>
            Domů
          </Link>
        </li>
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="about" smooth={true} duration={500} offset={-125}>
            O mně
          </Link>
        </li>
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="work" smooth={true} duration={500} offset={-125}>
            Nabízím
          </Link>
        </li>
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="youtube" smooth={true} duration={500} offset={-125}>
            YouTube
          </Link>
        </li>
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            Kontakt
          </Link>
        </li>
        <li className="border-b-4 border-[#222831] hover:border-b-4 hover:border-[#FFD369] font-bold">
          <Link to="catches" smooth={true} duration={500}>
            Úlovky
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={hadleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#222831] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={hadleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-125}
          >
            Domů
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={hadleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-125}
          >
            O mně
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={hadleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-125}
          >
            Nabízím
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={hadleClick}
            to="youtube"
            smooth={true}
            duration={500}
            offset={-125}
          >
            YouTube
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={hadleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-125}
          >
            Kontakt
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={hadleClick} to="catches" smooth={true} duration={500}>
            Úlovky
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/groups/855941878107932"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/rybareniskubakem/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/@RybarenisKubakem"
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-125}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-125}
              className="flex justify-between items-center w-full text-gray-300"
            >
              O mně <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
