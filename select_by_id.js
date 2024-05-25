let mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

let id = process.argv[2]; // pass argument to query

connection.connect((err) => {
    if (err) return console.log(err.message);

    // let sql = `SELECT * FROM todos WHERE id=` + id; berpotensi menyebabkan SQL injection
    let sql = `SELECT * FROM todos WHERE id=?`;
    // or
    // let sql = `SELECT * FROM todos WHERE id = ` + mysql.escape(id);

    connection.query(sql, [true], (error, results, fields) => {
        if (error) return console.log(error.message);
        console.log(results);
    });

    connection.end();
});