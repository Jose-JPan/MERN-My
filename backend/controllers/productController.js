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
    }
};
export default productController;
