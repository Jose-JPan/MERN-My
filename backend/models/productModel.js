import pool, { connectDB } from '../config/db.js';

const Product = {
    
    getAll: async () => {
        try {
          const [rows] = await pool.query('SELECT * FROM tblProdutos');
          return rows;
        } catch (err) {
            throw err;
        }
     },
    
    getById: async (id) => {
        try {
          const [rows] = await pool.query('SELECT * FROM tblProdutos WHERE ProdutoID= ?', [id]);
          return rows[0]; // Return the first product (or undefined if not found)
        } catch (err) {
            throw err;
        }
    },

    create: async (productData) => {
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
        } = productData;

        try {
          const [result] = await pool.query(
            `INSERT INTO tblProdutos
                (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        [Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem]
          );

          return [result];
        } catch (err) {
            throw err;
        }
    },

    update: async (id, productData) => {
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
         } = productData;

        try {
          const [result] = await pool.query(
              `UPDATE tblProdutos SET
                Codigo = ?,
                Descricao = ?,
                Unidade = ?,
                Preco = ?,
                Estoque = ?,
                Ncm = ?,
                Cst = ?,
                Aliquota = ?,
                GrupoID = ?,
                Grupo = ?,
                Ativo = ?,
                Observacao = ?,
                Imagem = ?
              WHERE ProdutoID= ?`,
              [
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
                Imagem,
                id
              ]
         );

          return [result];
        } catch (err) {
            throw err;
        }
    },

    delete: async (id) => {
      try {
        const [result] = await pool.query('DELETE FROM tblProdutos WHERE ProdutoID = ?', [id]);
        return [result];
        } catch (err) {
             throw err;
        }
    },

};

export default Product;
