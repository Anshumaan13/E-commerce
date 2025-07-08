import React, { useState } from "react";
import products from "./Products";
import ProductCard from "./ProductCard";


const ProductsList = () =>{
    const [activeTab, setActiveTab] = useState("New Arrival");
    const tabs=["New Arrival", "Best Seller", "Featured Products"];

    const filteredProducts = products.filter(
        (product) => product.tag === activeTab
    );
    return(
        <div>
            <div className="p-20">
            <div className="flex space-x-8 mb-8">
                {tabs.map((tab) => (
                    <button
                    onClick={() => setActiveTab(tab)}
                    className= {`pb-2 ${activeTab === tab ? "font-bold border-b-2 border-black " :
                    "text-gray-500 hover:text-black "}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-6 ">
                
                {filteredProducts.map ((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default ProductsList;