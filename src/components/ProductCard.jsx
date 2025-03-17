import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { DollarSign } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { title, price, description, image } = product;
  return (
    <Card className="w-[330px] mt-4 relative">
      <CardContent className="md:min-h-[35vw] min-h-[90vw]">
        <div className="w-[40vw] md:w-[12vw]">
          <img
            className="object-contain md:h-[20vw] rounded-md ml-[18vw] md:ml-14 mt-4"
            src={image}
            alt=""
          />
        </div>
        <h1 className="font-medium mt-4 text-lg md:text-xl text-center">
          {title}
        </h1>
        <p className="text-center text-zinc-500 mt-3">
          {description.slice(0, 78)}
          ...
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center mt-2">
          <span>
            <DollarSign size={18} />
          </span>
          <p className="font-bold md:text-lg ">{price.toFixed()}</p>
        </div>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
