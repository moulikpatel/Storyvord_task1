import { createContext, useContext, useState, useEffect } from "react";
import axioss from "../api/productApi";
import { useQuery } from "@tanstack/react-query";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [category, setCategory] = useState(""); 
  const [price, setPrice] = useState(""); 


  const fetchProducts = async () => {
    const { data } = await axioss.get("/products");
    return data;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5000,
  });

  const categories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];

  let filteredProducts = products || [];
  if (category && category !="all") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  if (price === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (price === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        categories,
        isLoading,
        isError,
        setCategory,
        setPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
