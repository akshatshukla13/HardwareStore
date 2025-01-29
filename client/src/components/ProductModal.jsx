import React from 'react';

function ProductModal({ product, similarProducts, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-2xl font-semibold">{product.Product_Name}</h3>
        <p className="text-sm text-gray-400">Size: {product.Product_Size}</p>
        <p className="text-lg font-bold text-blue-500">₹{product.Rate}</p>
        <p className="text-sm text-gray-300 mt-2">{product.Description || 'No description available.'}</p>
        <h4 className="text-xl mt-4 mb-2">Similar Products:</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {similarProducts.map((item) => (
            <a
              key={item.cacheId}
              href={item.image?.contextLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img src={item.link} alt={item.title} className="w-full h-32 object-cover rounded-md" />
              <p className="text-sm text-center mt-1 text-gray-300 truncate">{item.title}</p>
            </a>
          ))}
        </div>
        <button
          className="w-full py-2 bg-gray-700 rounded-md mt-4 hover:bg-gray-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductModal;