import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

function DoubleRangeSlider() {
  const [values, setValues] = useState([1000000, 100000000]); // Initial range values

  const handleValueChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={values}
        onValueChange={handleValueChange}
        min={1000000} // Minimum slider value
        max={100000000} // Maximum slider value
        step={500000} // Step size
      >
        {/* Track */}
        <Slider.Track className="relative w-full h-2 bg-gray-200 rounded">
          <Slider.Range className="absolute h-full bg-blue-500 rounded" />
        </Slider.Track>

        {/* Left Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-blue-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Right Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-blue-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Slider.Root>

      {/* Display current values */}
      <div className="flex justify-between mt-4 text-gray-700">
        <span>Min: {values[0]}</span>
        <span>Max: {values[1]}</span>
      </div>
    </div>
  );
}

export default DoubleRangeSlider;
