import React from 'react';

function ProductCard({ product, onClick }) {
    return (
        <div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
            onClick={() => onClick(product)}
        >
            {/* Product Image */}
            <div className="w-full h-48 bg-gradient-to-r from-gray-800 to-gray-500 mb-6 rounded-lg overflow-hidden">
                <img
                    src={product.ImageUrl || 'http://5.imimg.com/data5/SELLER/Default/2023/1/ME/EN/DZ/29222426/jindal-star-pipe-500x500.jpg'} // Default placeholder image
                    // alt={product.Product_Name}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
                />
            </div>

            <h3 className="text-xl font-semibold text-white truncate">{product.Product_Name}</h3>
            <p className="text-sm text-gray-400 mt-1">Size: {product.Product_Size}</p>
            <p className="text-lg font-semibold text-blue-500 mt-3">₹{product.Rate}</p>

            {/* Optional: Product Ratings */}
            {product.Rating && (
                <div className="mt-2 text-yellow-400">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index}>
                            {index < product.Rating ? '★' : '☆'}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductCard;
