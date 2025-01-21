import React, { useState } from 'react';

function Menu({ isMenuOpen, setIsMenuOpen }) {
  const [isSBCSectionOpen, setIsSBCSectionOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`pl-4 fixed top-0 left-0 w-52 sm:w-64 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-40 h-screen overflow-hidden`}
      style={{ backgroundColor: '#1a1a1a', color: 'white' }} // Add styling as per your requirements
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          {isSBCSectionOpen ? (
            <div className="flex items-center">
              <button
                className="text-lg sm:text-2xl font-bold text-gray-500 hover:text-gray-700 mr-2 sm:mr-4"
                onClick={() => setIsSBCSectionOpen(false)}
              >
                <ArrowLeft size={16} />
              </button>
              <span className="text-lg sm:text-2xl font-semibold">SBC Section</span>
            </div>
          ) : (
            <span className="text-lg sm:text-2xl font-semibold">Menu</span>
          )}
          <button
            className="text-lg sm:text-2xl font-bold text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            ×
          </button>
        </div>

        {isSBCSectionOpen ? (
          <ul className="space-y-2 sm:space-y-4 p-4">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-sm sm:text-lg">Option 1</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-sm sm:text-lg">Option 2</li>
          </ul>
        ) : (
          <ul className="space-y-2 sm:space-y-4 p-4">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-sm sm:text-lg">Queens (EAFC FIFA 24 - 24)</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-sm sm:text-lg">Mission and XP Section</li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer text-sm sm:text-lg"
              onClick={() => setIsSBCSectionOpen(true)}
            >
              <div className="flex items-center justify-between">
                <span>SBC Section</span>
                <span>{isSBCSectionOpen ? <ArrowLeft size={8} /> : <ArrowRight size={8} />}</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Menu;
