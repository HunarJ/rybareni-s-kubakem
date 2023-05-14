import React from "react";
import OfferImg from "../assets/gallery/img-16.jpeg";
import CardImg1 from "../assets/main/image3.jpeg";
import CardImg2 from "../assets/main/image11.jpeg";
import CardImg3 from "../assets/main/image13.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full 2xl:flex flex-col justify-center bg-[#393E46] text-gray-300 px-10 ">
      <div className="flex flex-col justify-center items-center w-full my-40">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FFD369]">
              Nabízím
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="hidden md:flex justify-end px-5">
            <img
              src={OfferImg}
              alt=""
              className="border rounded-full border-none h-56"
            />
          </div>
          <div className="flex flex-col justify-center px-5 2xl:text-lg">
            <p>
              Kromě rybaření online prostřednictvím mé kamery a kanálu Youtube
              Rybaření s Kubákem, nabízím také osobní doprovod po
              východočeských revírech, typování míst k rybaření, produktové
              poradenství, workshopy a rybaření na malém soukromém revíru v
              Orlických Horách.
            </p>
          </div>
          <div className="flex justify-end md:hidden px-5 my-5">
            <img
              src={OfferImg}
              alt=""
              className="border rounded-full border-none h-56"
            />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="flex flex-col justify-center px-5 md:text-right 2xl:text-lg">
            <h3 className="font-bold">SLUŽBY PRŮVODCE</h3>
            <p>
              Provedu Tě po východočeských revírech, a především po pískovnách
              kolem Hradce Králové, které mám moc rád.
            </p>
          </div>
          <div className="flex px-5">
            <img
              src={CardImg1}
              alt=""
              className="border rounded-full border-none h-40 w-40"
            />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="flex flex-col justify-center px-5 md:text-right 2xl:text-lg">
            <h3 className="font-bold">PRODUKTOVÉ PORADENSTVÍ</h3>
            <p>
              Pokud si nevíš rady a chceš pomoct s výběrem vybavení, mám pro
              Tebe pár typů. Společně to zvládneme.
            </p>
          </div>
          <div className="flex px-5">
            <img
              src={CardImg2}
              alt=""
              className="border rounded-full border-none h-40 w-40"
            />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="flex flex-col justify-center px-5 md:text-right 2xl:text-lg">
            <h3 className="font-bold">WORKSHOP</h3>
            <p>
              Pokud chceš společně semnou vyrazit na ryby, máš možnost
              rezervovat termín, případně zakoupit dárkový poukaz kamarádovi.
            </p>
          </div>
          <div className="flex px-5">
            <img
              src={CardImg3}
              alt=""
              className="border rounded-full border-none h-40 w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
