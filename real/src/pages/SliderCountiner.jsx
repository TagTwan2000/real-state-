// SliderCountiner Component
import React from 'react';
import Slider from './Slider';
import { useStateContext } from '../../Context/StateContext'; 
function SliderCountiner() {
    const { darkMode } = useStateContext(); 
  return (

    <div className={` ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}> {/* Fixed space issue */}
      <div className='flex flex-col items-center    h-1 w-full'>
        <h1 className='text-[35px] text-center  font-bold '>
          Featured Locations
        </h1>
        <h3 className='text-[20px] font-thin text-center  max-w-3xl'>
          Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be
        </h3>
      </div>
      <div className='mt-40'><Slider /></div>
      
    </div>
  );
}

export default SliderCountiner;

