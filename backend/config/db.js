import mysql from 'mysql2/promise'; import 'dotenv/config';

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your needs
    queueLimit: 0        // Unlimited queueing
});

// Test the connection
async function connectDB() {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Database connection successful.');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        throw err; // Let the caller handle it
    } finally {
        if (connection) connection.release();
    }
}

export { connectDB };
export default pool;
