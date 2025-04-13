import express from 'express';
import cors from 'cors';
const PORT = 5050;
const app = express();
import connectWithRetry from './config/db.js';
app.use(cors());
app.use(express.json()); // to parse JSON bodies

//app.use('/products', productRoutes);

// Requiring routes
import productRoutes from './routes/productRoutes.js';

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log('Server running on port ${PORT}'));

connectWithRetry();

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port' + ' ' + (PORT));
});
 

