import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuotationPage() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();

    // Extract product details from URL params
    const productId = query.get('_id');
    const productName = query.get('product');
    const productSize = query.get('size');
    const productRate = query.get('rate');

    // State for form inputs
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyGSTIN, setCompanyGSTIN] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [items, setItems] = useState([{ item: productName, quantity: 1, unit: 'pc', rate: productRate }]);
    const [includeGST, setIncludeGST] = useState(false);
    const [notes, setNotes] = useState('');
    const [showQuotation, setShowQuotation] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowQuotation(true);
    };

    return (
        <div className="p-6 font-sans bg-gray-50 min-h-screen">
            {!showQuotation ? (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Enter Details</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Company Name:</label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Address:</label>
                            <input
                                type="text"
                                value={companyAddress}
                                onChange={(e) => setCompanyAddress(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Company GSTIN:</label>
                            <input
                                type="text"
                                value={companyGSTIN}
                                onChange={(e) => setCompanyGSTIN(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Customer's Name:</label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date:</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mt-6">Item Details</h3>

                    {/* Current Price Box */}
                    <div className="bg-gray-100 p-4 rounded-md">
                        <p className="text-sm text-gray-600">Current Price</p>
                        <p className="text-lg font-semibold">₹{productRate}</p>
                        <p className="text-opacity-10 ">{items[0].item}</p>
                    </div>

                    {/* Customer-Asked Price in Items Table */}
                    <div className="grid grid-cols-4 gap-4 items-center mt-4">
                        <input
                            type="text"
                            value={items[0].item}
                            onChange={(e) => setItems([{ ...items[0], item: e.target.value }])}
                            placeholder="Item"
                            className="p-2 border border-gray-300 rounded-md"
                            required
                            readOnly
                        />

                        <input
                            type="number"
                            value={items[0].quantity}
                            onChange={(e) => setItems([{ ...items[0], quantity: parseInt(e.target.value) }])}
                            placeholder="Quantity"
                            className="p-2 border border-gray-300 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            value={items[0].unit}
                            onChange={(e) => setItems([{ ...items[0], unit: e.target.value }])}
                            placeholder="Unit"
                            className="p-2 border border-gray-300 rounded-md"
                            required
                        />
                        <input
                            type="number"
                            value={items[0].rate}
                            onChange={(e) => setItems([{ ...items[0], rate: parseFloat(e.target.value) }])}
                            placeholder="Rate"
                            className="p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeGST}
                                onChange={(e) => setIncludeGST(e.target.checked)}
                                className="mr-2"
                            />
                            Does your Quotation include GST?
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Notes:</label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows="3"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Generate Quotation
                    </button>
                </form>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Quotation</h2>

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-semibold">{companyName}</h3>
                            <p className="text-gray-600">{companyAddress}</p>
                            <p className="text-gray-600">GSTIN: {companyGSTIN}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-600">Date: {date}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold">Quotation for:</h4>
                        <p className="text-gray-700">{customerName}</p>
                    </div>

                    {/* Current Price Box in Preview */}
                    <div className="bg-gray-100 p-4 rounded-md mb-6">
                        <p className="text-sm text-gray-600">Current Price</p>
                        <p className="text-lg font-semibold">₹{productRate}</p>
                    </div>

                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border border-gray-300">S.N.</th>
                                <th className="p-2 border border-gray-300">Item</th>
                                <th className="p-2 border border-gray-300">Quantity</th>
                                <th className="p-2 border border-gray-300">Unit</th>
                                <th className="p-2 border border-gray-300">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-gray-300 text-center">1</td>
                                <td className="p-2 border border-gray-300">{items[0].item}</td>
                                <td className="p-2 border border-gray-300 text-center">{items[0].quantity}</td>
                                <td className="p-2 border border-gray-300 text-center">{items[0].unit}</td>
                                <td className="p-2 border border-gray-300 text-right">₹{items[0].rate}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-right mb-6">
                        {includeGST && <p className="text-gray-600">(Including GST)</p>}
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold">Notes:</h4>
                        <p className="text-gray-700">{notes}</p>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-600">Thanks for your inquiry!</p>
                        <p className="text-gray-600">Powered by Test Hardware Store</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuotationPage;