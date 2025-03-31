"use client";

import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

const ProductList = () => {
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Správný název tabulky (products)
        const { data, error } = await supabase
          .from("products") // Opraveno na 'products'
          .select("*");

        if (error) throw error;
        setProducts(data || []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Error fetching products");
        } else {
          setError("Unknown error occurred");
        }
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Products</h2> {/* Opravený nadpis */}
      <ul>
        {products.length === 0 ? (
          <li>No products available</li>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3> {/* Opraveno na 'name' */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
