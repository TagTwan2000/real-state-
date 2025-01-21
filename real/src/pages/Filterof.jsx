import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DoubleRangeSlider from "./DoubleRangeSlider";

function Filterof() {
  return (
    <div className="grid gap-4 w-full relative mx-auto">
  {/* Location Filter */}
  <div className="w-full">
    <label className="text-sm font-medium mb-1 block">Location</label>
    <Select>
      <SelectTrigger className="w-full shadow-none text-base border-[1px] border-gray-400 rounded-md relative z-10">
        <SelectValue placeholder="Choose Location" />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-auto absolute z-50 bg-white">
        <SelectItem value="new-cairo">New Cairo</SelectItem>
        <SelectItem value="sheikh-zayed">Sheikh Zayed</SelectItem>
        <SelectItem value="north-coast">North Coast</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Project Type Filter */}
  <div className="w-full">
    <label className="text-sm font-medium mb-1 block">Project Type</label>
    <Select>
      <SelectTrigger className="w-full shadow-none text-base border-[1px] border-gray-400 rounded-md relative z-10">
        <SelectValue placeholder="Choose Project Type" />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-auto absolute z-50 bg-white">
        <SelectItem value="residential">Residential</SelectItem>
        <SelectItem value="commercial">Commercial</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Developer Filter */}
  <div className="w-full">
    <label className="text-sm font-medium mb-1 block">Developer</label>
    <Select>
      <SelectTrigger className="w-full shadow-none text-base border-[1px] border-gray-400 rounded-md relative z-10">
        <SelectValue placeholder="Choose Developer" />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-auto absolute z-50 bg-white">
        <SelectItem value="developer-a">Developer A</SelectItem>
        <SelectItem value="developer-b">Developer B</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Property Type Filter */}
  <div className="w-full">
    <label className="text-sm font-medium mb-1 block">Property Type</label>
    <Select>
      <SelectTrigger className="w-full shadow-none text-base border-[1px] border-gray-400 rounded-md relative z-10">
        <SelectValue placeholder="Choose Property Type" />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-auto absolute z-50 bg-white">
        <SelectItem value="apartment">Apartment</SelectItem>
        <SelectItem value="villa">Villa</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <DoubleRangeSlider />
</div>

  );
}

export default Filterof;
