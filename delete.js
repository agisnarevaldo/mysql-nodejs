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

    let sql = `DELETE FROM todos WHERE id = ?`;

    let data = [1];

    connection.query(sql, data, (error, results, fields) => {
        if (error) return console.log(error.message);
        console.log('Rows affected:', results.affectedRows);
    });

    connection.end();
});