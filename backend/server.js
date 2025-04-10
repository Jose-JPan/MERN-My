const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON bodies

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
