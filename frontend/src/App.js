import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/new" element={<ProductForm />} />
                <Route path="/edit/:id" element={<ProductForm />} />
            </Routes>
       </Router>
    );
}

export default App;
