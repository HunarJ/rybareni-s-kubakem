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
import Catches21 from "../assets/gallery/img-21.jpeg";
import Catches22 from "../assets/gallery/img-22.jpeg";
import Catches23 from "../assets/gallery/img-23.jpeg";
import Catches24 from "../assets/gallery/img-24.jpeg";
import Catches25 from "../assets/gallery/img-25.jpeg";
import Catches26 from "../assets/gallery/img-26.jpeg";
import Catches27 from "../assets/gallery/img-27.jpeg";
import Catches28 from "../assets/gallery/img-28.jpeg";

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

  const images = [
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
    Catches21,
    Catches22,
    Catches23,
    Catches24,
    Catches25,
    Catches26,
    Catches27,
    Catches28,
  ]

  images.reverse();

  return (
    <div name="catches" className="w-full bg-[#393E46] text-gray-300 py-[120px]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD369] ">
            Galerie úlovků
          </p>
          <p className="py-4">
            // Toto jsou moje kapitální úlovky, na které rád vzpomínám
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="max-h-[150px] lg:max-h-[250px] shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
              onClick={() => openLightboxOnSource(index)}
            >
              <img
                className="h-full mx-auto"
                src={imgSrc}
                alt={`Catch ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        thumbs={[
          null,
          ...images
        ]}
        sources={images}
      />
    </div>
  );
};

export default Gallery;
