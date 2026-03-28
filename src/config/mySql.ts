import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Charisa98",
  database: "Fake_Api_Store",
});

const db = connection.promise();

export default db;
