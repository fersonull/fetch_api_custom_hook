import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { data } = useFetch("/api/products.json");

  return (
    <div>
      <h2>Homepage</h2>

      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <Link to="/products">Browse products</Link>
    </div>
  );
}
