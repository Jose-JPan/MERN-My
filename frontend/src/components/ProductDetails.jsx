import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error loading product:', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.Descricao}</h2>
      {/* <p>Preço: R$ {product.Preco}</p> */}
      <p>Preço: R$ {product.Preco}</p>
      <p>Unidade: {product.Unidade}</p>
      {/* more fields if needed */}
    </div>
  );
};

export default ProductDetails;

