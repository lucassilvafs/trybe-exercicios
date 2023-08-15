// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2 // npm i mysql2@2.3

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});