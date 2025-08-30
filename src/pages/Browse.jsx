import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

export default function Browse() {
  const { data } = useFetch("/api/products.json");

  return (
    <div>
      <h3>Browse products</h3>

      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <Link to="/">Home</Link>
    </div>
  );
}
