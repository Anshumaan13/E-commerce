import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
function CartPopup({ onClose }) {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const goToCartPage = () => {
    onClose();           // Close the popup
    navigate("/cart");   // Navigate to cart page
  };
  return (
<div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold">Your Cart</h2>
<button onClick={onClose} className="text-red-500 font-bold text-xl">×</button>
</div>
      {cart.length === 0 ? (
<p className="text-gray-500">Your cart is empty.</p>
      ) : (
<>
          {cart.map((item) => (
<div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
<div className="flex items-center">
<img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-3" />
<div>
<h4 className="text-sm font-semibold">{item.name}</h4>
<p className="text-sm text-gray-600">${item.price}</p>
</div>
</div>
<button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
>
                Remove
</button>
</div>
          ))}
<button
            onClick={goToCartPage}
            className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800"
>
            Go to Cart Page
</button>
</>
      )}
</div>
  );
}
export default CartPopup;