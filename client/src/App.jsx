import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import ComparisonModal from './components/ComparisonModal.jsx';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SEARCH_ENGINE_ID = import.meta.env.VITE_SEARCH_ENGINE_ID;

function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loadingComparison, setLoadingComparison] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch('https://hardware-store-server.vercel.app/api/products');
      const data = await response.json();
      setProducts(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(query) {
    setSearchQuery(query);
    if (!query) {
      setSearchResults(products);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://hardware-store-server.vercel.app/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error performing search:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchSimilarProducts(query) {
    setLoadingComparison(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q= ${query}&searchType=image&num=5`
      );
      const data = await response.json();
      setSimilarProducts(data.items || []);
    } catch (error) {
      console.error('Error fetching similar products:', error);
    } finally {
      setLoadingComparison(false);
    }
  }

  function openComparisonModal(product) {
    setSelectedProduct(product);
    setIsComparisonModalOpen(true);
    fetchSimilarProducts(product.Product_Name);
  }

  function closeComparisonModal() {
    setIsComparisonModalOpen(false);
    setSelectedProduct(null);
    setSimilarProducts([]);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <Header onLogoClick={fetchProducts} />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      
      {/* Loading spinner for search */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      <ProductList
        products={searchResults}
        loading={loading}
        onProductClick={openComparisonModal}
      />
      {isComparisonModalOpen && selectedProduct && (
        <ComparisonModal
          product={selectedProduct}
          similarProducts={similarProducts}
          onClose={closeComparisonModal}
          loadingComparison={loadingComparison}  // pass loading state to comparison modal
        />
      )}
    </div>
  );
}

export default App;
