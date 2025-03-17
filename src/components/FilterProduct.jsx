import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useProduct } from "../context/ProductContext";

const FilterProduct = () => {

  const { categories, setCategory, setPrice } = useProduct();

  return (
    <div className="w-full flex md:flex-row flex-col items-center  md:justify-end relative px-4 gap-2 md:gap-5 mt-[3vw]">
      <Select defaultValue="all" onValueChange={(val) => setCategory(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem> 
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(val) => setPrice(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low-to-high">Low to High</SelectItem>
          <SelectItem value="high-to-low">High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterProduct;
