import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import App from './App.jsx';
import Compare from './Compare.jsx';
import './index.css';
import QuotationPage from './components/QuotationPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/quotation" element={<QuotationPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
