"use client";
import { ArrowLeftRight } from "lucide-react";
import FilterCard from "../_ui/FilterCard";

const FilterRides = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <FilterCard label="From" value="Location" onClick={() => {}} />
      <button className="p-3 rounded-full bg-foreground cursor-pointer text-background">
        <ArrowLeftRight />
      </button>
      <FilterCard label="To" value="Location" onClick={() => {}} />

        <button className="px-5 py-3 bg-foreground cursor-pointer text-background h-20 rounded-md border border-background">Search</button>
    </div>
  );
};

export default FilterRides;
