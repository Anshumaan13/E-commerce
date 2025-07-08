import React, { useState } from "react";
import productsData from "./Products";
import ProductCard from "./ProductCard";

const ProductList2 = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const brands = [...new Set(productsData.map(p => p.brand))];

  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "$0 - $500", min: 0, max: 500 },
    { label: "$501 - $1000", min: 501, max: 1000 },
    { label: "$1001 - $1500", min: 1001, max: 1500 },
    { label: "$1501+", min: 1501, max: Infinity }
  ];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setCurrentPage(1); 
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    setCurrentPage(1); 
  };

  const filteredProducts = productsData.filter(product => {
    const brandMatch = !selectedBrand || product.brand === selectedBrand;
    const range = priceRanges.find(r => r.label === selectedPrice) || priceRanges[0];
    const priceMatch = product.price >= range.min && product.price <= range.max;
    return brandMatch && priceMatch;
  });

  
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex px-8 py-6">
      
      <div className="w-1/4 pr-6">
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Filter by Brand</label>
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Filter by Price</label>
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full border px-4 py-2 rounded"
          >
            {priceRanges.map(range => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="w-3/4">
        <div className="grid grid-cols-3 gap-6">
          {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList2;
