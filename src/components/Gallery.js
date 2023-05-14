import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import Catches1 from "../assets/gallery/img-1.jpeg";
import Catches2 from "../assets/gallery/img-2.jpeg";
import Catches3 from "../assets/gallery/img-3.jpeg";
import Catches4 from "../assets/gallery/img-4.jpeg";
import Catches5 from "../assets/gallery/img-5.jpeg";
import Catches6 from "../assets/gallery/img-6.jpeg";
import Catches7 from "../assets/gallery/img-7.jpeg";
import Catches8 from "../assets/gallery/img-8.jpeg";
import Catches9 from "../assets/gallery/img-9.jpeg";
import Catches10 from "../assets/gallery/img-10.jpeg";
import Catches11 from "../assets/gallery/img-11.jpeg";
import Catches12 from "../assets/gallery/img-12.jpeg";
import Catches13 from "../assets/gallery/img-13.jpeg";
import Catches14 from "../assets/gallery/img-14.jpeg";
import Catches15 from "../assets/gallery/img-15.jpeg";
import Catches16 from "../assets/gallery/img-16.jpeg";
import Catches17 from "../assets/gallery/img-17.jpeg";
import Catches18 from "../assets/gallery/img-18.jpeg";
import Catches19 from "../assets/gallery/img-19.jpeg";
import Catches20 from "../assets/gallery/img-20.jpeg";

const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }

  return (
    <div name="catches" className="w-full bg-[#393E46] text-gray-300 py-[120px]">
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
          <div
            className="max-h-[150px] lg:max-h-[250px] shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(0)}
          >
            <img className="h-full mx-auto" src={Catches1} />
          </div>
          <div
            className="max-h-[150px] lg:max-h-[250px] shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(1)}
          >
            <img className="h-full mx-auto" src={Catches2} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(2)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches3} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(3)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches4} />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(4)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches5} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(5)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches6} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(6)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches7} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(7)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches8} />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(8)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches9} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(9)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches10} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(10)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches11} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(11)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches12} />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(12)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches13} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(13)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches14} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(14)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches15} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(15)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches16} />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(16)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches17} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(17)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches18} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(18)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches19} />
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            onClick={() => openLightboxOnSource(19)}
          >
            <img className="max-h-[250px] mx-auto" src={Catches20} />
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        thumbs={[
          null,
          Catches1,
          Catches2,
          Catches3,
          Catches4,
          Catches5,
          Catches6,
          Catches7,
          Catches8,
          Catches9,
          Catches10,
          Catches11,
          Catches12,
          Catches13,
          Catches14,
          Catches15,
          Catches16,
          Catches17,
          Catches18,
          Catches19,
          Catches20,
        ]}
        sources={[
          Catches1,
          Catches2,
          Catches3,
          Catches4,
          Catches5,
          Catches6,
          Catches7,
          Catches8,
          Catches9,
          Catches10,
          Catches11,
          Catches12,
          Catches13,
          Catches14,
          Catches15,
          Catches16,
          Catches17,
          Catches18,
          Catches19,
          Catches20,
        ]}
      />
    </div>
  );
};

export default Gallery;
