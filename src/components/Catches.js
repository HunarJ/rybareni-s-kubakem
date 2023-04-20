import React, { useState } from "react";


import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

import Catches1 from "../assets/carousel/carousel1.jpeg";
import Catches2 from "../assets/carousel/carousel2.jpeg";
import Catches3 from "../assets/carousel/carousel3.jpeg";
import Catches4 from "../assets/carousel/carousel4.jpeg";
import Catches5 from "../assets/carousel/carousel5.jpeg";

const Catches = () => {
    

  return (
    <div name="catches" className="w-full h-screen bg-[#393E46] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD369] ">
            Galerie úlovků
          </p>
          <p className="py-4">
            // Toto jsou moje kapitální úlovky, na které rád vzpomínám
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href={Catches1} data-lightbox="mygallery">
            <img className="h-full mx-auto" src={Catches1} alt="Carpangler" />
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-full mx-auto" src={Catches2} alt="HTML icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-full mx-auto" src={Catches3} alt="HTML icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-full mx-auto" src={Catches4} alt="HTML icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catches;
