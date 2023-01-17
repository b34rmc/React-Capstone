import { useState, useEffect } from "react";
import { useCart } from "./CartProvider";

import ProductCard from "../ProductCard";

import "../../styles/Home.scss";

export default function Home() {
  const { clearCart, addProduct } = useCart();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h3>Matt's Ecommerce Store</h3>
      </div>
      <div className="products-overview">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
