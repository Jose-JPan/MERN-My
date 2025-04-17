import Product from '../models/productModel.js';

const productController = {
    // Get all products
    getAllProducts: async (req, res) => {
        try {
          const products = await Product.getAll();
          res.json(products);
        } catch (err) {
          console.error('Error fetching products:', err.message);
          res.status(500).json({ message: 'Server error while fetching products' });
        }
    },

    // Get product by ID
    getProductById: async (req, res) => {
        const { id } = req.params;

        try {
          const product = await Product.getById(id);

          if (!product) {
              return res.status(404).json({ message: 'Product not found' });
          }

          res.json(product);
        } catch (err) {
            console.error(`Error fetching product with id ${id}:`, err.message);
            res.status(500).json({ message: 'Server error while fetching product' });
        }
    },

    // Create product
    createProduct: async (req, res) => {
        const { 
            Codigo, 
            Descricao, 
            Unidade, 
            Preco,
            Estoque,
            Ncm,
            Cst,
            Aliquota,
            GrupoID,
            Grupo,
            Ativo,
            Observacao,
            Imagem
        } = req.body;
       
        try {
          const [result] = await Product.create({
              Codigo, 
              Descricao, 
              Unidade, 
              Preco,
              Estoque,
              Ncm,
              Cst,
              Aliquota,
              GrupoID,
              Grupo,
              Ativo,
              Observacao,
              Imagem
        });

        res.status(201).json({ message: 'Product created successfully', productId: result.inserteId });
        } catch (err) {
          console.error('Error creating product:', err.message);
          res.status(500).json({ message: 'Server error while creating product' });
        }
      },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const productData = req.body;

        try {
          const [result] = await Product.update(id, productData);

          if (result.affectedRows === 0) {
              return res.status(404).json({ message: 'Product not found' });
          }

          res.json({ message: 'Product updated successfully' });
        } catch (err) {
         console.error(`Error updating product with id ${id}:`, err.message);
         res.status(500).json({ message: 'Server error while updating product' });
        }
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;

        try {
            const [result] = await Product.delete(id);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.json({ message: 'Product deleted successfully' });
        } catch (err) {
            console.error(`Error deleting product with id ${id}:`, err.message);
            res.status(500).json({  message: 'Server error while deleting product' });
        }
    },

};





















export default productController;
