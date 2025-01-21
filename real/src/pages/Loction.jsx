import React, { useState } from 'react';
import { useStateContext } from '../../Context/StateContext'; // Import context for dark mode

const locations = ["New Cairo", "New Administrative Capital", "North Coast", "Sheikh Zayed"];
const projects = [
    {
      id: 1,
      location: "New Cairo",
      title: "Mivida New Cairo Compound",
      status: "Under Construction",
      price: "8,926,888",
      units: 482,
      type: "Residential",
      backgroundImage: "path/to/image1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      location: "New Cairo",
      title: "Hyde Park New Cairo Compound",
      status: "Completed",
      price: "6,400,000",
      units: 266,
      type: "Residential",
      backgroundImage: "path/to/image2.jpg",
    },
    {
      id: 3,
      location: "New Cairo",
      title: "Hyde Park New Cairo Compound",
      status: "Completed",
      price: "6,400,000",
      units: 266,
      type: "Residential",
      backgroundImage: "path/to/image2.jpg",
    },
    {
      id: 4,
      location: "New Cairo",
      title: "Hyde Park New Cairo Compound",
      status: "Completed",
      price: "6,400,000",
      units: 266,
      type: "Residential",
      backgroundImage: "path/to/image2.jpg",
    },
    {
      id: 5,
      location: "New Administrative Capital",
      title: "Hyde Park New Cairo Compound",
      status: "Completed",
      price: "6,400,000",
      units: 266,
      type: "Residential",
      backgroundImage: "path/to/image2.jpg",
    },
    // Add more projects as needed
  ];

function Location() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const filteredProjects = selectedLocation
    ? projects.filter((project) => project.location === selectedLocation)
    : projects;

  const { darkMode } = useStateContext();

  return (
    <div className={`container mx-auto p-14 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'} max-w-full`}>
      {/* Header */}
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
      
      {/* Location Tabs */}
      <div className="flex justify-start gap-4 mb-8 overflow-x-auto">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`flex-none min-w-fit px-4 py-2 rounded-full 
              ${selectedLocation === location ? 'bg-red-900 text-white' : darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}
              font-bold hover:bg-blue-600 transition duration-200 text-sm text-center`}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            {/* Background Image */}
            <div
              className="h-30 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            />

            {/* Overlay with Content */}
            <div className="p-6">
              {/* Project Type */}
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {project.type}
              </span>

              {/* Units Tag */}
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full ml-2">
                {project.units} Unit
              </span>

              {/* Project Title */}
              <h3 className="text-lg font-semibold mt-4">{project.title}</h3>

              {/* Status & Price */}
              <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{project.status}</p>
              <p className={`text-lg font-bold mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                From {project.price}
              </p>
              
              {/* Location & Button */}
              <div className="flex items-center justify-between mt-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.location}</p>
                <button className="bg-green-500 text-white text-xs px-4 py-2 rounded-full hover:bg-green-600 transition duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-5">
        <button className={`flex-none px-4 py-2 rounded-full border-2 text-sm font-bold hover:scale-105 transition-all cursor-pointer ${darkMode ? 'text-white border-gray-500' : 'text-black border-gray-300'}`}>
          View All
        </button>
      </div>
    </div>
  );
}

export default Location;
