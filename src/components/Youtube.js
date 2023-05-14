import React from "react";
import FirstImg from "../assets/main/image14.jpg";
import SecondImg from "../assets/main/image15.jpg";

const Youtube = () => {
  return (
    <div
      name="youtube"
      className="w-full flex flex-col justify-center bg-[#393E46] text-gray-300 px-10"
    >
      <div className="flex flex-col justify-center items-center w-full my-[140px]">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 flex flex-col justify-end">
            <p className="text-4xl font-bold inline ">
              <a href="https://www.youtube.com/@RybarenisKubakem" className="border-b-4 border-[#FFD369]">
                YouTube
              </a>
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="hidden md:flex flex-col px-5 justify-center items-end">
            <img
              src={FirstImg}
              alt=""
              className="border rounded-full border-none max-h-[250px]"
            />
          </div>
          <div className="flex flex-col justify-start px-5 2xl:text-lg">
            <div className="py-4">
              <p className="text-xl font-bold inline border-b-4 border-[#FFD369] ">
                <a href="https://www.youtube.com/@RybarenisKubakem">
                  Rybaření s kubákem
                </a>
              </p>
            </div>
            <div>
              <p>
                Jak jsem zmínil výše, už několik let tvořím video-obsah na mém
                youtube kanále Rybření s Kubákem, kde můžeš narazit na videa z
                kaprařských vycházek jak ze zvazových revírů, tak ze soukromých.
                Pak tam je několik videí o methodfeederu, vláčení, lovu štik na
                živou rybku a muškaření. Taky tam najdeš i několik videí ze
                studia, kam si zvu zajímavé hosty, nebo si vysvětlujeme různá
                rybářska témata. Celkově se videa snažím tvořit tak, abych
                diváka dostal s sebou k vodě a užil si tento zážitek společně
                semnou.
              </p>
            </div>
            <div className="flex flex-col px-5 justify-center items-end md:hidden my-5">
            <img
              src={FirstImg}
              alt=""
              className="border rounded-full border-none max-w-[225px] "
            />
          </div>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-10">
          <div className="flex flex-col justify-start px-5 2xl:text-lg">
            <div className="py-4 sm:flex flex-row justify-end">
              <p className="text-xl font-bold inline border-b-4 border-[#FFD369]">
                <a href="https://www.youtube.com/channel/UCZ3J43l2QzHVkKYBfaoPAcQ/join">
                  Členství
                </a>
              </p>
            </div>
            <div>
              <p>
                Pokud mě chceš podpořit tak se připoj do mého klubu! Staň se
                členem tohoto kanálu, podpořte mě ,získejte přístup k výhodám,
                jako jsou tajná videa, slevové kódy, členský revír, členské
                soutěže a další výhody. Podpořit mně můžeš na odkazu{" "}
                <a href="https://www.youtube.com/channel/UCZ3J43l2QzHVkKYBfaoPAcQ/join" className="font-bold border-b-2 border-[#FFD369]">
                  zde...
                </a>
              </p>
            </div>
          </div>
          <div className="flex px-5">
            <img
              src={SecondImg}
              alt=""
              className="border rounded-full border-none max-h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
