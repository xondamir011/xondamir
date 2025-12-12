import { useContext } from "react";
import { CartContext } from "./CartContext";

const Shop = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="mb-150">
      {cart.length === 0 ? (
        <p className="text-4xl text-primary font-semibold text-center mt-10">Savat bo‘sh</p>
      ) : (
        cart.map((p, i) => (
          <div className="justify-center mt-20 ml-10 shadow-2xl hover:shadow-blue-700 transition-all w-110 h-110" key={i}>
            <img src={p.thumbnail} className="w-87 h-80" alt="" />
            <h3 className="text-2xl text-primary font-mono text-center">{p.title}</h3>
            <p className="text-2xl mt-3 text-red-500 font-mono text-center">{p.price}$</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Shop;