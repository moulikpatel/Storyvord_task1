import { IndianRupee } from "lucide-react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
        </>
      ),
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ProductProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
