import Product from '../models/productModel.js';

const productController = {
    getProducts: async (req, res) => {
        try {
            const products = await Product.getAll();
            res.json(products);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    }
};
export default productController;
