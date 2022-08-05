import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { ProductsCard } from "./components/ProductCard";
import { ProductDetail } from "./components/ProductDetail";
import { productsData } from "./data/productList";

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsCard products={products} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
