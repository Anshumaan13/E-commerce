import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../WishlistPopup/WishlistContext";

function Banner2( ) {
  const {wishlist, addToWishlist, removeFromWishlist} = useWishlist();

  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: 1437,
      image: "Images/Iphone14.png",
    },
    {
      id: 2,
      name: "AirPods Max Silver Starlight Aluminium",
      price: 549,
      image: "Images/Airpodsmax.png",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: 399,
      image: "Images/Smartwatch.png",
    },
    {
      id: 4,
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
      image: "Images/Iphone14.png",
    },
  ];

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const handleToggle = (product) =>{
    if(isInWishlist(product.id)){
      removeFromWishlist(product.id);
    }
    else{
      addToWishlist(product);
    }
  }

  return (
    <div className="flex py-10 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-8 rounded-lg shadow hover:shadow-lg flex flex-col items-center relative bg-gray-200"
          >
            <div
              onClick={() => handleToggle(product)}
              className="absolute top-2 right-2 text-red-500 cursor-pointer"
            >
              {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-center font-semibold text-sm mb-2">{product.name}</h3>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner2;





// import React, { useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

// function Banner2() {
//   const [wishlist, setWishlist] = useState({});

//   const products = [
//     {
//       id: 1,
//       name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
//       price: 1437,
//       image: "Images/Iphone14.png",
//     },
//     {
//       id: 2,
//       name: "AirPods Max Silver Starlight Aluminium",
//       price: 549,
//       image: "Images/Airpodsmax.png",
//     },
//     {
//       id: 3,
//       name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
//       price: 399,
//       image: "Images/Smartwatch.png",
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
//       price: 1499,
//       image: "Images/Iphone14.png",
//     },
//   ];

//   const toggleWishlist = (id) => {
//     setWishlist((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));

//     console.log(
//       `${wishlist[id] ? "Removed from" : "Added to"} wishlist: Product ID ${id}`
//     );
//   };

//   return (
//     <div className="flex py-10 px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border p-8 rounded-lg shadow hover:shadow-lg flex flex-col items-center relative bg-gray-200"
//           >
//             <div
//               onClick={() => toggleWishlist(product.id)}
//               className="absolute top-2 right-2 text-red-500 cursor-pointer"
//             >
//               {wishlist[product.id] ? <FaHeart /> : <FaRegHeart />}
//             </div>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-32 h-32 object-contain mb-4"
//             />
//             <h3 className="text-center font-semibold text-sm mb-2">{product.name}</h3>
//             <p className="text-lg font-bold mb-2">${product.price}</p>
//             <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Banner2;
