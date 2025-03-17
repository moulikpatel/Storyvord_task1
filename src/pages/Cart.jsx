import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {  ArrowLeft, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-4 md:p-6 flex flex-col min-h-screen">
      <Link className="hidden md:block" to={"/"}>
        <ArrowLeft />
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4 flex-grow">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col md:flex-row justify-between items-center shadow-md"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-30 object-cover rounded-md"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-[4.5vw] md:text-lg text-left font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">${item.price.toFixed()}</p>
                </div>
              </div>
              <div className="flex items-center mt-3 md:mt-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </Button>
                <span className="px-4">{item.qty}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-6 p-4 border-t bg-white shadow-md dark:text-black rounded-md sticky bottom-0">
          <div className="flex justify-between px-4 py-2">
            <h3 className="text-lg font-medium">Total Items:</h3>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between px-4 py-2">
            <h3 className="text-lg font-medium">Total Price:</h3>
            <div className="flex items-center">
              <DollarSign size={18} />
              <span className="ml-1 font-bold">{totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md">
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
