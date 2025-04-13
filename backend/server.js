const express = require('express');
const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
const PORT = 5050;
const app = express();

// app.use(cors());
app.use(express.json()); // to parse JSON bodies

// app.use('/products', productRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log('Server running on port ${PORT}'));

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM tblprodutos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log('Server running on port $(PORT)');
});
