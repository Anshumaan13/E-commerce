import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import ProductPage from './modules/ProductPage/ProductPage';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import FooterBanner from './components/FooterBanner/FooterBanner';
import Contact from './components/Contact';
import Slider from './components/Slider/Slider';
import About from './components/About';
import CartPage from './components/Cart/CartPage';
import Banner2 from './components/ProductCard/Banner2';
import Footer from './components/Footer/Footer';
import ProductsList from './components/ProductCard/ProductsList';
import BannersList from './components/Banner/BannersList';
import WishlistPopup from './components/WishlistPopup/WishlistPopup';
import CartPopup from './components/Cart/CartPopup';
import { useWishlist } from './components/WishlistPopup/WishlistContext';
import { useCart } from './components/Cart/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';


function PopupWrappers() {
  const { showWishlistPopup, toggleWishlistPopup, wishlist, removeFromWishlist } = useWishlist();
  const { showCartPopup, toggleCartPopup, cart, removeFromCart } = useCart();

  return (
    <>
      {showWishlistPopup && (
        <WishlistPopup
          wishlist={wishlist}
          onClose={toggleWishlistPopup}
          removeFromWishlist={removeFromWishlist}
        />
      )}
      {showCartPopup && (
        <CartPopup
          cart={cart}
          onClose={toggleCartPopup}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
}

function Layout() {
  return (
    <>
      <div className="bg-white p-5 flex">
        <Header />
      </div>

      
      <PopupWrappers />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Products />
              <Slider />
              <ProductsList />
              <BannersList />
              <Banner2 />
              <FooterBanner />
              <Footer />
            </>
          }
        />
        
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
