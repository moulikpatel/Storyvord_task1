import React from "react";
import { ModeToggle } from "./mode-toggle";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className="w-full md:h-[5vw] h-[20vw] border-b flex items-center px-5 gap-3">
      <ModeToggle />
      <div className="border px-2.5 py-1 hover:bg-zinc-800 rounded-md shadow-md">
        <Link to={"/cart"}>
          <ShoppingCart strokeWidth={1.5} width={15} />
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
