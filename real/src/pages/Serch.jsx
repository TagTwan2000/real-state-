import React from 'react';
import { CiSearch } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@radix-ui/react-select';

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-5 md:gap-10 items-center w-full md:w-[80%] text-black'>
      {/* Select Dropdowns */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full md:w-[200px] shadow-none text-lg">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      {/* Separator for larger screens */}
      <Separator orientation="vertical" className='hidden md:block' />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full md:w-[200px] shadow-none text-lg">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className='hidden md:block' />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full md:w-[200px] shadow-none text-lg">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className='hidden md:block' />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full md:w-[200px] shadow-none text-lg">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      {/* Search Icon */}
      <div className="flex items-center">
        <CiSearch className='text-4xl bg-black rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
      </div>
    </div>
  );
}

export default Search;
