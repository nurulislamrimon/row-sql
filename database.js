import { config } from "dotenv";
import mysql from "mysql2";
config();
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "raw_sql_learning",
  })
  .promise();

const result = await pool.query("SELECT * FROM students");
console.log(result[0]);
