import React from 'react';

const ProductRange = () => {
  return (
    <div className="bg-black text-white w-full py-12 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-logik tracking-wide">
          THE HOUSE OF <span className="text-yellow-400">CAMPA</span>
        </h1>
        <p className="text-gray-400 mt-2 font-jio">Explore our range of bold, fizzy, and flavorful experiences</p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Sample Product Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.imgur.com/7xU4gOa.png" // Replace with your image
            alt="Campa Cola"
            className="w-full h-64 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold">Campa Cola</h2>
          <p className="text-gray-400 text-sm mt-2">The classic Indian cola taste, reimagined for a new generation.</p>
        </div>

        {/* Repeat above card with different data as needed */}
      </div>
    </div>
  );
};

export default ProductRange;
