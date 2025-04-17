import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct, getProductById } from '../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
    const [formData, setFormData] = useState({ Codigo: '', Descricao: '', Preco: 0});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getProductById(id).then(res => setFormData(res.data));
        }
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateProduct(id, formData);
        } else {
            await createProduct(formData);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="Codigo" placeholder="Codigo" value={formData.Codigo} onChange={handleChange} />
            <input name="Descricao" placeholder="Descricao" value={formData.Descricao} onChange={handleChange} />
            <input name="Preco" type="number" placeholder="Preco" value={formData.Preco} onChange={handleChange} />
            <button type="submit">{id ? 'Update' : 'Create'} Product</button>
        </form>
    );
};

export default ProductForm;
