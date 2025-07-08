import React, { useContext, useRef, useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';


function ProductCard({ product }) {




    const productIdRef = useRef(product?.id);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted((prev) => !prev)
        const productId = productIdRef.current;
        console.log(`${isWishlisted ? "Removed from" : "Added to "} wishlist: Product ID${productId}`
        );
    };
    return (
        <div className="flex">
            <div className=" border p-8 rounded-lg shadow hover:shadow-lg
            flex flex-col items-center relative bg-gray-200  ">
                <div className="absolute top-2 right-2 text-red-500 cursor-pointer" onClick={toggleWishlist}>
                    {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </div>
                <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-center font-semibold text-sm mb-2">{product?.name}</h3>
                <p className="text-lg font-bold mb-2">${product?.price}</p>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                    Buy Now
                </button>

            </div>
        </div>
    )
}



export default ProductCard;
