import "../../styles/Products.scss";
import Filter from "../Filter";
import ProductCard from "../ProductCard";

import { useState, useEffect } from "react";
import { useCart } from "./CartProvider";

export default function ProductsPage(props) {
  const { clearCart, addProduct } = useCart();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState("");
  function renderProducts() {
    return products?.map((product) => {
      return (
        <ProductCard
          key={product.id}
          product={product}
          addProduct={addProduct}
        />
      );
    });
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const endpoint = category ? `/category/${category}` : "";

    fetch(`https://fakestoreapi.com/products${endpoint}`, { signal })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Fetch All Products Error: ", err));
    return () => controller.abort();
  }, [props.itemId, category]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setFilter(data))
      .catch((err) => console.log("Category Fetch Error", err));
  }, []);

  return (
    <div className="products-page-wrapper">
      <Filter setCategory={setCategory} filters={filter} />
      <div className="products">{renderProducts()}</div>
    </div>
  );
}
