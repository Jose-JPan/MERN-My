import api from './axiosInstance';

console.log("API BASE URL:", process.env.REACT_APP_API_URL);

// Get all products
export const getAllProducts = () => api.get('/products');

// Get a single product by ID
export const getProductById = (id) => api.get(`/products/${id}`);

// Create a new product
export const createProduct = (data) => api.post('/products', data);

// Update a product
export const updateProduct = (id, data) => api.put(`products/${id}`, data);

// Delete a product
export const deleteProduct = (id) => api.delete(`products/${id}`);
