import React from "react";
import FirstImg from "../assets/main/image10.jpeg";
import SecondImg from "../assets/main/image6.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full 2xl:h-screen bg-[#393E46] text-gray-300 py-14 flex">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FFD369]">
              O mně
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-3">
          <div className="hidden md:flex px-5 justify-end">
            <img
              src={FirstImg}
              alt=""
              className="border rounded-full border-none max-h-[250px]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 2xl:text-lg">
            <p>
              Ahoj! Jmenuji se Jakub Zeman a jsem youtuber Kubák, ale hlavně
              rybář a milovník přírody. Rád točím videa a prostřednictvím mé
              kamery chci rybářky a rybáře dostat do přírody, a to i ty, kteří
              kvůli nemoci nebo hendikepu k vodě a do přírody nemohou. To byla
              vlastně moje první myšlenka, proč jsem začal videa na Youtube
              točit. Jsem z Hradce Králové a kromě tvorby videoklipů spolu
              můžeme zarybařit, promluvit, nebo podniknout třeba kaprařský
              workshop. Rybaření mě pohltilo natolik, že se z koníčku stal spíše
              životní styl...
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-10">
          <div className="flex flex-col justify-center px-5 2xl:text-lg">
            <p>
              Rybařím od šesti let, kdy jsem začínal na malém vesnickém
              rybníčku. Ze začátku jsem se nejvíce věnoval muškaření a plavané.
              Postupem času jsem se zdokonaloval díky přátelům, ale ten největší
              posun jsem zaznamenal, když jsem začal natáčet videa na sociální
              sítě a následně na Youtube. Komunita fanoušků a přátel mě posunula
              mílovými kroky kupředu. Každým komentářem jsem se zdokonaloval i v
              praxi. Rady jsem si bral k srdci a u vody je testoval a testoval.
              Krok za krokem jsem si vytvářel nové funkční postupy, a ty mi
              časem přinesly velké úlovky a krásné zážitky u vody, které bych
              přál vám všem.
            </p>
          </div>
          <div className="hidden md:flex px-5">
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

export default About;
