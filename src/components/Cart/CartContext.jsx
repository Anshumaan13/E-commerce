import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState(() => {
const stored = localStorage.getItem("cart");
return stored ? JSON.parse(stored) : [];
});

const [showCartPopup, setShowCartPopup] = useState(false);

useEffect(() => {
localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (item) => {
if (!cart.find((c) => c.id === item.id)) {
setCart((prev) => [...prev, { ...item, quantity: 1 }]);
}
};

const removeFromCart = (id) => {
setCart((prev) => prev.filter((item) => item.id !== id));
};

const toggleCartPopup = () => {
setShowCartPopup((prev) => !prev);
};

return (
<CartContext.Provider
value={{ cart, addToCart, removeFromCart, showCartPopup, toggleCartPopup }}
>
{children}
</CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);
