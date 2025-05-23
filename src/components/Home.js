import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import homeImage from '../assets/main/home-youtube.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#222831]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-row justify-end my-5'>
          <a
            href='https://www.youtube.com/@RybarenisKubakem'
            className='link--resized'
          >
            <img src={homeImage} alt='CarpAngler' />
          </a>
        </div>
        <div>
          <h2 className='text-4xl text-[#FFD369]'>Zdraví Tě</h2>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Kubák
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Tvůj rybářský průvodce
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'></p>
          <div>
            <Link to='about' smooth={true} duration={500} offset={-125}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFD369] hover:border-[#FFD369] hover:text-[#222831]'>
                Zjisti více...
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
