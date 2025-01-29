// import React from 'react';

// function ComparisonModal({ product, similarProducts, onClose }) {
//     return (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
//             <div className="bg-gray-900 p- rounded-lg w-full max-w-6xl relative overflow-hidden">
//                 <button
//                     className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
//                     onClick={onClose}
//                 >
//                     &times;
//                 </button>
//                 <h3 className="text-2xl font-semibold mb-4 text-center">Product Comparison</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[80vh]">
//                     {/* Your Product */}
//                     <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//                         <h4 className="text-2xl font-semibold mb-2 text-center text-white">Your Product</h4>
//                         <img
//                             src={product.image || '/placeholder-product.png'}
//                             // alt={product.Product_Name}
//                             className="bg-gray-700 w-full h-48 object-cover rounded-md mb-4"
//                         />
//                         <p className="text-lg font-semibold text-center text-white">{product.Product_Name}</p>
//                         <p className="text-sm text-gray-400 text-center">Size: {product.Product_Size}</p>
//                         <p className="text-lg font-bold text-blue-500 text-center">₹{product.Rate}</p>
//                         <p className="text-sm text-gray-300 mt-2 text-center">
//                             {product.Description || 'No description available.'}
//                         </p>
//                         {/* Generate Quotation Button */}
//                         <div className="mt-6 text-center">
//                             <button
//                                 onClick={() => window.location.href = `https://example.com?product=${product.Product_Name}&rate=${product.Rate}`}
//                                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
//                             >
//                                 Generate Quotation
//                             </button>
//                         </div>

//                         {/* Summary Box - Why Our Product is Better */}
//                         <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-pink-600 rounded-lg text-white text-center">
//                             <h5 className="text-xl font-semibold">Why Our Product is Better</h5>
//                             <ul className="list-disc list-inside text-left mt-2">
//                                 <li>Superior quality materials ensuring long-lasting performance.</li>
//                                 <li>Affordably priced for the quality and features offered.</li>
//                                 <li>Customer satisfaction guarantee with easy returns and support.</li>
//                                 <li>Eco-friendly production with sustainable processes.</li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Similar Products */}
//                     <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//                         <h4 className="text-2xl font-semibold mb-2 text-center text-white">Similar Products</h4>
//                         <div className="space-y-6">
//                             {similarProducts.map((item, index) => (
//                                 <div key={index} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-md">
//                                     <img
//                                         src={item.link}
//                                         alt={item.title}
//                                         className="w-24 h-24 object-cover rounded-md"
//                                     />
//                                     <div>
//                                         <p className="text-lg font-bold text-white">{item.title}</p>
//                                         <p className="text-sm text-gray-400">
//                                             Price: ₹{item.snippet?.match(/₹\s*(\d+)/)?.[1] || 'N/A'}
//                                         </p>
//                                         <a
//                                             href={item.image.contextLink}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-sm text-blue-500 hover:underline"
//                                         >
//                                             View Product
//                                         </a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <button
//                     className="w-full py-2 bg-gray-700 rounded-md mt-4 hover:bg-gray-600 transition-colors"
//                     onClick={onClose}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ComparisonModal;

import React from 'react';

function ComparisonModal({ product, similarProducts, onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
            <div className="bg-gray-900 p-6 rounded-lg w-full max-w-6xl relative overflow-hidden">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h3 className="text-2xl font-semibold mb-4 text-center">Product Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden max-h-[80vh]">
                    {/* Your Product */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-y-auto scrollbar-hidden max-h-[80vh]">
                        <h4 className="text-2xl font-semibold mb-2 text-center text-white">Your Product</h4>
                        <img
                            src={product.image || 'http://5.imimg.com/data5/SELLER/Default/2023/1/ME/EN/DZ/29222426/jindal-star-pipe-500x500.jpg'}
                            className="bg-gray-700 w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-lg font-semibold text-center text-white">{product.Product_Name}</p>
                        <p className="text-sm text-gray-400 text-center">Size: {product.Product_Size}</p>
                        <p className="text-lg font-bold text-blue-500 text-center">₹{product.Rate}</p>
                        <p className="text-sm text-gray-300 mt-2 text-center">
                            {product.Description || 'No description available.'}
                        </p>
                        {/* Generate Quotation Button */}
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => window.location.href = `https://example.com?product=${product.Product_Name}&rate=${product.Rate}`}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                            >
                                Generate Quotation
                            </button>
                        </div>

                        {/* Summary Box - Why Our Product is Better */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-pink-600 rounded-lg text-white text-center">
                            <h5 className="text-xl font-semibold">Why Our Product is Better</h5>
                            <ul className="list-disc list-inside text-left mt-2">
                                <li>Superior quality materials ensuring long-lasting performance.</li>
                                <li>Affordably priced for the quality and features offered.</li>
                                <li>Customer satisfaction guarantee with easy returns and support.</li>
                                <li>Eco-friendly production with sustainable processes.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Similar Products */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-y-auto scrollbar-hidden max-h-[80vh]">
                        <h4 className="text-2xl font-semibold mb-2 text-center text-white">Similar Products</h4>
                        <div className="space-y-6">
                            {similarProducts.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-md">
                                    <img
                                        src={item.link}
                                        alt={item.title}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div>
                                        <p className="text-lg font-bold text-white">{item.title}</p>
                                        <p className="text-sm text-gray-400">
                                            Price: ₹{item.snippet?.match(/₹\s*(\d+)/)?.[1] || 'N/A'}
                                        </p>
                                        <a
                                            href={item.image.contextLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-500 hover:underline"
                                        >
                                            View Product
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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

export default ComparisonModal;
