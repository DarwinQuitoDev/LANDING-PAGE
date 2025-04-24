import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Mantén solo esta importación y elimina la duplicada
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/ViewPage/App';
import ProductsView from './components/ViewPage/ProductsView';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Productos" element={<ProductsView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
