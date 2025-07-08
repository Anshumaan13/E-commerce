import React from "react";

import { useCart } from "../../components/Cart/CartContext";

function CartPage() {

  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
<h1 className="text-3xl font-bold mb-8 text-gray-800">🛒 Your Cart</h1>

      {cart.length === 0 ? (
<p className="text-gray-600 text-lg">Your cart is empty.</p>

      ) : (
<div className="grid md:grid-cols-3 gap-8">

          {/* Cart Items */}
<div className="md:col-span-2 space-y-6">

            {cart.map((item) => (
<div

                key={item.id}

                className="bg-white rounded-lg shadow-sm p-5 flex items-center justify-between hover:shadow-md transition"
>
<div className="flex items-center">
<img

                    src={item.image}

                    alt={item.name}

                    className="w-20 h-20 object-contain rounded mr-4 border"

                  />
<div>
<h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
<p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
</div>
</div>
<button

                  onClick={() => removeFromCart(item.id)}

                  className="text-red-500 hover:text-red-700 text-sm font-medium"
>

                  Remove
</button>
</div>

            ))}
</div>

          {/* Summary Panel */}
<div className="bg-white rounded-lg shadow-md p-6 sticky top-24 h-fit">
<h2 className="text-xl font-semibold mb-4 text-gray-800">Summary</h2>
<div className="flex justify-between text-gray-600 mb-2">
<span>Total Items</span>
<span>{cart.length}</span>
</div>
<div className="flex justify-between text-gray-800 text-lg font-medium mb-4">
<span>Total</span>
<span>${total.toFixed(2)}</span>
</div>
<button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">

              Proceed to Checkout
</button>
</div>
</div>

      )}
</div>

  );

}

export default CartPage;
 