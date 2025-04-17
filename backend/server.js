import express from 'express';
import cors from 'cors';
const PORT = 5050;
const app = express();
import { connectDB } from './config/db.js';
app.use(cors());
app.use(express.json()); // to parse JSON bodies


// Requiring routes
import productRoutes from './routes/productRoutes.js';

try {
    await connectDB();
} catch (error) {
    console.error('Failed to start server because database connection failed.');
    process.exit(1); // Exit app if db is essential
}

app.use('/products', productRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port' + ' ' + (PORT));
});
 

