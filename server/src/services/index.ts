import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'coffee_shop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const conn = pool.promise();
