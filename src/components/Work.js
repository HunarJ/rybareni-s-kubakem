import React, { useState, useEffect } from 'react';
import OfferImg from '../assets/gallery/img-16.jpeg';
import CardImg1 from '../assets/main/image3.webp';
import CardImg2 from '../assets/main/image11.jpeg';
import CardImg3 from '../assets/main/image13.webp';
import ProductImg1 from '../assets/main/kubakovy-koule-removebg-preview.png';

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Funkce pro kontrolu šířky okna
    const checkDevice = () => {
      const match = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(match);
    };

    // Volání funkce při prvním renderu
    checkDevice();

    // Nepotřebujeme žádné čištění, protože chceme spustit pouze jednou
  }, []);

  return (
    <div
      name='work'
      className='w-full 2xl:flex flex-col justify-center bg-[#393E46] text-gray-300 px-10 mt-60'
    >
      {isMobile ? (
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 mb-10'>
              <p className='text-4xl font-bold inline border-b-4 border-[#FFD369]'>
                Nabízím
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-3'>
            <div className='hidden md:flex justify-end items-center px-5'>
              <img
                src={OfferImg}
                alt='angler'
                className='border rounded-2xl border-4'
              />
            </div>
            <div className='flex flex-col justify-center px-5 2xl:text-lg border-4 rounded-2xl p-5 text-justify'>
              <p>
                Kromě rybaření online prostřednictvím mé kamery a kanálu Youtube
                Rybaření s Kubákem, nabízím také osobní doprovod po
                východočeských revírech, typování míst k rybaření, produktové
                poradenství, workshopy a rybaření na malém soukromém revíru v
                Orlických Horách.
              </p>
            </div>
            <div className='flex justify-end md:hidden my-5'>
              <img
                src={OfferImg}
                alt=''
                className='border rounded-2xl border-4'
              />
            </div>
          </div>
          <div className='max-w-[1200px] w-full grid md:grid-cols-2 my-10'>
            <div className='px-5 h-auto flex flex-col justify-between'>
              <div className='sm:text-center pb-8 pl-4 md:hidden'>
                <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                  Služby
                </p>
              </div>
              <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                  <h3 className='font-bold text-left'>SLUŽBY PRŮVODCE</h3>
                  <p className='text-justify my-5 mr-4'>
                    Provedu Tě po východočeských revírech, a především po
                    pískovnách kolem Hradce Králové, které mám moc rád.
                  </p>
                </div>
                <div className=' flex justify-center items-center'>
                  <img
                    src={CardImg1}
                    alt='angler'
                    className='border rounded-full border-none h-30'
                  />
                </div>
              </div>
              <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify my-5'>
                <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                  <h3 className='font-bold text-left'>
                    PRODUKTOVÉ PORADENSTVÍ
                  </h3>
                  <p className='text-justify my-5 mr-4'>
                    Pokud si nevíš rady a chceš pomoct s výběrem vybavení, mám
                    pro Tebe pár typů. Společně to zvládneme.
                  </p>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src={CardImg2}
                    alt=''
                    className='border rounded-full border-none h-30 w-40'
                  />
                </div>
              </div>
              <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                  <h3 className='font-bold text-left'>WORKSHOP</h3>
                  <p className='text-justify my-5 mr-4'>
                    Pokud chceš společně semnou vyrazit na ryby, máš možnost
                    rezervovat termín, případně zakoupit dárkový poukaz
                    kamarádovi.
                  </p>
                </div>
                <div className='hidden md:flex justify-center items-center'>
                  <img
                    src={CardImg3}
                    alt=''
                    className='border rounded-full border-none h-40'
                  />
                </div>
              </div>
            </div>
            {isMobile ? (
              <div className='h-auto px-5'>
                <div className='sm:text-center pb-8 pl-4 md:hidden mt-10'>
                  <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                    Produkty
                  </p>
                </div>
                <div className='border-4 rounded-2xl p-5 text-justify'>
                  <h3 className='font-bold text-2xl hover:text-[#FFD369]'>
                    <a href='https://www.tactics.cz/kubakuv-program/'>
                      KUBÁKOVY KOULE
                    </a>
                  </h3>
                  <p className='my-5'>
                    S klukama z{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    jsme se seznámili na For Fishing 2023, kde jsem na ně
                    narazil poprvé na jejich stánku. Nejdříve mě zajímal jejich
                    produkt z kontroverzním názvem{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/konopny-kvet/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Konopný květ“
                    </a>
                    . Dostal jsem vzorek a po dalším zjišťování a testování
                    jejich produktů jako je{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Červené ovoce“
                    </a>
                    , které se mi hodně líbilo jsem po několika měsících zvážil
                    spolupráci právě s touto značkou. Jsem spokojený s jejich
                    výrobky jak fungují ve vodě a hlavně mi vyhovují jejich
                    produkty jako takové. Na{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Červené ovoce
                    </a>{' '}
                    se mi povedlo pár krásných ryb jak jste mohli vidět v mých
                    videích na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanálu
                    </a>
                    .
                  </p>
                  <p className='my-5'>
                    Po měsících testování a zkoušení se mi opravdu líbí jejich
                    přístup jak jejich produkty vyrábějí jde opravdu vidět že
                    Milan strůjce svých receptů opravdu ví co dělá. S klukama z
                    Tactics je super spolupráce, co řeknou to platí a nic se
                    nemění. Proto moje další verze V3. - mých{' '}
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                    >
                      {' '}
                      KUBÁKOVÝCH KOULÍ
                    </a>{' '}
                    - budou vyrábět právě oni. V celém sortimentu naleznete -
                    1kg a 3kg balení „krmných koulí“ , chytací koule v jejich
                    stylu „Silent hunter“, obalované pop-up, obalovací těsto,
                    booster a další…
                  </p>
                  <p className='my-5'>
                    Zakoupení těchto výrobků mě osobně podpoříš v tom co rád
                    dělám a to je točení videjí na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanále
                    </a>{' '}
                    a hlavně můžeš chytat na kvalitní koule co jsem dal
                    dohromady s{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    .
                  </p>
                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold'>
                      <a
                        href='https://www.tactics.cz/kubakuv-program/'
                        className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                      >
                        NAKUPUJ ZDE!
                      </a>
                    </h2>
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='link--resized'
                    >
                      <img src={ProductImg1} alt='' className='h-60' />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className='h-auto px-5'>
                <div className='sm:text-center pb-8 pl-4 md:hidden mt-10'>
                  <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                    Produkty
                  </p>
                </div>
                <div className='border-4 rounded-2xl p-5 text-justify'>
                  <h3 className='font-bold text-2xl hover:text-[#FFD369]'>
                    <a href='https://www.tactics.cz/kubakuv-program/'>
                      KUBÁKOVY KOULE
                    </a>
                  </h3>
                  <p className='my-5'>
                    S klukama z{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    jsme se seznámili na For Fishing 2023, kde jsem na ně
                    narazil poprvé na jejich stánku. Nejdříve mě zajímal jejich
                    produkt z kontroverzním názvem{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/konopny-kvet/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Konopný květ“
                    </a>
                    . Dostal jsem vzorek a po dalším zjišťování a testování
                    jejich produktů jako je{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Červené ovoce“
                    </a>
                    , které se mi hodně líbilo jsem po několika měsících zvážil
                    spolupráci právě s touto značkou. Jsem spokojený s jejich
                    výrobky jak fungují ve vodě a hlavně mi vyhovují jejich
                    produkty jako takové. Na{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Červené ovoce
                    </a>{' '}
                    se mi povedlo pár krásných ryb jak jste mohli vidět v mých
                    videích na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanálu
                    </a>
                    .
                  </p>
                  <p className='my-5'>
                    Po měsících testování a zkoušení se mi opravdu líbí jejich
                    přístup jak jejich produkty vyrábějí jde opravdu vidět že
                    Milan strůjce svých receptů opravdu ví co dělá. S klukama z
                    Tactics je super spolupráce, co řeknou to platí a nic se
                    nemění. Proto moje další verze V3. - mých{' '}
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                    >
                      {' '}
                      KUBÁKOVÝCH KOULÍ
                    </a>{' '}
                    - budou vyrábět právě oni. V celém sortimentu naleznete -
                    1kg a 3kg balení „krmných koulí“ , chytací koule v jejich
                    stylu „Silent hunter“, obalované pop-up, obalovací těsto,
                    booster a další…
                  </p>
                  <p className='my-5'>
                    Zakoupení těchto výrobků mě osobně podpoříš v tom co rád
                    dělám a to je točení videjí na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanále
                    </a>{' '}
                    a hlavně můžeš chytat na kvalitní koule co jsem dal
                    dohromady s{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    .
                  </p>
                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold'>
                      <a
                        href='https://www.tactics.cz/kubakuv-program/'
                        className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                      >
                        NAKUPUJ ZDE!
                      </a>
                    </h2>
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='link--resized'
                    >
                      <img src={ProductImg1} alt='' className='h-60' />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 mb-10'>
              <p className='text-4xl font-bold inline border-b-4 border-[#FFD369]'>
                Nabízím
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4 my-3 '>
            <div className='hidden md:flex justify-end items-center max-h-[250px] w-full relative overflow-hidden border rounded-2xl border-4 '>
              <img src={OfferImg} alt='' className='' />
            </div>
            <div className='flex flex-col justify-center px-5 2xl:text-lg border-4 rounded-2xl p-5 text-justify'>
              <p>
                Kromě rybaření online prostřednictvím mé kamery a kanálu Youtube
                Rybaření s Kubákem, nabízím také osobní doprovod po
                východočeských revírech, typování míst k rybaření, produktové
                poradenství, workshopy a rybaření na malém soukromém revíru v
                Orlických Horách.
              </p>
            </div>
            <div className='flex justify-end md:hidden my-5'>
              <img
                src={OfferImg}
                alt=''
                className='border rounded-2xl border-4'
              />
            </div>
          </div>
          <div className='max-w-[1200px] w-full grid md:grid-cols-2 my-10'>
            <div className='px-5 h-auto flex flex-col justify-between'>
              <div className='sm:text-center pb-8 pl-4 md:hidden'>
                <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                  Služby
                </p>
              </div>
              {isMobile ? (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>SLUŽBY PRŮVODCE</h3>
                    <p className='text-justify my-5 mr-4'>
                      Provedu Tě po východočeských revírech, a především po
                      pískovnách kolem Hradce Králové, které mám moc rád.
                    </p>
                  </div>
                  <div className=' flex justify-center items-center'>
                    <img
                      src={CardImg1}
                      alt=''
                      className='border rounded-full border-none h-30'
                    />
                  </div>
                </div>
              ) : (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>SLUŽBY PRŮVODCE</h3>
                    <p className='text-justify my-5 mr-4'>
                      Provedu Tě po východočeských revírech, a především po
                      pískovnách kolem Hradce Králové, které mám moc rád.
                    </p>
                  </div>
                  <div className=' flex justify-center items-center'>
                    <img
                      src={CardImg1}
                      alt=''
                      className='border rounded-full border-none h-30'
                    />
                  </div>
                </div>
              )}

              {isMobile ? (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify my-5'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>
                      PRODUKTOVÉ PORADENSTVÍ
                    </h3>
                    <p className='text-justify my-5 mr-4'>
                      Pokud si nevíš rady a chceš pomoct s výběrem vybavení, mám
                      pro Tebe pár typů. Společně to zvládneme.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <img
                      src={CardImg2}
                      alt=''
                      className='border rounded-full border-none h-30 w-40'
                    />
                  </div>
                </div>
              ) : (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify my-5'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>
                      PRODUKTOVÉ PORADENSTVÍ
                    </h3>
                    <p className='text-justify my-5 mr-4'>
                      Pokud si nevíš rady a chceš pomoct s výběrem vybavení, mám
                      pro Tebe pár typů. Společně to zvládneme.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <img
                      src={CardImg2}
                      alt=''
                      className='border rounded-full border-none h-30 w-40'
                    />
                  </div>
                </div>
              )}

              {isMobile ? (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>WORKSHOP</h3>
                    <p className='text-justify my-5 mr-4'>
                      Pokud chceš společně semnou vyrazit na ryby, máš možnost
                      rezervovat termín, případně zakoupit dárkový poukaz
                      kamarádovi.
                    </p>
                  </div>
                  <div className='hidden md:flex justify-center items-center'>
                    <img
                      src={CardImg3}
                      alt=''
                      className='border rounded-full border-none h-40'
                    />
                  </div>
                </div>
              ) : (
                <div className='grid md:grid-cols-3 gap-2 border-4 rounded-2xl p-5 text-justify'>
                  <div className='col-span-2 flex flex-col justify-center md:text-right 2xl:text-lg'>
                    <h3 className='font-bold text-left'>WORKSHOP</h3>
                    <p className='text-justify my-5 mr-4'>
                      Pokud chceš společně semnou vyrazit na ryby, máš možnost
                      rezervovat termín, případně zakoupit dárkový poukaz
                      kamarádovi.
                    </p>
                  </div>
                  <div className='hidden md:flex justify-center items-center'>
                    <img
                      src={CardImg3}
                      alt=''
                      className='border rounded-full border-none h-40'
                    />
                  </div>
                </div>
              )}
            </div>
            {isMobile ? (
              <div className='h-auto px-5'>
                <div className='sm:text-center pb-8 pl-4 md:hidden mt-10'>
                  <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                    Produkty
                  </p>
                </div>
                <div className='border-4 rounded-2xl p-5 text-justify'>
                  <h3 className='font-bold text-2xl hover:text-[#FFD369]'>
                    <a href='https://www.tactics.cz/kubakuv-program/'>
                      KUBÁKOVY KOULE
                    </a>
                  </h3>
                  <p className='my-5'>
                    S klukama z{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369]'
                    >
                      Tactics
                    </a>{' '}
                    jsme se seznámili na For Fishing 2023, kde jsem na ně
                    narazil poprvé na jejich stánku. Nejdříve mě zajímal jejich
                    produkt z kontroverzním názvem{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/konopny-kvet/'
                      className='font-bold hover:text-[#FFD369]'
                    >
                      „Konopný květ“
                    </a>
                    . Dostal jsem vzorek a po dalším zjišťování a testování
                    jejich produktů jako je{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369]'
                    >
                      „Červené ovoce“
                    </a>
                    , které se mi hodně líbilo jsem po několika měsících zvážil
                    spolupráci právě s touto značkou. Jsem spokojený s jejich
                    výrobky jak fungují ve vodě a hlavně mi vyhovují jejich
                    produkty jako takové. Na{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369]'
                    >
                      Červené ovoce
                    </a>{' '}
                    se mi povedlo pár krásných ryb jak jste mohli vidět v mých
                    videích na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369]'
                    >
                      Youtube kanálu
                    </a>
                    .
                  </p>
                  <p className='my-5'>
                    Po měsících testování a zkoušení se mi opravdu líbí jejich
                    přístup jak jejich produkty vyrábějí jde opravdu vidět že
                    Milan strůjce svých receptů opravdu ví co dělá. S klukama z
                    Tactics je super spolupráce, co řeknou to platí a nic se
                    nemění. Proto moje další verze V3. - mých{' '}
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369]'
                    >
                      {' '}
                      KUBÁKOVÝCH KOULÍ
                    </a>{' '}
                    - budou vyrábět právě oni. V celém sortimentu naleznete -
                    1kg a 3kg balení „krmných koulí“ , chytací koule v jejich
                    stylu „Silent hunter“, obalované pop-up, obalovací těsto,
                    booster a další…
                  </p>
                  <p className='my-5'>
                    Zakoupení těchto výrobků mě osobně podpoříš v tom co rád
                    dělám a to je točení videjí na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanále
                    </a>{' '}
                    a hlavně můžeš chytat na kvalitní koule co jsem dal
                    dohromady s{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    .
                  </p>
                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold'>
                      <a
                        href='https://www.tactics.cz/kubakuv-program/'
                        className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369]'
                      >
                        NAKUPUJ ZDE!
                      </a>
                    </h2>
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='link--resized'
                    >
                      <img src={ProductImg1} alt='' className='h-60' />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className='h-auto px-5'>
                <div className='sm:text-center pb-8 pl-4 md:hidden mt-10'>
                  <p className='text-2xl font-bold inline border-b-4 border-[#FFD369]'>
                    Produkty
                  </p>
                </div>
                <div className='border-4 rounded-2xl p-5 text-justify'>
                  <h3 className='font-bold text-2xl hover:text-[#FFD369]'>
                    <a href='https://www.tactics.cz/kubakuv-program/'>
                      KUBÁKOVY KOULE
                    </a>
                  </h3>
                  <p className='my-5'>
                    S klukama z{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    jsme se seznámili na For Fishing 2023, kde jsem na ně
                    narazil poprvé na jejich stánku. Nejdříve mě zajímal jejich
                    produkt z kontroverzním názvem{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/konopny-kvet/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Konopný květ“
                    </a>
                    . Dostal jsem vzorek a po dalším zjišťování a testování
                    jejich produktů jako je{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      „Červené ovoce“
                    </a>
                    , které se mi hodně líbilo jsem po několika měsících zvážil
                    spolupráci právě s touto značkou. Jsem spokojený s jejich
                    výrobky jak fungují ve vodě a hlavně mi vyhovují jejich
                    produkty jako takové. Na{' '}
                    <a
                      href='https://www.tactics.cz/stitek-produktu/cervene-ovoce/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Červené ovoce
                    </a>{' '}
                    se mi povedlo pár krásných ryb jak jste mohli vidět v mých
                    videích na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanálu
                    </a>
                    .
                  </p>
                  <p className='my-5'>
                    Po měsících testování a zkoušení se mi opravdu líbí jejich
                    přístup jak jejich produkty vyrábějí jde opravdu vidět že
                    Milan strůjce svých receptů opravdu ví co dělá. S klukama z
                    Tactics je super spolupráce, co řeknou to platí a nic se
                    nemění. Proto moje další verze V3. - mých{' '}
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                    >
                      {' '}
                      KUBÁKOVÝCH KOULÍ
                    </a>{' '}
                    - budou vyrábět právě oni. V celém sortimentu naleznete -
                    1kg a 3kg balení „krmných koulí“ , chytací koule v jejich
                    stylu „Silent hunter“, obalované pop-up, obalovací těsto,
                    booster a další…
                  </p>
                  <p className='my-5'>
                    Zakoupení těchto výrobků mě osobně podpoříš v tom co rád
                    dělám a to je točení videjí na mém{' '}
                    <a
                      href='https://www.youtube.com/@RybarenisKubakem'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Youtube kanále
                    </a>{' '}
                    a hlavně můžeš chytat na kvalitní koule co jsem dal
                    dohromady s{' '}
                    <a
                      href='https://www.tactics.cz/'
                      className='font-bold hover:text-[#FFD369] link--resized'
                    >
                      Tactics
                    </a>{' '}
                    .
                  </p>
                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold'>
                      <a
                        href='https://www.tactics.cz/kubakuv-program/'
                        className='font-bold hover:text-[#FFD369] border-b-2 border-[#FFD369] link--resized'
                      >
                        NAKUPUJ ZDE!
                      </a>
                    </h2>
                    <a
                      href='https://www.tactics.cz/kubakuv-program/'
                      className='link--resized'
                    >
                      <img src={ProductImg1} alt='' className='h-60' />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
