import axios from 'axios';

// Base URL for the backend
const API_URL = 'http://localhost:5050/products';

// Get all products
export const getAllProducts = () => axios.get(API_URL);

// Get a single product by ID
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);

// Create a new product
export const createProduct = (data) => axios.post(API_URL, data);

// Update a product
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete a product
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
