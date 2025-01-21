import React from 'react';
import Serch from './Serch';
import twon from './../assets/city-png-33560.png';
import { useStateContext } from '../../Context/StateContext'; 

function Hero() {
  const { darkMode } = useStateContext(); 

  return (
    <div className={`mt-[60px] ${darkMode ? 'bg-zinc-900 text-white' : 'bg-[#eef0fc] text-black'}`}>
      <div
        className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full'
        style={{
          backgroundImage: window.innerWidth >= 1024 ? `url(${twon})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className='text-lg text-center'>
          Easy Way to Find a Perfect Property
        </h2>
        <h2 className='text-[30px] font-thin text-center max-w-3xl'>
          Explore vast property listings by category with our user-friendly search. Find your perfect match!
        </h2>
        <Serch />
      </div>
    </div>
  );
}

export default Hero;
