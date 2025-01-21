import React from 'react';
import Developer from './Developer';
import { useStateContext } from '../../Context/StateContext'; 

function DeveleCou() {
  const { darkMode } = useStateContext(); 

  return (        
    <div className={` ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}> {/* Fixed space issue */}
      <div className='flex flex-col items-center h-1 w-full'>
        <h1 className="text-[35px] text-center font-bold sm:text-4xl sm:font-thin md:text-4xl md:font-thin">
          Featured Developers
        </h1>
      </div>
      <div className='mt-20'>
        <Developer />
      </div>
    </div>
  );
}

export default DeveleCou;
