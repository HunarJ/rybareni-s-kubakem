import React from 'react';
import FirstImg from '../assets/main/image10.webp';
import SecondImg from '../assets/main/image6.webp';

const About = () => {
  return (
    <div className='w-full 2xl:flex flex-col justify-center text-gray-300 p-10 mt-60'>
      <div
        name='about'
        className='flex flex-col justify-center items-center w-full'
      >
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8 justify-end items-center'>
          <div className='sm:text-left md:text-right pb-8 pl-4 flex md:justify-end items-center col-span-2 md:col-span-1'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FFD369]'>
              O mně
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-3'>
          <div className='hidden md:flex justify-center items-center'>
            <img
              src={FirstImg}
              alt=''
              className='border rounded-2xl border-4'
            />
          </div>
          <div className='flex flex-col justify-center px-5 2xl:text-lg border-4 rounded-2xl p-5 text-justify'>
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
        <div className='max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-10'>
          <div className='flex flex-col justify-center px-5 2xl:text-lg border-4 rounded-2xl p-5 text-justify'>
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
          <div className='flex flex-col justify-center items-center'>
            <img
              src={SecondImg}
              alt=''
              className='border rounded-2xl border-4'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
