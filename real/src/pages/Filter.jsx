import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";

import { Separator } from "@/components/ui/separator"

import { FaCcStripe } from "react-icons/fa";



import { useStateContext } from '../../Context/StateContext';
import Filterof from './Filterof';

function Filter() {

    

    const { darkMode} = useStateContext();


   
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 pt-10 px-4 mt-[32px] relative">
        
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
                    {/* Main Content */}
                    <div className="lg:w-1/2 w-full p-8 lg:ml-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg relative z-10">
                        {/* Device Selection and Quantity */}
                        <div className="flex items-center justify-between mb-4">
                           
                        </div>

                        {/* Quantity Selection */}
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex flex-col">
                                <label className="text-lg font-medium mb-2 flex items-center text-gray-900 dark:text-gray-100">
                                    Quantity <span className="text-red-500">*</span>
                                </label>
                               
                            </div>
                        
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start mt-6 lg:mb-0 lg:ml-[30px] mx-[20px] ">
                        <div className=" w-full p-10 lg:ml-8  dark:bg-gray-800 shadow-lg rounded-lg bg-gray-50">
                            <h2 className='text-lg font-semibold'>Filter</h2>
                            <Separator className='bg-red-900'/> 
                            
                            <div className="flex justify-between mt-4">
                                <Filterof/>
                            </div>
                           
                        </div>
                    </div>
                </div>
           

            {/* Buy Me a Coffee Button */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <a
                    title="Buy me a pizza"
                    href="https://www.buymeacoffee.com/Dekartmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                >
                    <img
                        className="object-cover object-center w-full h-full rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                        alt="Pizza Icon"
                    />
                </a>
            </div>

            
        </div>
    );
}

export default Filter;
