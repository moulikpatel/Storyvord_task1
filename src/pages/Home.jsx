import React, { useState } from "react";
import FilterProduct from "@/components/FilterProduct";
import ProductCard from "@/components/ProductCard";
import { useProduct } from "@/context/ProductContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import loader from "/loader.gif";
import { Bounce, toast } from "react-toastify";

const Home = () => {
  const { products, isLoading, isError } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <img src={loader} alt="" />
      </div>
    );
  if (isError)
    return toast.error("error while fetching products", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div>
      <FilterProduct />
      <div className="container mx-auto px-[4vw] mt-[5vw] md:mt-[3vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[7vw]">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
      
      {/* pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center m-6 gap-2">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
