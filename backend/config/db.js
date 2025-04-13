import mysql from 'mysql2';
import 'dotenv/config';

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your needs
    queueLimit: 0        // Unlimited queueing
});

// Test the connection
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database.');
        connection.release(); // Always release the connection back to the pool
    } catch (err) {
        console.error('Unable to connect to the database:', err.message);
        setTimeout(testConnection, 5000); // Retry after 5 seconds if it fails
    }
}

// Start the initial connection test
testConnection();

export default pool;
