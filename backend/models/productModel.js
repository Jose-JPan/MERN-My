import db from '../config/db.js';

const Product = {

    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM tblProdutos');
            return rows;
        } catch (err) {
          throw err;
        }
     },

    getById: async (id) => {
        try {
            const [rows] = await db.query('SELECT * FROM tblProdutos WHERE id = ?', [id]);
            return rows[0]; // Return the first product (or undefined if not found)
        } catch (err) {
          throw err;
        }
    }
};

export default Product;
