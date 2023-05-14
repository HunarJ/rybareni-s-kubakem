import React from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed xl:hidden bottom-0 flex w-full h-[50px] flex-row flex-wrap items-center justify-center  gap-x-12 text-center bg-[#222831] text-gray-300">
      <ul className="flex flex-wrap items-center gap-x-8">
        <li>
          <a href="https://www.youtube.com/@RybarenisKubakem"><FaYoutube size={30} /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/groups/855941878107932"><FaFacebook size={30} /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/rybareniskubakem/"><FaInstagram size={30} /></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
