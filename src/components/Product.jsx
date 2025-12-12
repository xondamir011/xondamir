import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = ({search = ""}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const GetProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products || []);
        setLoading(false);
      } catch (err) {
        console.error("Xatolik:", err);
         setProducts([]);
         setLoading(false);
      }
    };  
    GetProduct();
  }, []);
   
    const filtered = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase() ));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <figure className="h-64 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg">{item.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-green-600">${item.price}</span>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>Buy Now</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;