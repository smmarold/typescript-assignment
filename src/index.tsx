import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductDetail from './components/products/ProductDetail';
import ProductsList from './components/products/ProductsList';
import RouteNotFound from './components/RouteNotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <div className="flex-centered">This is the home screen</div>
            }
          />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
