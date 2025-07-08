import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "../Cart/CartContext"; // Adjust path if needed

function WishlistPopup({ onClose }) {
const { wishlist, removeFromWishlist } = useWishlist();
const { addToCart } = useCart();

const moveToCart = (item) => {
addToCart(item);
removeFromWishlist(item.id);
};

return (
<div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold">Your Wishlist</h2>
<button onClick={onClose} className="text-red-500 font-bold text-xl">×</button>
</div>

{wishlist.length === 0 ? (
<p className="text-gray-500">Your wishlist is empty.</p>
) : (
wishlist.map((item) => (
<div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
<div className="flex items-center">
<img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-3" />
<div>
<h4 className="text-sm font-semibold">{item.name}</h4>
<p className="text-sm text-gray-600">${item.price}</p>
</div>
</div>
<div className="flex flex-col gap-1">
<button
onClick={() => moveToCart(item)}
className="text-blue-500 text-sm"
>
Add to Cart
</button>
<button
onClick={() => removeFromWishlist(item.id)}
className="text-red-500 text-sm"
>
Remove
</button>
</div>
</div>
))
)}
</div>
);
}

export default WishlistPopup;
