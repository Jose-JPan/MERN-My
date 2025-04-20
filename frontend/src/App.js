import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

// Optional: A simple 404 component
function NotFound() {
  return (
     <div>
         <h1>404 - Page Not Found</h1>
         <p>Oops! Nothing to see here.</p>
     </div>
  );
}

function App() {
 return (
     <Router>
         <Routes>
             <Route path="/" element={<ProductList />} />
             <Route path="/products" element={<ProductList />} />
             <Route path="/new" element={<ProductForm />} />
             <Route path="/edit/:id" element={<ProductForm />} />
             {/* 👇 Catch-all route for unknown paths */}
             <Route path="*" element={<NotFound />} />
         </Routes>
     </Router>
 );   
}

                                                                                              
export default App;
