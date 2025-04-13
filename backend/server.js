const express = require('express');
const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
const PORT = 5050;
const app = express();
const mysql = require('mysql2'); // or 'mysql'

// app.use(cors());
app.use(express.json()); // to parse JSON bodies

// app.use('/products', productRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log('Server running on port ${PORT}'));

const dbConfig= {
    host: 'mysql', 
    port: 3306,
    user: 'user',
    password: 'userpassword', 
    database: 'mydatabase'
};

function connectWithRetry() {
    const connection = mysql.createConnection(dbConfig);
    connection.connect((err) => {
        if (err) {
            console.error('Failed to connect to DB. Retrying in 5 seconds...', err.message);
            setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
        } else {
            console.log('Connected to the database.');

            app.get('/products', (req, res) => { connection.query('SELECT * FROM tblProdutos', (err, results) => {
                    if (err) return res.status(500).send(err);
                    res.json(results);
                });
            });

            app.listen(PORT, '0.0.0.0', () => {
                console.log('Server running on port' + ' ' + (PORT));
            });
        }
// test        

    });
}

connectWithRetry();
