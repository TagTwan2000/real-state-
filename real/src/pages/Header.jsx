import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMoon } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";
import { useStateContext } from '../../Context/StateContext';
import { IoIosSearch } from "react-icons/io";
import Menu from './Manu'; // Import the new Menu component
import { CiMenuBurger } from "react-icons/ci";

function Header() {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search visibility

    const { darkMode, setDarkMode } = useStateContext();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const opacity = Math.max(1);
            setHeaderOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        setSearchQuery(''); // Clear input after search if desired
        // Close the search form after search
    };

    return (
        <div>
            {/* Menu Component is rendered here, passing the necessary props */}
            {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

            <header
                className={`flex items-center justify-between p-2 fixed top-0 left-0 w-full transition-opacity duration-300 border-b ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black border-gray-300'}`}
                style={{ opacity: headerOpacity, zIndex: 10 }}
            >
                {/* Left Section */}
                <div className="flex items-center space-x-2 justify-start min-w-[105px]">
                    <img src='https://realestate.eg/new-logo.svg' alt="Logo" className="w-20 h-20 sm:w-30 sm:h-30" />
                </div>

                {/* Center Section */}
                <div className="flex items-center justify-center flex-grow">
                    <form onSubmit={handleSearch} className="flex items-center w-full max-w-xs">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Where do you wanna live?..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 pl-4 pr-10 border border-gray-300 rounded-full shadow-md w-full "
                            />
                            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                                <IoIosSearch className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-2 min-w-[105px] ml-auto justify-end">
                    <button onClick={() => setDarkMode(!darkMode)} className="darkmode-toggle hover:scale-105 transition-all cursor-pointer">
                        {darkMode ? (
                            <AiOutlineMoon className='text-white w-5 h-5' />
                        ) : (
                            <MdOutlineWbSunny className='text-black w-5 h-5' />
                        )}
                        <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                    </button>

                    <button className="flex items-center focus:outline-none text-lg hover:scale-110 transition-all cursor-pointer" >
                        <CiMenuBurger />
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
