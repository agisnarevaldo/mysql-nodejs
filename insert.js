let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.log(err.message);

  // Insert statement
  let sql = `INSERT INTO todos(title, completed)
             VALUES('I can do insert a new row', false)`;

  // execute the insert statement
  connection.query(sql);

  // close the database connection
  connection.end();
});
