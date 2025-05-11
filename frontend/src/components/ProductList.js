import { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../api/productApi';

const ProductList = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const fetchData = async () => {
        try {
            setLoading(true);
            const res = await getAllProducts();
            setProducts(res.data);
            setError(null);
        } catch (err) {
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
      };

      const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            await deleteProduct(id);
            fetchData();
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

      return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-red-800">Product List</h2>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !products.length && <p>No products found.</p>}
            {products.map(product => (
                <div key={product.ProdutoID} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                    <p>{product.Descricao} - R$ {product.Preco}</p>
                        <button onClick={() => handleDelete(product.ProdutoID)}>Delete</button>
                </div>
            ))}
        </div>
      );
};

export default ProductList;
