import React from "react";
import { useWishlist } from "../WishlistPopup/WishlistContext";
import { useCart } from "../Cart/CartContext";

function SearchBar() {
  const { toggleWishlistPopup } = useWishlist();
  const { toggleCartPopup  } = useCart();

  return (
    <div className="ml-10 font-">
      <nav>
        <div className="ml-6 flex space-x-4">
          <a
            href="/"
            className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-4 opacity-50 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-4 py-2 opacity-50 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            Contact Us
          </a>
          <a
            href="/products"
            className="px-4 py-2 opacity-50 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            Products
          </a>

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlistPopup}
            className="px-4 py-1 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            <img src="Images/Favorites.png" alt="favourites" />
          </button>

          <button
            onClick={toggleCartPopup}
            className="px-4 py-1 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            <img src="Images/Cart1.png" alt="cart" />
          </button>

          <a
            href="/user"
            className="px-4 py-1 hover:text-blue-500 hover:bg-gray-100 rounded-lg transition"
          >
            <img src="Images/User.png" alt="user" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
